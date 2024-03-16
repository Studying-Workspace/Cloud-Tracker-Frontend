import GoogleLogo from "../../assets/GoogleLogo.png";
import AwsLogo from "../../assets/AwsLogo.png";

import Button from "../../ui/Button";

import { MdLockOutline, MdOutlineMail } from "react-icons/md";

import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import SignupWelcomeMessage from "../../ui/Form/SignupWelcomeMessage";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../ui/Form/InputField";
import HandleMessageForm from "../../ui/Form/HandleMessageForm";
import { handleToastMessage } from "../../utils/helper";

interface MyFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const initialValues: MyFormValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-[35%] flex-col gap-5 mobile:w-full tablet:w-[50%]">
        <div className="space-y-2 text-center">
          <p className="text-5xl font-medium mobile:text-3xl tablet:text-4xl">
            Sign Up
          </p>
          <p className="text-ms font-medium tracking-wider mobile:text-xs tablet:text-xs">
            Already have an account?{" "}
            <Link
              to="/signIn"
              className=" text-linearBlue-1 underline transition-all duration-300 hover:text-black"
            >
              Sign in
            </Link>
          </p>
        </div>
        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            username: Yup.string()
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
          })}
          onSubmit={() => {
            handleToastMessage("Login success !", "success");
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-6 mobile:space-y-4">
              {/* User Name */}
              <div className="flex w-full items-center justify-between">
                <InputField
                  name="username"
                  placeholder="Username"
                  type="text"
                  error={touched.username ? errors.username : undefined}
                >
                  <FaRegUser className=" text-2xl text-linearBlue-1 mobile:text-xl" />
                </InputField>
                <HandleMessageForm
                  type="warning"
                  error={errors.username}
                  touched={touched.username}
                />
              </div>
              {/* Email */}
              <div className="flex w-full items-center justify-between">
                <InputField
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  error={touched.email ? errors.email : undefined}
                >
                  <MdOutlineMail className=" text-3xl text-linearBlue-1 mobile:text-2xl" />
                </InputField>

                <HandleMessageForm
                  type="warning"
                  error={errors.email}
                  touched={touched.email}
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
                  error={touched.password ? errors.password : undefined}
                >
                  <MdLockOutline className="text-3xl text-linearBlue-1" />
                </InputField>
                <HandleMessageForm
                  type="warning"
                  error={errors.password}
                  touched={touched.password}
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
                  error={
                    touched.confirmPassword ? errors.confirmPassword : undefined
                  }
                >
                  <MdLockOutline className="text-3xl text-linearBlue-1" />
                </InputField>

                <HandleMessageForm
                  type="warning"
                  error={errors.confirmPassword}
                  touched={touched.confirmPassword}
                />
              </div>
              {/* Submit */}
              <div className="flex flex-col justify-center gap-1">
                <Button role="submit" size="full">
                  Sign Up
                </Button>
                <div className="flex w-[92%] flex-col items-center justify-between gap-2">
                  <p className=" text-xl text-gray-400">or login via</p>
                  <div className="flex gap-5">
                    <img src={GoogleLogo} alt="google" className="h-14 w-14" />
                    <img src={AwsLogo} alt="aws" className="h-14 w-14" />
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