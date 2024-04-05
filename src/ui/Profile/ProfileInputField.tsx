import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";


interface Props {
  type: string;
  placeholder: string;
}

const ProfileInputField = ({ type, placeholder }: Props) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const inputField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputField.current) {
      inputField.current.focus();
    }
  }, [disabled]);

  function handleClick() {
    setDisabled((e) => !e);
  }

  return (
    <div className=" w-fit bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1px]">
      <div className="flex h-[35px] w-[250px] justify-between bg-white">
        <input
          type={type}
          className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
          placeholder={placeholder}
          disabled={disabled}
          ref={inputField}
        />
        <span className="text-2xl text-gray-500" onClick={handleClick}>
          <MdEdit />
        </span>
      </div>
    </div>
  );
};

export default ProfileInputField;
