import * as Yup from "yup";

export const loginFormValidationSchema = Yup.object({
	email: Yup.string()
		.email("Invalid Email Format")
		.required("Please Enter your Email"),

	password: Yup.string()
		.min(8, "Your Password Must Be At Least 8 Characters")
		.required("Please Enter Your Password"),
});

export const profileFormValidationSchema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid Email")
		.required("Please Enter Your Email"),
	name: Yup.string()
		.min(3, "Username Should Be At Least 3 Characters")
		.max(15, "Username Should Be At Most 15 Characters")
		.required("Please Enter Your Username"),
});

export const signUpFormValidationSchema = Yup.object({
	name: Yup.string()
		.min(3, "Username Should Be At Least 3 Characters")
		.max(15, "Username Should Be At Most 15 Characters")
		.required("Please Enter Your Username"),
	email: Yup.string()
		.email("Invalid Email Format")
		.required("Please Enter your Email"),
	password: Yup.string()
		.min(8, "Password Must be At Least 8 Characters")
		.required("Please Enter Your Password"),
	confirmPassword: Yup.string()
		.required("Please Confirm Your Password")
		.oneOf([Yup.ref("password")], "Passwords Must Match"),
});

export const EditPasswordFormValidationSchema = Yup.object().shape({
	currentPassword: Yup.string()
		.min(8, "Your Password Must Be At Least 8 Characters")
		.required("Please Enter Your Current Password"),

	newPassword: Yup.string()
		.min(8, "Your Password Must Be At Least 8 Characters")
		.required("Please Enter Your New Password"),


	confirmNewPassword: Yup.string()

		.min(8, "Your Password Must Be At Least 8 Characters")
		.required("Please Confirm Your New Password")
		.oneOf([Yup.ref("newPassword")], "Passwords Must Match"),
});
