import Button from "./Button";
import Wave from "../assets/introWave.png";
import notfoundimg from "../assets/notFoundPixels.gif";

const NotFound = () => {
	return (
		<div className="">
			<img
				src={Wave}
				alt="wave"
				draggable="false"
				className="absolute right-0 top--2 w-1/4"
			/>
			<div className="flex flex-col items-center">
				<img
					alt="Not Found"
					data-testid="not-found"
					className="w-[40%] object-cover mobile:mt-16 mobile:w-[85%] tablet:mt-32 tablet:w-[70%]"
					src={notfoundimg}
				/>
				<Button size="2xl" onClick={() => (window.location.href = "/")}>
					Go Home
				</Button>
			</div>
			<img
				src={Wave}
				alt="wave"
				className="fixed bottom-0 left-0 w-1/4 rotate-180"
			/>
		</div>
	);
};

export default NotFound;
