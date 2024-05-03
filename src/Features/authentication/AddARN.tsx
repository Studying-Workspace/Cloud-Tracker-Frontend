import InputField from "../../ui/Form/InputField";
import Button from "../../ui/Button";
import HandleMessageForm from "../../ui/Form/HandleMessageForm";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import { Form, Formik } from "formik";
import { useAddARN } from "./useAddArn";
import { useUserContext } from "../../context/UserProvider";
import { BeatLoader } from "react-spinners";

interface MyFormValues {
	ARN: string;
}

const AddARN = () => {
	const initialValues: MyFormValues = {
		ARN: "",
	};

	const [showCurrentARN, setShowCurrentARN] = useState<boolean>(false);

	const { tokens } = useUserContext();
	const { isLoading, addARN } = useAddARN();


	const handleSubmit = (values: MyFormValues) => {
		addARN({ ARN: values.ARN, token: tokens?.token });
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => {
				handleSubmit(values);
			}}
		>
			{({ errors, touched }) => (
				<Form className="space-y-10">
					<div className="text-center text-2xl font-semibold">
						Enter Your ARN
					</div>
					<div className="flex w-full items-center justify-between">
						<InputField
							showPassword={showCurrentARN}
							setShowPassword={setShowCurrentARN}
							type="text"
							placeholder="arn:aws:iam::123456789012:role/MyRole"
							name="ARN"
							error={touched.ARN ? errors.ARN : undefined}
						>
							<MdLockOutline className="text-3xl text-linearBlue-1" />
						</InputField>{" "}
						<HandleMessageForm
							type="warning"
							error={errors.ARN}
							touched={touched.ARN}
						/>
					</div>
					<Button role="submit" size="2xl" disabled={isLoading}>
						{isLoading ? (
							<BeatLoader color="#fff" size={8} />
						) : (
							"Submit"
						)}
					</Button>
				</Form>
			)}
		</Formik>
		// <div className="flex flex-col items-center space-y-4">
		// 	<p className="text-3xl font-semibold mobile:text-xl">
		// 		Enter Your ARN
		// 	</p>
		// 	<input
		// 		type="text"
		// 		placeholder="arn:aws:iam::123456789012:role/MyRole"
		// 		className="h-[60px] w-[450px] rounded-full border border-gray-300 p-4 shadow-md transition-all
		// 						 duration-300 hover:shadow-lg focus:border-transparent focus:outline-none focus:ring-2
		// 						 focus:ring-linearOrange-200 mobile:w-[200px] mobile:text-sm"
		// 	/>
		// 	<Button size="2xl"> Submit </Button>
		// </div>
	);
};

export default AddARN;
