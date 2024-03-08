import formVectorTop from "../assets/formVectorTop.png";
import formVectorBottom from "../assets/formVectorBotton.png";
import Logo from "./Logo";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FormContainer = ({ children }: Props) => {
  return (
    <div className="relative flex h-screen flex-col gap-10 px-16 py-8">
      {/* Vectors */}
      <img
        src={formVectorTop}
        alt="vector"
        className="absolute right-0 top-0 w-[600px]"
      />
      <img
        src={formVectorBottom}
        alt="vector"
        className=" absolute bottom-0 right-0 w-[600px]"
      />

      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Form */}
      <div className="z-50 flex items-center justify-between">
        <p>Form</p>
      </div>
    </div>
  );
};

export default FormContainer;
