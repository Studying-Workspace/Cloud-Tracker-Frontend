import GoogleLogo from "../../assets/GoogleLogo.png";
import AwsLogo from "../../assets/AwsLogo.png";

import ShowPasswordButton from "../../ui/Form/ShowPasswordButton";
import Button from "../../ui/Button";

import { MdLockOutline, MdOutlineMail } from "react-icons/md";

import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import SignupWelcomeMessage from "../../ui/Form/SignupWelcomeMessage";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex w-full justify-between">
      {/* Form */}
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

        <form className="space-y-6 mobile:space-y-4">
          {/* User Name */}
          <div className="flex gap-4 rounded-full bg-white px-6 py-3 pr-14 shadow-lg mobile:py-1 tablet:py-2">
            <FaRegUser className=" text-2xl text-linearBlue-1 mobile:text-xl" />
            <input
              type="text"
              className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
              placeholder="Username"
            />
          </div>

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
          <div className="flex gap-4 rounded-full bg-white px-6 py-3 shadow-lg mobile:py-1 tablet:py-2">
            <MdLockOutline className="text-3xl text-linearBlue-1" />
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

          {/* Confirm Password */}
          <div className="flex gap-4 rounded-full bg-white px-6 py-3 shadow-lg mobile:py-1 tablet:py-2">
            <MdLockOutline className="text-3xl text-linearBlue-1" />
            <input
              type={showPassword ? "text" : "password"}
              className="tablet:text-ms mobile:text-ms w-full text-lg focus:outline-none"
              placeholder="Confirm Password"
            />
            <ShowPasswordButton
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
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
        </form>
      </div>

      <SignupWelcomeMessage />
    </div>
  );
};

export default SignUpForm;
