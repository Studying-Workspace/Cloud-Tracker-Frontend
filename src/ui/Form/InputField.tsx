import { Field } from "formik";
import { ReactNode } from "react";
import ShowPasswordButton from "./ShowPasswordButton";

interface Props {
  children: ReactNode;
  type: string;
  placeholder: string;
  name: string;
  showPassword?: boolean;
  setShowPassword?: Function;
}
const InputField = ({ children, type, ...props }: Props) => {
  if (type === "password") {
    return (
      <div className="flex gap-4 rounded-full bg-white px-6 py-3 shadow-lg mobile:py-1 tablet:py-2">
        {children}
        <input
          type={props.showPassword ? "text" : "password"}
          className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
          {...props}
        />
        <ShowPasswordButton
          showPassword={props.showPassword}
          setShowPassword={props.setShowPassword}
        />
      </div>
    );
  }

  return (
    <div className="flex gap-4 rounded-full bg-white px-6 py-3 pr-14 shadow-lg mobile:py-1 tablet:py-2">
      {children}
      <Field
        type={type}
        className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
        {...props}
      />
    </div>
  );
};

export default InputField;
