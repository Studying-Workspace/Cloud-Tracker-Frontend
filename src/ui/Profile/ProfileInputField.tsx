import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import Modal from "../Modal";
import EditPasswordform from "../../Features/authentication/EditPasswordform";

interface Props {
  type: string;
  placeholder: string;
  name?: string;
  error?: string | undefined;
}

const ProfileInputField = ({ type, placeholder, name, ...props }: Props) => {
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
          name={name}
          {...props}
        />
        {type !== "password" ? (
          <button className="text-2xl text-gray-500" onClick={handleClick}>
            <MdEdit />
          </button>
        ) : (
          <Modal>
            <Modal.Open openName="password-form">
              <button className="text-2xl text-gray-500">
                <MdEdit />
              </button>
            </Modal.Open>
            <Modal.Window currentWindowname="password-form">
              <EditPasswordform />
            </Modal.Window>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProfileInputField;
