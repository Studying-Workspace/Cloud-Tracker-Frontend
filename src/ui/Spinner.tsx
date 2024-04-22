import { FadeLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center"> 
      <FadeLoader color="#FDAC3D" />
    </div>
  );
};
export default Spinner;
