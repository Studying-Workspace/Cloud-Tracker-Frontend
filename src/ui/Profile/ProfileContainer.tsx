import { IoCloudUploadOutline } from "react-icons/io5";
import Button from "../Button";
import { MdEdit } from "react-icons/md";

const ProfileContainer = () => {
  return (
    <div className="mt-[100px] flex min-h-screen items-start justify-center">
      <div className="bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 p-[4px]">
        <div className=" flex h-[450px] w-[1000px] content-between items-center justify-start gap-16 bg-white px-[100px]">
          {/* Profile Image */}
          <div className="relative flex flex-col items-center gap-8">
            <input
              type="file"
              id="file-upload"
              className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
            />
            <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full border-4 border-gray-500 bg-white">
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="text-8xl text-gray-500">
                  <IoCloudUploadOutline />
                </span>
              </label>
            </div>
            <label htmlFor="file-upload" className="cursor-pointer">
              <Button type="primary" size="xl">
                {" "}
                Upload Photo{" "}
              </Button>
            </label>
          </div>

          {/*input fields*/}
          <div className=" grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-16 ">
            <div className=" bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1.5px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none"
                  placeholder="Username"
                />{" "}
                <span className="text-2xl text-gray-500">
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className=" bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1.5px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white ">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none"
                  placeholder="Password"
                />{" "}
                <span className="text-2xl text-gray-500">
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className=" bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1.5px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white ">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none"
                  placeholder="Email"
                />{" "}
                <span className="text-2xl text-gray-500">
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className=" bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1.5px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white ">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none"
                  placeholder="Country"
                />{" "}
                <span className="text-2xl text-gray-500">
                  <MdEdit />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
