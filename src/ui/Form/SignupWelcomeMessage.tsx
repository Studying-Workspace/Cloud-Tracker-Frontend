const SignupWelcomeMessage = () => {
	return (
		<div className=" flex w-[40%] flex-col items-center justify-center gap-5 mobile:hidden">
			<p className="text-center text-4xl font-semibold tablet:text-3xl">
				Welcome To <br />{" "}
				<span className=" tracking-widest text-linearOrange-200">
					Cloud Tracker!
				</span>
			</p>
			<p className="text-center text-xl font-medium tablet:w-full tablet:text-xs">
				We're delighted to have you here. Get ready to simplify your
				workflow and maximize efficiency with our seamless integration
				with AWS.
			</p>
		</div>
	);
};

export default SignupWelcomeMessage;
