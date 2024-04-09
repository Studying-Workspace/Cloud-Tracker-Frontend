import { ReactNode } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

interface Props {
  children: ReactNode;
  check: boolean;
  setCheck: Function;
  testid?: string;
}

const CheckBox = ({ children, check, setCheck, testid}: Props) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setCheck(!check)}
        data-testid={testid}
        className="text-xl text-linearBlue-1 mobile:text-lg"
        type="button"
        id = {check? "select" : "unselect"}
      >
        {check ? (
          <IoMdCheckboxOutline />
        ) : (
          <MdCheckBoxOutlineBlank/>
        )}
      </button>
      {children}
    </div>
  );
};

export default CheckBox;
