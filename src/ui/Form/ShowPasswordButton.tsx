import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";

interface Props {
  showPassword: boolean | undefined;
  setShowPassword: Function | undefined;
  showTestIdBtn?: string;
}

const ShowPasswordButton = ({
  showPassword,
  setShowPassword,
  showTestIdBtn,
}: Props) => {
  return (
    <button
      className="text-3xl text-linearBlue-1 mobile:text-2xl"
      onClick={() => setShowPassword?.(!showPassword)}
      type="button"
      data-testid={showTestIdBtn}
    >
      {showPassword ? <LiaEyeSlashSolid /> : <LiaEyeSolid />}
    </button>
  );
};

export default ShowPasswordButton;