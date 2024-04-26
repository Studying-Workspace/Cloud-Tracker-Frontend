import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo_color2.png";
import logoWhite from "../assets/logo_white.png";

interface Props {
	type?: string;
}

const Logo = ({ type = "primary" }: Props) => {
	const navigate = useNavigate();

	const handleClickOnLogo = () => {
		navigate("/");
	};

	if (type === "secondery") {
		return (
			<img
				src={logoWhite}
				alt="logo"
				className="mobile:w-16 tablet:w-28"
				draggable="false"
				data-testid="logo"
			/>
		);
	}

	return (
		<button
			onClick={handleClickOnLogo}
			data-testid="logoBtn"
			className="cursor-pointer"
		>
			<img
				src={logo}
				alt="logo"
				className="aspect-[4/3] h-auto w-[70px] object-fill p-0 mobile:w-[50px] tablet:w-[60px]"
				draggable="false"
				data-testid="logo"
			/>
		</button>
	);
};
export default Logo;
