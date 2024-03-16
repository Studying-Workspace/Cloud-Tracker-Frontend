import { IoPersonCircleOutline } from "react-icons/io5";
import blogImg from "../../assets/blogImg.png";
import { BiLike } from "react-icons/bi";
import { LuUpload } from "react-icons/lu";

const BlogElement = () => {
  return (
    <div className="flex flex-col gap-6 py-6">
      {/* head */}
      <div className="flex items-center justify-between">
        {/* publisher */}
        <div className="flex items-center gap-1">
          <IoPersonCircleOutline className="text-4xl text-gray-600 mobile:text-3xl" />
          <p className="text-sm text-gray-600 mobile:text-xs">Publisher</p>
        </div>
        {/* date */}
        <div className="text-sm text-gray-500 mobile:text-xs">
          April 19,2024
        </div>
      </div>

      {/* body */}
      <div className="flex items-center justify-between mobile:flex-col-reverse mobile:gap-2">
        {/* container */}
        <div className="flex w-[60%] flex-col gap-6 mobile:w-full">
          <p className="text-2xl font-bold mobile:text-center mobile:text-sm tablet:text-lg">
            Exploring the Future of Digital Innovation
          </p>

          <p className="text-lg mobile:hidden tablet:hidden">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum justo quis urna posuere, sed sodales nisl facilisis.
            Phasellus suscipit, ipsum sed consectetur efficitur, leo felis....
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-fit rounded-full border-2 border-linearOrange-200 px-6 py-1 text-center font-semibold mobile:px-4 mobile:text-xs">
                Cloud
              </div>
              <div className="text-sm text-gray-500 mobile:text-xs">
                6 min read
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <p className="text-sm text-gray-500 mobile:text-xs">100</p>
                <BiLike className="text-xl text-gray-600 mobile:text-lg" />
              </div>
              <div>
                <LuUpload className="text-xl text-gray-600 mobile:text-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <img
          src={blogImg}
          alt="img"
          draggable="false"
          className=" h-32 w-32 self-start mobile:h-24 mobile:w-24 mobile:self-center tablet:h-24 tablet:w-24"
        />
      </div>
    </div>
  );
};

export default BlogElement;
