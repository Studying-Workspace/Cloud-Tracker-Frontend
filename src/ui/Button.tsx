import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	type?: string;
	size?: string;
	onClick?: Function;
	role?: "button" | "submit" | "reset" | "label";
	testid?: string;
	disabled?: boolean;
	labelFor?: string;
}

const Types: any = {
	primary:
		"rounded-full bg-linearOrange-200 font-semibold text-white transition-all duration-300 hover:bg-linearOrange-100",
	secondary: "rounded-full bg-white font-semibold text-black",
};

const Sizes: any = {
	l: "w-[140px] py-2 tablet:w-[120px] tablet:py-1 mobile:w-[120px] mobile:py-1",
	xl: "w-[200px] py-2 mobile:w-[160px] mobile:text-sm",
	"2xl": "w-[450px] py-4 mobile:w-[200px] mobile:text-sm text-2xl",
	"3xl": "tablet:text-xl mobile:text-lg w-full text-xl py-[3%]",
	full: "w-[92%] py-2 text-xl  tablet:text-lg  mobile:text-sm",
};

const Button = ({
	children,
	type = "primary",
	size = "l",
	onClick,
	role = "button",
	testid = "",
	disabled,
	labelFor,
}: Props) => {
	if (role == "label") {
		return (
			<label
				htmlFor={labelFor}
				className={`${Types[type]} ${Sizes[size]} cursor-pointer text-center`}
			>
				{children}
			</label>
		);
	}
	return (
		<button
			className={`${Types[type]} ${Sizes[size]}`}
			onClick={() => onClick?.()}
			type={role}
			data-testid={testid}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
