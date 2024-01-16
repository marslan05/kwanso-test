import React from "react";
import postList from "../json/postlist.json";
import VerticallBlogCard from "./verticallblogcard";
import HorizontalBlogCard from "./horizontalblogcard";

interface BlogGridProps {
  blogLayout?: string;
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogLayout }) => {
  const post = postList?.post;
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 py-8 ">
      {blogLayout === "verticall" ? (
        <>
          <div
            className={` ${
              post && post?.length > 0
                ? "grid xl:grid-cols-3 lg:grid-col-3 md:grid-col-2 sm:grid-cols-2 grid-co1s-1 pb-7 gap-5"
                : "flex align-middle justify-center items-center"
            } `}
          >
            {post && post?.length > 0 ? (
              post?.map((item) => {
                return <VerticallBlogCard key={item?.postId} post={item} />;
              })
            ) : (
              <p className="text-gray-600 font-semibold text-2xl">
                No Posts to show
              </p>
            )}
          </div>
          <button className="w-max px-10 py-2 mx-auto block rounded-full border border-gray-800 text-xl font-semibold ">
            View More Artice
          </button>
        </>
      ) : (
        <div className="pt-6">
          <h1 className="text-gray-900 text-4xl font-bold pb-3 mb-4 border-b border-gray-200">
            Trending
          </h1>
          <div
            className={` ${
              post && post?.length > 0
                ? "grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-co1s-1 gap-5"
                : "flex align-middle justify-center items-center"
            } `}
          >
            {post && post?.length > 0 ? (
              post?.map((item) => {
                return <HorizontalBlogCard key={item?.postId} post={item} />;
              })
            ) : (
              <p className="text-gray-600 font-semibold text-2xl">
                No Posts to show
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
