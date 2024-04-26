import InputField from "../../ui/Form/InputField";
import Button from "../../ui/Button";
import HandleMessageForm from "../../ui/Form/HandleMessageForm";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import { Form, Formik } from "formik";
import { EditPasswordFormValidationSchema } from "../../utils/validationSchema";
import useEditPassword from "./useEditPassword";
import { useUserContext } from "../../context/UserProvider";
import { useLogout } from "./useLogout";
import { BeatLoader } from "react-spinners";

interface MyFormValues {
	currentPassword: string;
	newPassword: string;
	confirmNewPassword: string;

}

const EditPasswordform = () => {
	const initialValues: MyFormValues = {
		currentPassword: "",
		newPassword: "",
		confirmNewPassword: "",

	};

	const [showCurrentPassword, setShowCurrentPassword] =
		useState<boolean>(false);
	const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

	const { tokens } = useUserContext();
	const { isLoading, editPassword } = useEditPassword();
	const { logout } = useLogout(
		"/signin",
		"Session Expired, Please Login Again.",
	);

	const handleSubmit = (values: MyFormValues) => {
		editPassword(
			{ password: values, token: tokens?.token },
			{
				onSuccess: () => {
					logout();
				},
			},
		);
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => {
				handleSubmit(values);
			}}
			validationSchema={EditPasswordFormValidationSchema}
		>
			{({ errors, touched }) => (
				<Form className="space-y-10">
					<div className="text-center text-2xl font-semibold">
						Edit Password
					</div>
					<div className="flex w-full items-center justify-between">
						<InputField
							showPassword={showCurrentPassword}
							setShowPassword={setShowCurrentPassword}
							type="password"
							placeholder="Current Password"
							name="currentPassword"
							error={
								touched.currentPassword
									? errors.currentPassword
									: undefined
							}
						>
							<MdLockOutline className="text-3xl text-linearBlue-1" />
						</InputField>{" "}
						<HandleMessageForm
							type="warning"
							error={errors.currentPassword}
							touched={touched.currentPassword}
						/>
					</div>
					<div className="flex w-full items-center justify-between">
						<InputField
							showPassword={showNewPassword}
							setShowPassword={setShowNewPassword}
							type="password"
							placeholder="New Password"
							name="newPassword"
							error={
								touched.newPassword ? errors.newPassword : undefined
							}
						>
							<MdLockOutline className="text-3xl text-linearBlue-1" />
						</InputField>{" "}
						<HandleMessageForm
							type="warning"
							error={errors.newPassword}
							touched={touched.newPassword}
						/>
					</div>
					<div className="flex w-full items-center justify-between">
						<InputField
							showPassword={showNewPassword}
							setShowPassword={setShowNewPassword}
							type="password"
							placeholder="Confirm New Password"
							name="confirmNewPassword"
							error={
								touched.confirmNewPassword
									? errors.confirmNewPassword

									: undefined
							}
						>
							<MdLockOutline className="text-3xl text-linearBlue-1" />
						</InputField>
						<HandleMessageForm
							type="warning"
							error={errors.confirmNewPassword}
							touched={touched.confirmNewPassword}
						/>
					</div>
					<Button role="submit" size="full" disabled={isLoading}>
						{isLoading ? (
							<BeatLoader color="#fff" size={8} />
						) : (
							"Change Password"
						)}

					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default EditPasswordform;
