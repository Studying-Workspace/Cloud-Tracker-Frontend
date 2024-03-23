import { IoPersonCircleOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { LuUpload } from "react-icons/lu";
import blogImg from "../../../assets/blogImgDetails.png";
import Heading from "../../Heading";

const BlogInfo = () => {
  return (
    <div className="mt-24 flex-col space-y-10 px-72 font-poppins mobile:mt-14 mobile:space-y-5 mobile:px-10 tablet:mt-20 tablet:px-20">
      {/* title */}
      <Heading type="h0">Exploring the Future of Digital Innovation</Heading>
      <div className="flex items-center justify-between text-3xl mobile:text-xs tablet:text-2xl">
        {/* publisher */}
        <div className=" flex items-center gap-1">
          <IoPersonCircleOutline className="text-6xl text-gray-600 mobile:text-4xl tablet:text-5xl" />
          <p className="text-gray-600">Publisher</p>
        </div>
        {/* date */}
        <div className="flex text-gray-400">April 19,2024</div>
      </div>
      <div className="flex h-20 items-center justify-between border-y-2 border-gray-300 text-3xl mobile:h-10 mobile:text-sm tablet:text-2xl">
        <p className="text-gray-400">6 min read</p>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2 mobile:gap-1">
            <p className="text-gray-400">100</p>
            <BiLike className="text-4xl text-gray-600 mobile:text-xl tablet:text-2xl" />
          </div>
          <div>
            <LuUpload className="text-4xl text-gray-600 mobile:text-xl tablet:text-2xl" />
          </div>
        </div>
      </div>
      <div className="mx-auto w-[700px] space-y-6 mobile:w-[300px] tablet:w-[600px]">
        <img
          src={blogImg}
          className="h-[500px] mobile:h-[250px] tablet:h-[450px]"
        ></img>
        <Heading type="h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus
          libero. Sed at tincidunt nisi. Nulla facilisi. Cras ultricies augue
          eget neque consequat mollis. Fusce auctor lorem nec purus euismod, id
          vehicula est faucibus. Phasellus vitae magna sed purus fermentum
          pulvinar. Pellentesque at suscipit enim. Proin tempor neque id nisi
          tincidunt, id venenatis odio venenatis. Nullam id nisi eu justo
          iaculis commodo ut at lacus. Nulla facilisi. Ut a ligula ut ex
          interdum pharetra. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Vivamus venenatis erat sed
          hendrerit tincidunt. Donec sed purus eget nisi facilisis bibendum.
          Fusce gravida bibendum sapien, at vehicula leo pharetra id. Integer a
          neque sit amet ipsum accumsan fringilla vitae id libero. In hendrerit
          velit vitae diam fermentum lobortis. Nullam tincidunt ex sed ligula
          ultrices, id vestibulum nulla bibendum. Nam eu lectus nec lacus
          pellentesque pulvinar. Nulla ac enim consequat, eleifend
        </Heading>
        <Heading type="h1">The Section Title</Heading>
        <img
          src={blogImg}
          className="mx-auto h-[250px] w-[500px] mobile:h-[200px] mobile:w-[250px]"
        ></img>
        <Heading type="h2"> Point1: </Heading>
        <Heading type="h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus
          libero. Sed at tincidunt nisi. Nulla facilisi. Cras ultricies augue
          eget neque consequat mollis. Fusce auctor lorem nec purus euismod, id
          vehicula est faucibus. Phasellus vitae magna sed purus fermentum
          pulvinar.
        </Heading>
        <Heading type="h2"> Point2: </Heading>
        <img
          src={blogImg}
          className="mx-auto h-[250px] w-[500px] mobile:h-[200px] mobile:w-[250px]"
        ></img>
        <Heading type="h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus
          libero. Sed at tincidunt nisi. Nulla facilisi. Cras ultricies augue
          eget neque consequat mollis. Fusce auctor lorem nec purus euismod, id
          vehicula est faucibus. Phasellus vitae magna sed purus fermentum
          pulvinar.
        </Heading>
      </div>
      <div className="h-80 w-80"></div>
    </div>
  );
};

export default BlogInfo;
