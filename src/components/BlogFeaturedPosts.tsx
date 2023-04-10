import _ from "lodash";
import Link from "next/link";
import { useState } from "react";

import { PostData } from "../lib/types";

type Props = { posts: PostData[] };

export default function BlogFeaturedPosts({ posts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const firstEightPosts = posts.slice(0, 8);
  const uniqueCategories = _.uniqBy(
    _.flatMap(posts, (post) => post.category[0]),
    "title"
  );

  return (
    <div className=" mx-4 w-full self-center md:w-5/12 md:self-start lg:w-6/12 xl:w-4/12">
      <div className=" border-b-pa-navy-3 flex flex-col border-b-2 bg-white p-4 pb-2 ">
        <h2 className="mb-2 text-2xl">Featured Posts</h2>
        <div className="flex w-full justify-center">
          <button
            className={`m-[2px] px-3 py-1 text-sm font-light  ${
              selectedCategory === "all"
                ? "bg-cyan-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          {uniqueCategories.map((category: any, i: number) => (
            <button
              className="m-[2px] px-3 py-1 text-sm font-light"
              style={{
                color: selectedCategory === category.title ? "white" : "black",
                backgroundColor:
                  selectedCategory === category.title
                    ? category.color.value
                    : "#e5e7eb",
              }}
              key={i}
              onClick={() => setSelectedCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col divide-y overflow-hidden bg-white ">
        {selectedCategory === "all"
          ? firstEightPosts.slice(1).map((post: any) => (
              <Link
                href={`/posts/${post.slug.current}`}
                key={post._id}
                className=" group cursor-pointer p-4 pl-2"
              >
                <div className=" flex w-full justify-between">
                  <h3 className="mb-3 w-8/12 group-hover:underline lg:text-xl">
                    {post.title}
                  </h3>
                  <div className="flex flex-col text-right">
                    {post.category.map((c: any, i: number) => (
                      <p
                        key={i}
                        className="text-sm"
                        style={{
                          color: `${c.color.value}`,
                        }}
                      >
                        {c.title}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-sm text-gray-700">{post.author.name}</p>
                  <p className=" text-xs text-gray-700">
                    {post.publishedAt.replace(/-/g, "/").replace(/T.+/, "")}
                  </p>
                </div>
              </Link>
            ))
          : posts
              .filter((posts: any) =>
                posts.category.some(
                  (category: {title: string}) => category.title === selectedCategory
                )
              )
              .slice(0, 8)
              .map((post: any) => (
                <Link
                  href={`/posts/${post.slug.current}`}
                  key={post._id}
                  className=" group cursor-pointer p-4 pl-2"
                >
                  <div className=" flex w-full justify-between">
                    <h3 className="mb-3 w-full group-hover:underline lg:text-xl">
                      {post.title}
                    </h3>
                    <div className="flex flex-col text-right">
                      {post.category.map((c: any, i: number) => (
                        <p
                          key={i}
                          className="text-sm"
                          style={{
                            color: `${c.color.value}`,
                          }}
                        >
                          {c.title}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-sm text-gray-700">{post.author.name}</p>
                    <p className="self-center text-xs text-gray-700">
                      {post.publishedAt.replace(/-/g, "/").replace(/T.+/, "")}
                    </p>
                  </div>
                </Link>
              ))}
      </div>
    </div>
  );
}
