import GoogleLogo from "../../assets/GoogleLogo.png";
import AwsLogo from "../../assets/AwsLogo.png";

import ShowPasswordButton from "../../ui/Form/ShowPasswordButton";
import Button from "../../ui/Button";

import { MdLockOutline, MdOutlineMail } from "react-icons/md";

import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import SignupWelcomeMessage from "../../ui/Form/SignupWelcomeMessage";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
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
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => console.log(values)}
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
        >
          {(formik) => (
            <Form className="space-y-6 mobile:space-y-4">
              {/* User Name */}
              <div className="flex flex-col">
                <div className="flex gap-4 rounded-full bg-white px-6 py-3 pr-14 shadow-lg mobile:py-1 tablet:py-2">
                  <FaRegUser className=" text-2xl text-linearBlue-1 mobile:text-xl" />
                  <input
                    type="text"
                    className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
                    placeholder="Username"
                    {...formik.getFieldProps("username")}
                  />
                </div>
                {formik.touched.username && formik.errors.username && (
                  <div>{formik.errors.username}</div>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <div className="flex gap-4 rounded-full bg-white px-6 py-3 pr-14 shadow-lg mobile:py-1 tablet:py-2">
                  <MdOutlineMail className=" text-3xl text-linearBlue-1 mobile:text-2xl" />
                  <input
                    type="text"
                    className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
                    placeholder="E-mail"
                    {...formik.getFieldProps("email")}
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div>{formik.errors.email}</div>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <div className="flex gap-4 rounded-full bg-white px-6 py-3 shadow-lg mobile:py-1 tablet:py-2">
                  <MdLockOutline className="text-3xl text-linearBlue-1" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                  />
                  <ShowPasswordButton
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div>{formik.errors.password}</div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <div className="flex gap-4 rounded-full bg-white px-6 py-3 shadow-lg mobile:py-1 tablet:py-2">
                  <MdLockOutline className="text-3xl text-linearBlue-1" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
                    placeholder="Confirm Password"
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  <ShowPasswordButton
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />
                </div>
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div>{formik.errors.confirmPassword}</div>
                  )}
              </div>

              {/* Submit */}
              <div className="flex flex-col items-center justify-center gap-1">
                <Button size="full">Sign Up</Button>
                <p className=" text-xl text-gray-400">or login via</p>
                <div className="flex gap-5">
                  <img src={GoogleLogo} alt="google" className="h-14 w-14" />
                  <img src={AwsLogo} alt="aws" className="h-14 w-14" />
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
