import InputField from "../../ui/Form/InputField";
import Button from "../../ui/Button";
import HandleMessageForm from "../../ui/Form/HandleMessageForm";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import { Form, Formik } from "formik";
import { useAddARN } from "./useAddArn";
import { useUserContext } from "../../context/UserProvider";
import { BeatLoader } from "react-spinners";
import { addArnFormValidationSchema } from "../../utils/validationSchema";

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
			validationSchema={addArnFormValidationSchema}
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
					<div className="flex w-full items-center justify-between space-x-2">
						<Button role="submit" size="3xl" disabled={isLoading}>
							{isLoading ? (
								<BeatLoader color="#fff" size={8} />
							) : (
								"Submit"
							)}
						</Button>
						<RiErrorWarningFill className="text-4xl mobile:text-xl text-white" />
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default AddARN;
