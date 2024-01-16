import React from "react";

interface Post {
  post?: Record<string, string>;
}

const HorizontalBlogCard: React.FC<Post> = ({ post }) => {
  return (
    <>
      {post ? (
        <article
          key={post.id}
          className="flex sm:flex-row flex-col align-middle p-4 border rounded-xl border-gray-200 justify-between gap-5"
        >
          <div className="relative sm:h-full h-[330px] sm:w-[250px] w-full">
            <img
              src={post?.postImage}
              alt="Blog Card"
              className="w-full rounded-xl sm:h-full h-[330px] object-cover "
            />
          </div>
          <div className="flex flex-col w-full gap-3 pt-4">
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
      ) : // <article
      //   key={post.id}
      //   className="flex flex-col p-4 border rounded-xl border-gray-200 items-start justify-between"
      // >
      //   <div className="relative w-full">
      //     <img
      //       src={post.postImage}
      //       alt=""
      //       className="w-full rounded-xl object-cover "
      //     />
      //   </div>
      //   <div className="flex flex-col gap-3 pt-4">
      //     <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-sm w-max font-semibold text-indigo-500">
      //       Technology
      //     </span>
      //     <h3 className=" font-semibold text-3xl leading-10 text-gray-900">
      //       {post.postTitle}
      //     </h3>
      //     <div className="flex align-middle items-center gap-3">
      //       <span className="w-10 h-10 rounded-full bg-gray-200 block"></span>
      //       <span className="text-gray-400 text-sm font-bold">
      //         Tracy Willsom
      //       </span>
      //       <span className="text-gray-400 text-sm font-semibold">
      //         August 20, 2022
      //       </span>
      //     </div>
      //   </div>
      // </article>
      null}
    </>
  );
};

export default HorizontalBlogCard;
