import { Field } from "formik";
import { ReactNode } from "react";
import ShowPasswordButton from "./ShowPasswordButton";

interface Props {
	children: ReactNode;
	type: string;
	placeholder: string;
	name: string;
	showPassword?: boolean;
	setShowPassword?: Function;
	error: string | undefined;
	showTestId?: string;
}
const InputField = ({
	children,
	type,
	showPassword,
	setShowPassword,
	error,
	showTestId,
	...props
}: Props) => {
	if (type === "password") {
		return (
			<div
				className={`${error ? "border-2 border-red-500" : ""} flex w-[92%] gap-4 rounded-full bg-white px-6 py-3 shadow-lg mobile:w-[90%] mobile:py-2 tablet:py-2`}
			>
				{children}
				<Field
					type={showPassword ? "text" : "password"}
					className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none mobile:placeholder:text-sm"
					{...props}
				/>
				<ShowPasswordButton
					showPassword={showPassword}
					setShowPassword={setShowPassword}
					showTestIdBtn={showTestId}
				/>
			</div>
		);
	}

	return (
		<div
			className={`${error ? "border-2 border-red-500" : ""} flex w-[92%] gap-4 rounded-full bg-white px-6 py-3 pr-14 shadow-lg mobile:w-[90%] mobile:py-2 tablet:py-2`}
		>
			{children}
			<Field
				type={type}
				className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none mobile:placeholder:text-sm"
				{...props}
			/>
		</div>
	);
};

export default InputField;
