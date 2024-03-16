import CheckBox from "../../ui/Form/CheckBox";
import Button from "../../ui/Button";

import { MdLockOutline, MdOutlineMail } from "react-icons/md";

import { Link } from "react-router-dom";
import { useState } from "react";
import LoginWelcomeMessage from "../../ui/Form/LoginWelcomeMessage";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../ui/Form/InputField";
import HandleMessageForm from "../../ui/Form/HandleMessageForm";
import { handleToastMessage } from "../../utils/helper";

interface MyFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: MyFormValues = { email: "", password: "" };
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
          initialValues={initialValues}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid Email Format")
              .required("Please Enter your Email"),

            password: Yup.string()
              .min(8, "Your Password Must Be At Least 8 Characters")
              .required("Please Enter Your Password"),
          })}
          onSubmit={() => {
            handleToastMessage("Login success !", "success");
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
              <div className="space-y-1">
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

                {/* Remember me and forget password */}
                <div className=" flex justify-between px-6 text-xl text-gray-400  mobile:text-sm tablet:text-sm">
                  <CheckBox check={rememberMe} setCheck={setRememberMe}>
                    <p className="text-sm text-gray-400 mobile:text-[10px] tablet:text-[12px]">
                      Remember me
                    </p>
                  </CheckBox>
                  <p className="cursor-pointer px-5 text-sm text-gray-400 transition-all duration-300 hover:text-linearBlue-1 hover:underline mobile:text-[10px] tablet:text-[12px]">
                    Forget Password ?
                  </p>
                </div>
              </div>

              {/* Submit */}
              <Button role="submit" size="full">
                Sign in
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
