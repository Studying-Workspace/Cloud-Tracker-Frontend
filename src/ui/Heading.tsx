import { ReactNode } from "react";

interface HeadingProps {
	children: ReactNode;
	type: string;
}
const Heading = ({ children, type }: HeadingProps) => {
	const Types: any = {
		h0: "text-[55px] font-bold mobile:text-[22px] tablet:text-[35px]",
		h1: "text-4xl font-bold mobile:text-[18px] tablet:text-[30px]",
		h2: "text-3xl font-semibold mobile:text-[15px] tablet:text-[25px]",
		h3: "text-[20px] mobile:text-[13px] tablet:text-[20px]",
	};
	return <div className={`${Types[type]}`}>{children}</div>;
};

export default Heading;
