import { FadeLoader } from "react-spinners";

const Spinner = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<FadeLoader color="#FDAC3D" />
		</div>
	);
};
export default Spinner;
