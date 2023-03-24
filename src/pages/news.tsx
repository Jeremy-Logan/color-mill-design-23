import type { GetStaticProps } from "next";
import { POST_DATA_QUERY } from "../lib/queries";
import type { PageData } from "../lib/types";
import { sanityClient } from "../lib/sanity-server";
import { urlForImage } from "../lib/sanity";
import _ from "lodash";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import Img from "next/image";

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
  const firstThreePosts = posts.slice(0, 3);

  return (
    <PageLayout
      title="Point Arena Lighthouse"
      description="Come stay at the Point Arena Lighthouse!"
    >
      <main>
        
        <div className="mx-auto mb-24 flex max-w-[1600px] flex-col justify-center md:flex-row">
          <div className="md:border-pa-navy-4 group w-full cursor-pointer bg-white p-4 pb-16 md:m-4 md:w-6/12 md:border-[2px] lg:m-12 lg:w-5/12 lg:p-10">
            <Link href={`/posts/${posts[0].slug.current}`} key={posts[0]._id}>
              <div className="relative aspect-square w-full">
                {posts[0].mainImage && (
                  <Img
                    src={urlForImage(posts[0].mainImage).url()!}
                    alt={posts[0].title}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw,
              					(max-width: 1200px) 50vw,
              					40vw"
                  />
                )}
              </div>
              <h1 className="mt-10 mb-1 text-3xl group-hover:underline">
                {posts[0].title}
              </h1>

              {posts[0].category.map((c: any, i: number) => (
                <p
                  className="text-md"
                  // style={{
                  // 	color: `${c.color.value}`,
                  // }}
                  key={i}
                >
                  {c.title}
                </p>
              ))}
              <div className="mt-4 flex flex-col items-start space-x-2 ">
                <div className="relative h-16 w-16 space-x-2 rounded-full">
                 { posts[0].author.image &&  <Img
                    fill={true}
                    style={{ objectFit: "contain" }}
                    className=""
                    src={urlForImage(posts[0].author.image).url()!}
                    alt={posts[0].author.name}
                    sizes="(max-width: 768px) 15vw,
              					(max-width: 1200px) 15vw,
              					15vw"
                  />}
                </div>
                <p className="mb-2 text-sm font-light">
                  Blog post by{" "}
                  <span className="text-pa-green-4">
                    {posts[0].author.name}
                  </span>{" "}
                  <br />
                  published at {new Date(posts[0].publishedAt).toLocaleString()}
                </p>
              </div>
              <div>
                <p>{posts[0].excerpt}</p>
              </div>
              <p className="text-pa-blue-4 mt-2 underline underline-offset-2">
                Read full story
              </p>
            </Link>
          </div>
          {/* <BlogFeaturedPosts posts={posts} /> */}
        </div>

        <h2 className="text-bold bg-pa-blue-4 pt-10 text-center text-2xl text-white sm:text-4xl">
          You might also like...
        </h2>
        {/* <BlogPreviewSection posts={firstThreePosts} title='' /> */}
      </main>
    </PageLayout>
  );
}
