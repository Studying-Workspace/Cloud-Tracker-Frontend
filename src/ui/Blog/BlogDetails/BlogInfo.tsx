import { IoPersonCircleOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { LuUpload } from "react-icons/lu";

const BlogInfo = () => {
  return (
    <div className="mt-36 flex-col space-y-10 px-36 font-poppins tablet:mt-20 tablet:px-20 mobile:mt-14 mobile:space-y-5 mobile:px-10">
      {/* title */}
      <p className="text-[64px] font-bold tablet:text-[35px] mobile:text-[18px]">
        Exploring the Future of Digital Innovation
      </p>
      <div className="flex items-center justify-between text-4xl tablet:text-2xl mobile:text-xs">
        {/* publisher */}
        <div className=" flex items-center gap-1">
          <IoPersonCircleOutline className="text-8xl text-gray-600 tablet:text-5xl mobile:text-4xl" />
          <p className="text-gray-600">Publisher</p>
        </div>
        {/* date */}
        <div className="flex text-gray-400">April 19,2024</div>
      </div>
      <div className="flex h-20 items-center justify-between border-y-2 border-gray-300 text-3xl tablet:text-2xl mobile:h-10 mobile:text-sm">
        <p className="text-gray-400">6 min read</p>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2 mobile:gap-1">
            <p className="text-gray-400">100</p>
            <BiLike className="text-4xl text-gray-600 tablet:text-2xl mobile:text-xl" />
          </div>
          <div>
            <LuUpload className="text-4xl text-gray-600 tablet:text-2xl mobile:text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
