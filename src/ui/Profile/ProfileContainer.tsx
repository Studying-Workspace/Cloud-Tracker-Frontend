import { IoCloudUploadOutline } from "react-icons/io5";
import Button from "../Button";
import { MdEdit } from "react-icons/md";
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ProfileContainer = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="mt-[100px] flex min-h-screen items-start justify-center">
      <div className="relative bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 p-[4px] ">
        <div
          className="flex h-[450px] w-[1000px] content-between items-center justify-start gap-16 
        bg-white px-[100px] tablet:h-[650px] tablet:w-[400px] tablet:flex-col 
        tablet:justify-center tablet:gap-10 mobile:h-[550px] mobile:w-[300px] mobile:flex-col mobile:justify-center mobile:gap-8"
        >
          {/* Profile Image */}
          <div className="relative flex flex-col items-center gap-8">
            <input
              type="file"
              id="file-upload"
              className="hidden cursor-pointer"
              ref={ref}
            />
            <div
              className="flex h-[200px] w-[200px] items-center justify-center rounded-full border-4 border-gray-500
             bg-white tablet:h-[150px] tablet:w-[150px] mobile:h-[120px] mobile:w-[120px] "
            >
              <span className="text-8xl text-gray-500 tablet:text-7xl mobile:text-6xl">
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
              Upload Photo
            </Button>
          </div>

          {/*input fields*/}
          <div className=" grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-16 tablet:flex tablet:flex-col tablet:gap-8 mobile:flex mobile:flex-col mobile:gap-6">
            <div className=" w-fit bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
                  placeholder="Username"
                  disabled={true}
                />
                <span className="text-2xl text-gray-500">
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className=" w-fit bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
                  placeholder="Password"
                  disabled={true}
                />
                <span className="text-2xl text-gray-500">
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className=" w-fit bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
                  placeholder="Email"
                  disabled={true}
                />
                <span className="text-2xl text-gray-500">
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className=" w-fit bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white ">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
                  placeholder="Country"
                  disabled={true}
                />
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
  {
    /* Save Changes button */
  }
  {
    /*    <div className="flex w-fit rounded-full bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 p-[3px]">
        <Button type="secondary" size="xl">
          Save Changes
        </Button>
      </div> */
  }
};

export default ProfileContainer;
