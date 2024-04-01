import { IoCloudUploadOutline } from "react-icons/io5";
import Button from "../Button";

const ProfileContainer = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 p-[4px]">
        <div className="flex h-[500px] w-[1200px] items-center justify-start bg-white px-16">
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
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
