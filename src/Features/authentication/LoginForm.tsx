import CheckBox from "../../ui/Form/CheckBox";
import Button from "../../ui/Button";
import InputField from "../../ui/Form/InputField";
import HandleMessageForm from "../../ui/Form/HandleMessageForm";
import LoginWelcomeMessage from "../../ui/Form/LoginWelcomeMessage";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { loginFormValidationSchema } from "../../utils/validationSchema";
import { MdLockOutline, MdOutlineMail } from "react-icons/md";
import { useLogin } from "./useLogin";
import { BeatLoader } from "react-spinners";

interface MyFormValues {
	email: string;
	password: string;
}

const LoginForm = () => {
	const initialValues: MyFormValues = { email: "", password: "" };
	const [rememberMe, setRememberMe] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);


	const { isLoading, login } = useLogin();

	const handleSubmit = (user: MyFormValues) => {
		login(user);
	};


	return (
		<div className="flex w-full justify-between">
			<div className="flex w-[35%] flex-col gap-5 mobile:w-full mobile:gap-10 tablet:w-[50%]">
				<div className="space-y-2 text-center">
					<p className="text-5xl font-medium mobile:text-3xl tablet:text-4xl">
						Sign in
					</p>
					<p className="text-ms font-medium tracking-wider mobile:text-xs tablet:text-xs">
						Don’t have an account?{" "}
						<Link
							to="/signUp"
							className=" text-linearBlue-1 underline transition-all duration-300 hover:text-black"
							data-testid="signUpLink"
						>
							Sign up
						</Link>
					</p>
				</div>
				{/* Form */}
				<Formik
					initialValues={initialValues}
					validationSchema={loginFormValidationSchema}
					onSubmit={(values) => {
						handleSubmit(values);

					}}
				>
					{({ errors, touched }) => (
						<Form className="space-y-8 mobile:space-y-6">
							{/* Email */}
							<div className="flex w-full items-center justify-between">
								<InputField
									placeholder="E-mail"
									type="text"
									name="email"
									data-testid="email"

									error={touched.email ? errors.email : undefined}
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
							<div className="space-y-1">
								<div className="flex w-full items-center justify-between">
									<InputField
										type="password"
										name="password"
										placeholder="Password"
										showPassword={showPassword}
										setShowPassword={setShowPassword}
										error={
											touched.password
												? errors.password
												: undefined
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

								{/* Remember me and forget password */}

								<div className=" flex justify-between px-6 text-xl text-gray-400  mobile:text-sm tablet:text-sm">
									<CheckBox
										check={rememberMe}
										setCheck={setRememberMe}
										testid="rememberMe"
									>
										<p className="text-lg text-gray-400 mobile:text-[10px]">
											Remember me
										</p>
									</CheckBox>
									<p className="cursor-pointer px-5 text-lg text-gray-400 transition-all duration-300 hover:text-linearBlue-1 hover:underline mobile:text-[10px]">
										Forget Password ?
									</p>
								</div>
							</div>

							{/* Submit */}

							<Button
								role="submit"
								size="full"
								testid="submitForm"
								disabled={isLoading}
							>
								{isLoading ? (
									<BeatLoader color="#fff" size={8} />
								) : (
									"Sign in"
								)}
                
							</Button>
						</Form>
					)}
				</Formik>
			</div>

			<LoginWelcomeMessage />
		</div>
	);
};

export default LoginForm;
