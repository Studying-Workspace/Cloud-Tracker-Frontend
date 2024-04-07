import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import Modal from "../Modal";


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
              <div className="rounded-xl bg-white p-4 shadow-md">
                <input
                  type="password"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none"
                  placeholder="New Password"
                />
              </div>
            </Modal.Window>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProfileInputField;
