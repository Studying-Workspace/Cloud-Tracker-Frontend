import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { handleToastMessage } from "../../utils/helper";

interface Props {
  error: string | undefined;
  touched: boolean | undefined;
  type : string ; 
}

const HandleMessageForm = ({ error, touched, type }: Props) => {
  return touched ? (
    error ? (
      <button
        className="text-3xl text-red-600 mobile:text-2xl"
        type="button"
        onClick={() => handleToastMessage(error, type)}
      >
        <RiErrorWarningFill />
      </button>
    ) : (
      <span className="text-2xl text-green-600 mobile:text-xl">
        <FaCheckCircle />
      </span>
    )
  ) : (
    <span className="text-2xl text-gray-700 mobile:text-xl">
      <FaMinusCircle />
    </span>
  );
};

export default HandleMessageForm;
