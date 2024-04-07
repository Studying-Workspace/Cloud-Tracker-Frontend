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
  error?: string | undefined;
}
const InputField = ({
  children,
  type,
  showPassword,
  setShowPassword,
  error,
  ...props
}: Props) => {
  if (type === "password") {
    return (
      <div className={`${error ? "border-2 border-red-500" : ""} flex w-[92%] gap-4 rounded-full bg-white px-6 py-3 shadow-lg mobile:w-[90%] mobile:py-1 tablet:py-2`}>
        {children}
        <Field
          type={showPassword ? "text" : "password"}
          className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
          {...props}
        />
        <ShowPasswordButton
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>
    );
  }

  return (
    <div
      className={`${error ? "border-2 border-red-500" : ""} flex w-[92%] gap-4 rounded-full bg-white px-6 py-3 pr-14 shadow-lg mobile:w-[90%] mobile:py-1 tablet:py-2`}
    >
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
