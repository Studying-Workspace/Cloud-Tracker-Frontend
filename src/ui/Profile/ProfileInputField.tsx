import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import Modal from "../Modal";
import EditPasswordform from "../../Features/authentication/EditPasswordform";
import HandleMessageForm from "../../ui/Form/HandleMessageForm";
import { Field } from "formik";

interface Props {
  type: string;
  placeholder: string;
  name?: string;
  error?: string | undefined;
  touched?: boolean;
}

const ProfileInputField = ({
  type,
  placeholder,
  name,
  error,
  touched,
  ...props
}: Props) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const inputField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputField.current) {
      inputField.current.focus();
    }
  }, [disabled]);

  function handleClick() {
    setDisabled((prevState) => !prevState);
  }

  return (
    <div className="w-fit bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1px]">
      <div className="flex h-[35px] w-[250px] justify-between bg-white">
        {type === "password" ? (
          <Field
            type="text"
            name={name}
            disabled={true}
            className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
            placeholder={placeholder}
          />
        ) : (
          <Field
            type={type}
            className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
            placeholder={placeholder}
            disabled={disabled}
            name={name}
            {...props}
          />
        )}
        {type !== "password" ? (
          !disabled ? (
            <HandleMessageForm type="warning" error={error} touched={touched} />
          ) : (
            <button
              type="button"
              className="text-2xl text-gray-500"
              onClick={handleClick}
            >
              <MdEdit />
            </button>
          )
        ) : (
          <Modal>
            <Modal.Open openName="password-form">
              <button type="button" className="text-2xl text-gray-500">
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
