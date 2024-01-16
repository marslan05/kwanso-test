import React from "react";

interface post {
  post?: Record<string, string>;
}

const VerticallBlogCard: React.FC<post> = ({ post }) => {
  return (
    <>
      {post ? (
        <article
          key={post.id}
          className="flex flex-col p-4 border rounded-xl border-gray-200 items-start justify-between"
        >
          <div className="relative w-full">
            <img
              src={post?.postImage}
              alt="Blog Card"
              className="w-full rounded-xl object-cover "
            />
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-sm w-max font-semibold text-indigo-500">
              {post?.postTag}
            </span>
            <h3 className=" font-semibold text-3xl leading-10 text-gray-900">
              {post?.postTitle}
            </h3>
            <div className="flex align-middle items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gray-200 block"></span>
              <span className="text-gray-400 text-sm font-bold">
                {post?.postAuthor}
              </span>
              <span className="text-gray-400 text-sm font-semibold">
                {post?.postDate}
              </span>
            </div>
          </div>
        </article>
      ) : null}
    </>
  );
};

export default VerticallBlogCard;
