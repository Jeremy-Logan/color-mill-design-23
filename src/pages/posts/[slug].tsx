import _ from "lodash";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import React from "react";
import PortableText from "react-portable-text";

 import BlogPreviewSection from '../../components/BlogPreviewSection'
import PageLayout from "../../components/PageLayout";
import serializers from "../../lib/portableText-serializers";
import { urlForImage } from "../../lib/sanity";
import { sanityClient } from "../../lib/sanity-server";
import type { PostData } from "../../lib/types";
import { Post } from "../../lib/types";

interface Props {
  post: PostData;
  previews: PostData | any;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
}
const Post = ({ post, previews }: Props) => {
  const { previews: posts } = previews;
  const imageProps: any = useNextSanityImage(sanityClient, post.mainImage);

  return (
    <PageLayout title={post.title} description={post.title}>
      <main>
        <div className="relative top-4 z-0 mx-auto h-[50vh] w-full max-w-[1600px] md:h-[60vh]">
          {post.mainImage && (
            <Img
              alt={post.title}
              src={imageProps.src}
              loader={imageProps.loader}
              fill={true}
              priority={true}
              quality={80}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw,
              					(max-width: 1200px) 50vw,
              					33vw"
            />
          )}
        </div>
        <article className="mx-auto max-w-4xl p-5">
          <h1 className="mt-10 mb-1 text-3xl">{post.title}</h1>
          {post.categories &&
            post.categories.map((category, i: number) => (
              <p
                className="text-md"
                style={{ color: category.color.value }}
                key={i}
              >
                {category.title}
              </p>
            ))}
          <div className="mt-4 flex flex-col items-start space-y-2 ">
            <div className="relative h-16 w-16 space-y-2 rounded-full">
              {post.author.image && (
                <Img
                  fill={true}
                  style={{ objectFit: "contain" }}
                  className=""
                  src={urlForImage(post.author.image).url()!}
                  alt={post.author.name}
                  sizes="(max-width: 768px) 15vw,
              					(max-width: 1200px) 15vw,
              					15vw"
                />
              )}
            </div>
            <p className="text-sm font-light">
              Blog post by{" "}
              <span className="text-pa-green-4">{post.author.name}</span> <br />
              published {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
          <div className="my-10">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={post.body}
              serializers={serializers()}
            />
          </div>
        </article>
        <h2 className="text-bold bg-pa-blue-4 pt-10 text-center text-4xl text-white">
          You might also like...
        </h2>
        <BlogPreviewSection posts={posts} title=''/>
      </main>
    </PageLayout>
  );
};
export async function getStaticPaths() {
  const query = `*[_type == 'post']{
        _id,
        slug  {
        current
      }
      }`;
  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking", // false or 'blocking'
  };
}

const postQuery = `
    *[_type == 'post' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        slug,
        author->{name, image},
      publishedAt,
      excerpt,
      categories[]-> { title, color },
      mainImage,
      description,
      body, 
      
      }
    `;

const previewQuery = `{"previews" :*[_type == "post"] | order(publishedAt desc)[0...3]
{	_id,
	_createdAt,
	title,
	slug,
	author->{name, image},
  publishedAt,
  excerpt,
  'category': categories[]-> { title, color },
  mainImage,
  description,
  body, }
  }`;

export async function getStaticProps({ params }: any) {
  const previews = await sanityClient.fetch(previewQuery);
  const post = await sanityClient.fetch(postQuery, {
    slug: params?.slug,
  });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
      previews,
    },
    revalidate: 60,
  };
}

export default Post;
