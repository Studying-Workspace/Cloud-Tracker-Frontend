import { IoCloudUploadOutline } from "react-icons/io5";
import Button from "../Button";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  name: string;
  setFile: Function;
  img: string;
}

const UploadPhoto = ({ name, setFile, img }: Props) => {
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const handleDeletePhoto = () => {
    setFile(name, "");
    setImageFile(null);
    setIsDeleting(true);
  };
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
          setIsDeleting(false);
        }}
      />
      <div
        className={` relative z-0 flex h-fit w-fit items-center justify-center rounded-full border-4 ${(img === null || img.length===0 || isDeleting) && imageFile === null ? "border-stone-500" : "border-linearOrange-200"}
                  bg-white mobile:border-2 tablet:border-2`}
      >
        {(img === null || img.length === 0 || isDeleting) &&
        imageFile === null ? (
          <span className="text-8xl text-gray-500 mobile:text-6xl tablet:text-7xl">
            <IoCloudUploadOutline className=" m-10" />
          </span>
        ) : (
          <img
            src={imageFile ? imageFile : img}
            alt="userPhoto"
            className="h-[200px] w-[200px] rounded-full mobile:h-[120px] mobile:w-[120px] tablet:h-[150px] tablet:w-[150px]"
          />
        )}

        {(imageFile !== null ||
          (!isDeleting && img !== null && img.length !== 0)) && (
          <button
            type="button"
            onClick={handleDeletePhoto}
            className="absolute bottom-3 right-3 z-50 cursor-pointer rounded-full border-2 border-linearOrange-200 bg-white p-1 text-xl text-stone-500"
          >
            <MdDeleteOutline />
          </button>
        )}
      </div>

      <Button labelFor="file-upload" role="label" size="xl" type="primary">
        Upload Photo
      </Button>
    </div>
  );
};

export default UploadPhoto;
