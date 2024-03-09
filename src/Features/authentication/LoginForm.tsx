import CheckBox from "../../ui/CheckBox";
import ShowPasswordButton from "../../ui/ShowPasswordButton";
import Button from "../../ui/Button";

import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

import { Link } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex w-full justify-between">
      {/* Form */}
      <div className="flex w-[40%] flex-col gap-5 mobile:w-full tablet:w-[50%]">
        <div className="space-y-2 text-center">
          <p className="text-5xl font-semibold mobile:text-3xl tablet:text-4xl">
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

        <form className="space-y-8 mobile:space-y-6">
          {/* Email */}
          <div className="flex gap-4 rounded-full bg-white px-6 py-3 pr-14 shadow-lg mobile:py-1 tablet:py-2">
            <MdOutlineMail className=" text-3xl text-linearBlue-1 mobile:text-2xl" />
            <input
              type="text"
              className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
              placeholder="E-mail"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            {/* input field */}
            <div className="flex gap-4 rounded-full bg-white px-6 py-3 shadow-lg mobile:py-1 tablet:py-2">
              <IoLockClosedOutline className=" font text-3xl text-linearBlue-1" />
              <input
                type={showPassword ? "text" : "password"}
                className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
                placeholder="Password"
              />
              <ShowPasswordButton
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
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
        </form>
      </div>

      {/* discreption */}
      <div className=" flex w-[40%] flex-col items-center justify-center gap-5 mobile:hidden">
        <p className="text-4xl font-bold tablet:text-3xl">Welcome Back!</p>
        <p className="w-[70%] text-center text-xl font-medium tablet:w-full tablet:text-xs">
          We've missed having you around. Get ready for an amazing experience
          ahead!
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
