import _ from "lodash";
import type { GetStaticProps } from "next";
import Img from "next/image";
import Link from "next/link";

import BlogFeaturedPosts from "../components/BlogFeaturedPosts";
import BlogPreviewSection from "../components/BlogPreviewSection";
import PageLayout from "../components/PageLayout";
import { POST_DATA_QUERY } from "../lib/queries";
import { urlForImage } from "../lib/sanity";
import { sanityClient } from "../lib/sanity-server";
import type { PageData } from "../lib/types";


interface PageProps {
  data: PageData | null;
  preview: boolean;
  slug: string | null;
  token: string | null;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch<PageData | null>(POST_DATA_QUERY);

  return {
    props: {
      data,
    },
  };
};

export default function Page(props: PageProps) {
  const posts = _.flatMap(props);
  const firstThreePosts = posts.slice(1, 4);
  const metaData = {
    "type": "website",
    "headline": "News",
    "description": "Stay informed with the latest insights, trends, and best practices in brand strategy, web design, and graphic design for nonprofits and small businesses on the Color Mill Design blog.",
    "slug": "news",
    "image": "/color-mill-logo.jpg",
    "datePublished": null,
    "dateModified": null,
    "author": null
  }

  return (
    <PageLayout
    {...metaData}
    >
      <main>
        <div className="mx-auto mt-12 mb-24 flex max-w-[1800px] flex-col justify-center md:flex-row">
          <div className="group w-full cursor-pointer bg-white p-4 pb-16 md:m-4 md:w-6/12 md:border-[2px] md:border-rose-300 lg:p-10 xl:mx-12 xl:w-5/12 2xl:w-6/12">
            <Link href={`/posts/${posts[0].slug.current}`} key={posts[0]._id}>
              <div className="relative w-full aspect-square">
                {posts[0].mainImage && (
                  <Img
                    src={urlForImage(posts[0].mainImage).url()!}
                    alt={posts[0].title}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                )}
              </div>
              <h1 className="mt-10 mb-1 text-xl group-hover:underline lg:text-3xl">
                {posts[0].title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {posts[0].category.map((c: any, i: number) => (
                  <p
                    className="text-md"
                    style={{
                      color: `${c.color.value}`,
                    }}
                    key={i}
                  >
                    {c.title}
                  </p>
                ))}
              </div>
              <div className="flex flex-col items-start mt-4 space-y-2 ">
                {posts[0].author.image && (
                  <div className="relative w-16 h-16 space-x-2 rounded-full">
                    <Img
                      fill={true}
                      style={{ objectFit: "contain" }}
                      className=""
                      src={urlForImage(posts[0].author.image).url()!}
                      alt={posts[0].author.name}
                      sizes="(max-width: 768px) 15vw,
              					(max-width: 1200px) 15vw,
              					15vw"
                    />
                  </div>
                )}
                <p className="mb-2 text-base font-light">
                  Blog post by{" "}
                  <span className="font-medium text-green-700 ">
                    {posts[0].author.name}
                  </span>{" "}
                  <br />
                  published{" "}
                  {new Date(posts[0].publishedAt).toLocaleDateString()}
                </p>
              </div>
              <div className="mt-2">
                <p>{posts[0].excerpt}</p>
              </div>
              <p className="mt-2 text-blue-600 underline underline-offset-2">
                Read full story
              </p>
            </Link>
          </div>
          <BlogFeaturedPosts posts={posts} />
        </div>
        <BlogPreviewSection posts={firstThreePosts} title="You also might like..." />
      </main>
    </PageLayout>
  );
}
