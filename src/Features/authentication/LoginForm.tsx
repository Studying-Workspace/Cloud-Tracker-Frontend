import CheckBox from "../../ui/Form/CheckBox";
import ShowPasswordButton from "../../ui/Form/ShowPasswordButton";
import Button from "../../ui/Button";

import { MdLockOutline, MdOutlineMail } from "react-icons/md";

import { Link } from "react-router-dom";
import { useState } from "react";
import LoginWelcomeMessage from "../../ui/Form/LoginWelcomeMessage";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-[35%] flex-col gap-5 mobile:w-full tablet:w-[50%]">
        <div className="space-y-2 text-center">
          <p className="text-5xl font-medium mobile:text-3xl tablet:text-4xl">
            Sign in
          </p>
          <p className="text-ms font-medium tracking-wider mobile:text-xs tablet:text-xs">
            Don’t have an account?{" "}
            <Link
              to="/signUp"
              className=" text-linearBlue-1 underline transition-all duration-300 hover:text-black"
            >
              Sign up
            </Link>
          </p>
        </div>
        {/* Form */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid Email Format")
              .required("Please Enter your Email"),

            password: Yup.string()
              .min(8, "Your Password Must Be At Least 8 Characters")
              .required("Please Enter Your Password"),
          })}
          onSubmit={(values) => console.log(values)}
        >
          {(formik) => (
            <Form className="space-y-8 mobile:space-y-6">
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
              <div className="space-y-2">
                {/* input field */}
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

                <div className=" flex justify-between px-7 text-xl text-gray-400 mobile:px-1 mobile:text-sm tablet:text-sm">
                  <CheckBox check={rememberMe} setCheck={setRememberMe}>
                    <p>Remember me</p>
                  </CheckBox>
                  <p>Forget Password</p>
                </div>
              </div>

              {/* Submit */}
              <Button size="full">Sign in</Button>
            </Form>
          )}
        </Formik>
      </div>

      <LoginWelcomeMessage />
    </div>
  );
};

export default LoginForm;
