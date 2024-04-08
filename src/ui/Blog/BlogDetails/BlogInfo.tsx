import { IoPersonCircleOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { LuUpload } from "react-icons/lu";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const BlogInfo = () => {
  const [blogs, setBlogs] = useState(String);

  useEffect(() => {
    fetch("../Cloud-Tracker-Frontend/src/ui/Blog/BlogDetails/file.HTML")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text();
      })
      .then((data) => {
        setBlogs(data), console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching HTML:", error);
      });
  }, []);
  return (
    <div
      className="mt-24 flex-col space-y-10 px-72 pb-20 font-poppins tablet:mt-20
     tablet:px-20 mobile:mt-14 mobile:space-y-5 mobile:px-10"
    >
      {/* title */}
      <div
        className="text-[45px] font-bold tablet:text-[35px] mobile:text-[22px]"
        data-testid="title"
      >
        AWS Identity and Access Management (IAM)
      </div>
      <div className="flex items-center justify-between text-3xl tablet:text-2xl mobile:text-xs">
        {/* publisher */}
        <div className=" flex items-center gap-1">
          <IoPersonCircleOutline
            className="text-6xl text-gray-600 tablet:text-5xl mobile:text-4xl"
            data-testid="publisherImage"
          />
          <p className="text-gray-600" data-testid="publisherName">
            Publisher
          </p>
        </div>
        {/* date */}
        <div className="flex text-gray-400" data-testid="date">
          April 19,2024
        </div>
      </div>
      <div
        className="flex h-20 items-center justify-between border-y-2 border-gray-300
       text-3xl tablet:text-2xl mobile:h-10 mobile:text-sm"
      >
        {/* Read time */}
        <p className="text-gray-400" data-testid="readInfo">
          6 min read
        </p>
        <div className="flex items-center justify-center gap-2">
          {/* Reacts */}
          <div className="flex items-center justify-center gap-2 mobile:gap-1">
            <p className="text-gray-400" data-testid="likecounter">
              100
            </p>
            <BiLike
              className="text-4xl text-gray-600 tablet:text-2xl mobile:text-xl"
              data-testid="likeIcon"
            />
          </div>
          {/* Share */}
          <div>
            <LuUpload
              className="text-4xl text-gray-600 tablet:text-2xl mobile:text-xl"
              data-testid="shareIcon"
            />
          </div>
        </div>
      </div>
      {/* The Blog */}
      <div data-testid="content" dangerouslySetInnerHTML={{ __html: blogs }} />
    </div>
  );
};

export default BlogInfo;
