import Button from "./Button";
import Wave from "../assets/introWave.png";

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
					src="https://s3-alpha-sig.figma.com/img/8ca6/fe87/fc9975b15429f59f074ee1d34e419ff5?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dfpenwo6QarmVqQLPT34PanktCkkJz7SqUN4lS4xrsfMMYP2o9WtsCNHkb~H7HNOO3Q07LalJk0O098xbKqB6t2quTDpEzZ026nMgIw5Ff9X-4M0Qqw4w1RO~WOVEBdrJ9~IZot-7jPaPrYSD~qlsxO6t6Gfmv-Fo1fzpRKE717gvAF3hHt4c54C5uvb9AnStpk1Y0hU95~pLSMMwGB6itxpOCgi6kJpLukzghicW-8OkJiwFevxRQLhxbaSW-wfniBpt-LJXuf6LLJRfpLUlOViVdEnZTcnYOF2ejTCctEMnieAUYaLMjK22KPZBU5rFFYbreoq1PudHBxxY7xZtA__"
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
