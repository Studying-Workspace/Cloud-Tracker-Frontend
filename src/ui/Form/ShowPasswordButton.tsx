import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";

interface Props {
  showPassword: boolean | undefined;
  setShowPassword: Function | undefined;
}

const ShowPasswordButton = ({ showPassword, setShowPassword }: Props) => {
  return (
    <button
      className="text-3xl text-linearBlue-1 mobile:text-2xl"
      onClick={() => setShowPassword?.(!showPassword)}
    >
      {showPassword ? <LiaEyeSlashSolid /> : <LiaEyeSolid />}
    </button>
  );
};

export default ShowPasswordButton;
