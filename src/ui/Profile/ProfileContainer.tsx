import { IoCloudUploadOutline } from "react-icons/io5";
import Button from "../Button";
import { MdEdit } from "react-icons/md";
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../Footer";

const ProfileContainer = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="mt-[100px] flex min-h-screen items-start justify-center">
      <div className="bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 p-[4px]">
        <div className=" flex h-[450px] w-[1000px] content-between items-center justify-start gap-16 bg-white px-[100px]">
          {/* Profile Image */}
          <div className="relative flex flex-col items-center gap-8">
            <input
              type="file"
              id="file-upload"
              className="hidden cursor-pointer"
              ref={ref}
            />
            <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full border-4 border-gray-500 bg-white">
              <span className="text-8xl text-gray-500">
                <IoCloudUploadOutline />
              </span>
            </div>

            <Button
              type="primary"
              size="xl"
              onClick={() => {
                if (ref.current) {
                  ref.current.click();
                }
              }}
            >
              {" "}
              Upload Photo{" "}
            </Button>
          </div>

          {/*input fields*/}
          <div className=" grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-16 ">
            <div className=" bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1.5px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
                  placeholder="Username"
                  disabled={true}
                />{" "}
                <span className="text-2xl text-gray-500">
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className=" bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1.5px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
                  placeholder="Password"
                  disabled={true}
                />{" "}
                <span className="text-2xl text-gray-500">
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className=" bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1.5px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
                  placeholder="Email"
                  disabled={true}
                />{" "}
                <span className="text-2xl text-gray-500">
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className=" bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1.5px] ">
              <div className="flex h-[35px] w-[250px] justify-between bg-white ">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
                  placeholder="Country"
                  disabled={true}
                />{" "}
                <span className="text-3xl text-gray-500">
                  <IoIosArrowDown />
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
