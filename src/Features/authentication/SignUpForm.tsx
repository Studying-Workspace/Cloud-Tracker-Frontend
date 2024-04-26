import Button from "../../ui/Button";
import InputField from "../../ui/Form/InputField";
import HandleMessageForm from "../../ui/Form/HandleMessageForm";
import SignupWelcomeMessage from "../../ui/Form/SignupWelcomeMessage";

import GoogleLogo from "../../assets/GoogleLogo.png";
import AwsLogo from "../../assets/AwsLogo.png";

import { useState } from "react";

import { Link } from "react-router-dom";

import { Formik, Form } from "formik";

import { signUpFormValidationSchema } from "../../utils/validationSchema";

import { MdLockOutline, MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useRegister } from "./useRegister";

import { BeatLoader } from "react-spinners";

interface MyFormValues {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const SignUpForm = () => {
	const initialValues: MyFormValues = {
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const { register, isLoading } = useRegister();

	const handleSubmit = (user: MyFormValues) => {
		const handleUser = {
			name: user.name,
			email: user.email,
			password: user.password,
		};

		register(handleUser);
	};

	return (
		<div className="flex w-full justify-between">
			<div className="flex w-[35%] flex-col gap-5 mobile:w-full mobile:gap-10 tablet:w-[50%]">
				<div className="space-y-2 text-center">
					<p className="text-5xl font-medium mobile:text-3xl tablet:text-4xl">
						Sign Up
					</p>
					<p className="text-ms font-medium tracking-wider mobile:text-xs tablet:text-xs">
						Already have an account?{" "}
						<Link
							to="/signIn"
							className=" text-linearBlue-1 underline transition-all duration-300 hover:text-black"
							data-testid="signInLink"
						>
							Sign in
						</Link>
					</p>
				</div>
				{/* Form */}
				<Formik
					initialValues={initialValues}
					validationSchema={signUpFormValidationSchema}
					onSubmit={(values) => {
						handleSubmit(values);
					}}
				>
					{({ errors, touched }) => (
						<Form className="space-y-6 mobile:space-y-4">
							{/* User Name */}
							<div className="flex w-full items-center justify-between">
								<InputField
									name="name"
									placeholder="Username"
									type="text"
									error={touched.name ? errors.name : undefined}
									data-testid="username"
								>
									<FaRegUser className=" text-2xl text-linearBlue-1 mobile:text-xl" />
								</InputField>
								<HandleMessageForm
									type="warning"
									error={errors.name}
									touched={touched.name}
									testid="usernameWarning"
								/>
							</div>
							{/* Email */}
							<div className="flex w-full items-center justify-between">
								<InputField
									name="email"
									placeholder="E-mail"
									type="email"
									error={touched.email ? errors.email : undefined}
									data-testid="email"
								>
									<MdOutlineMail className=" text-3xl text-linearBlue-1 mobile:text-2xl" />
								</InputField>

								<HandleMessageForm
									type="warning"
									error={errors.email}
									touched={touched.email}
									testid="emailWarning"
								/>
							</div>
							{/* Password */}
							<div className="flex w-full items-center justify-between">
								<InputField
									type="password"
									name="password"
									placeholder="Password"
									showPassword={showPassword}
									setShowPassword={setShowPassword}
									error={
										touched.password ? errors.password : undefined
									}
									data-testid="password"
									showTestId="showPassword"
								>
									<MdLockOutline className="text-3xl text-linearBlue-1" />
								</InputField>
								<HandleMessageForm
									type="warning"
									error={errors.password}
									touched={touched.password}
									testid="passwordWarning"
								/>
							</div>
							{/* Confirm Password */}
							<div className="flex w-full items-center justify-between">
								<InputField
									type="password"
									name="confirmPassword"
									placeholder="Confirm Password"
									showPassword={showPassword}
									setShowPassword={setShowPassword}
									data-testid="confirmPassword"
									showTestId="showConfirmPassword"
									error={
										touched.confirmPassword
											? errors.confirmPassword
											: undefined
									}
								>
									<MdLockOutline className="text-3xl text-linearBlue-1" />
								</InputField>

								<HandleMessageForm
									type="warning"
									error={errors.confirmPassword}
									touched={touched.confirmPassword}
									testid="confirmPasswordWarning"
								/>
							</div>
							{/* Submit */}
							<div className="flex flex-col justify-center gap-1">
								<Button
									role="submit"
									size="full"
									testid="submitForm"
									disabled={isLoading}
								>
									{isLoading ? (
										<BeatLoader color="#fff" size={8} />
									) : (
										"Sign up"
									)}
								</Button>
								<div className="flex w-[92%] flex-col items-center justify-between gap-2">
									<p className=" text-xl text-gray-400 mobile:text-[18px]">
										or login via
									</p>
									<div className="flex gap-5">
										<img
											src={GoogleLogo}
											alt="google"
											className="h-14 w-14 mobile:h-10 mobile:w-10"
											data-testid="google"
										/>
										<img
											src={AwsLogo}
											alt="aws"
											className="h-14 w-14 mobile:h-10 mobile:w-10"
											data-testid="aws"
										/>
									</div>
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</div>

			<SignupWelcomeMessage />
		</div>
	);
};

export default SignUpForm;
