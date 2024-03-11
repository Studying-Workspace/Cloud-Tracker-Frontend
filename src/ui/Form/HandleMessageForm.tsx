import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { Slide, toast } from "react-toastify";

interface Props {
  error: string | undefined;
  touched: boolean | undefined;
  type : string ; 
}

const HandleMessageForm = ({ error, touched, type }: Props) => {
  const handleError = (error: string | undefined, type: string) => {
    if (type === "warning") {
      toast.warning(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };
  return touched ? (
    error ? (
      <button
        className="text-3xl text-red-600 mobile:text-2xl"
        type="button"
        onClick={() => handleError(error, type)}
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
