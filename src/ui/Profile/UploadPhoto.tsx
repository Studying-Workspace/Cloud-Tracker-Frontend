import { useRef } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Button from "../Button";

const UploadPhoto = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="relative flex flex-col items-center gap-8">
      <input
        type="file"
        id="file-upload"
        className="hidden cursor-pointer"
        ref={ref}
      />
      <div
        className="flex h-[200px] w-[200px] items-center justify-center rounded-full border-4 border-gray-500
   bg-white mobile:h-[120px] mobile:w-[120px] tablet:h-[150px] tablet:w-[150px] "
      >
        <span className="text-8xl text-gray-500 mobile:text-6xl tablet:text-7xl">
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
  );
};

export default UploadPhoto;
