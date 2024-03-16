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
          <IoPersonCircleOutline className="text-4xl text-gray-600" />
          <p className="text-sm text-gray-600">Publisher</p>
        </div>
        {/* date */}
        <div className="text-sm text-gray-500">April 19,2024</div>
      </div>

      {/* body */}
      <div className="flex items-center justify-between">
        {/* container */}
        <div className="flex w-[40%] flex-col gap-6">
          <p className="text-2xl font-bold">
            Exploring the Future of Digital Innovation
          </p>

          <p className="text-lg">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum justo quis urna posuere, sed sodales nisl facilisis.
            Phasellus suscipit, ipsum sed consectetur efficitur, leo felis....
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-fit rounded-full border-2 border-linearOrange-200 px-6 py-1 text-center font-semibold">
                Cloud
              </div>
              <div className="text-sm text-gray-500">6 min read</div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <p className="text-sm text-gray-500">100</p>
                <BiLike className="text-xl text-gray-600" />
              </div>
              <div>
                <LuUpload className="text-xl text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <img src={blogImg} alt="img" className=" h-32 w-32 self-start" />
      </div>
    </div>
  );
};

export default BlogElement;
