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
      <div className="flex w-[40%] flex-col gap-5">
        <div className="space-y-2 text-center">
          <p className="text-5xl font-semibold">Sign in</p>
          <p className="text-ms font-medium tracking-wider">
            Don’t have an account?{" "}
            <Link
              to="/signUp"
              className=" text-linearBlue-1 underline transition-all duration-300 hover:text-black"
            >
              Sign up
            </Link>
          </p>
        </div>

        <form className="space-y-8">
          {/* Email */}
          <div className="flex gap-4 rounded-full bg-white px-6 py-3 pr-14 shadow-lg">
            <MdOutlineMail className=" text-3xl text-linearBlue-1" />
            <input
              type="text"
              className="w-full text-lg focus:outline-none"
              placeholder="E-mail"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            {/* input field */}
            <div className="flex gap-4 rounded-full bg-white px-6 py-3 shadow-lg">
              <IoLockClosedOutline className=" font text-3xl text-linearBlue-1" />
              <input
                type="password"
                className="w-full text-lg focus:outline-none"
                placeholder="Password"
              />
              <ShowPasswordButton showPassword={showPassword} setShowPassword={setShowPassword} />
            </div>

            <div className="text-ms flex justify-between px-7 text-gray-400">
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
      <div className=" flex w-[40%] flex-col items-center justify-center gap-5">
        <p className="text-4xl font-bold">Welcome Back!</p>
        <p className="w-[70%] text-center text-xl font-medium">
          We've missed having you around. Get ready for an amazing experience
          ahead!
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
