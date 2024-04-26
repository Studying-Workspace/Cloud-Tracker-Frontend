const LoginWelcomeMessage = () => {
	return (
		<div className=" flex w-[40%] flex-col items-center justify-center gap-5 mobile:hidden">
			<p className="text-4xl font-semibold tablet:text-3xl">
				Welcome Back!
			</p>
			<p className="w-[70%] text-center text-xl font-medium tablet:w-full tablet:text-xs">
				We've missed having you around. Get ready for an amazing
				experience ahead!
			</p>
		</div>
	);
};

export default LoginWelcomeMessage;
