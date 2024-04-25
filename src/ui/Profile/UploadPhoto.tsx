import { IoCloudUploadOutline } from "react-icons/io5";
import Button from "../Button";
import { useState } from "react";

interface Props {
  name: string;
  setFile: Function;
  img: string;
}

const UploadPhoto = ({ name, setFile, img }: Props) => {
  const [imageFile, setImageFile] = useState<string | null>(null);
  return (
    <div className="relative flex flex-col items-center gap-8">
      <input
        type="file"
        id="file-upload"
        className="hidden cursor-pointer"
        name={name}
        onChange={(event: any) => {
          setFile(name, event.currentTarget.files[0]);
          setImageFile(URL.createObjectURL(event.currentTarget.files[0]));
        }}
      />
      <div
        className="flex h-fit w-fit items-center justify-center rounded-full border-4 border-linearOrange-200
                  bg-white mobile:border-2 tablet:border-2"
      >
        {img.length === 0 && !imageFile ? (
          <span className="text-8xl text-gray-500 mobile:text-6xl tablet:text-7xl">
            <IoCloudUploadOutline />
          </span>
        ) : (
          <img
            src={imageFile ? imageFile : img}
            alt="userPhoto"
            className="h-[200px] w-[200px] rounded-full mobile:h-[120px] mobile:w-[120px] tablet:h-[150px] tablet:w-[150px]"
          />
        )}
      </div>

      <Button labelFor="file-upload" role="label" size="xl" type="primary">
        Upload Photo
      </Button>
    </div>
  );
};

export default UploadPhoto;
