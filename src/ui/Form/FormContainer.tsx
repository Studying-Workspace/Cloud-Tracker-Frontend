import formVectorTop from "../../assets/formVectorTop.png";
import formVectorBottom from "../../assets/formVectorBotton.png";
import Logo from "../Logo";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FormContainer = ({ children }: Props) => {
  return (
    <div className="relative flex h-screen flex-col bg-gray-100 px-16 py-8 mobile:px-10">
      {/* Vectors */}
      <img
        src={formVectorTop}
        alt="vector"
        className="absolute right-0 top-0 w-[600px] mobile:hidden tablet:w-[450px]"
      />
      <img
        src={formVectorBottom}
        alt="vector"
        className=" absolute bottom-0 right-0 w-[600px] mobile:hidden tablet:w-[450px]"
      />

      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Form */}
      <div className="z-50 flex h-full items-center justify-between">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
