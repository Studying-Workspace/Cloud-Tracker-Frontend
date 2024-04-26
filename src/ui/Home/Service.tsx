import Button from "../Button";

import educationVector from "../../assets/educationVector.png";
import costReductionVector from "../../assets/costReductionVector.png";
import circleRight from "../../assets/circleRight.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Service = () => {
	return (
		<>
			{/* section 1 */}
			<div className="z-40 mt-[100px]">
				<p className="w-full text-center text-xl font-semibold text-[#1B5AA8]">
					SERVICE WE PROVIDE
				</p>
				<Section1 />
			</div>

			<Section2 />
		</>
	);
};

const Section1 = () => {
	const navigate = useNavigate();

	const handleNavigate = (page: string) => {
		navigate(`/${page}`);
	};

	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	const opacityProgress = useTransform(scaleProgress, [0, 1], [0, 1]);
	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
				translateX: scrollYProgress,
			}}
			className="relative z-40 mt-[10px] flex items-center justify-between py-28 pl-10 pr-32 mobile:flex-col mobile:gap-12 mobile:px-8 tablet:flex-col tablet:gap-12 tablet:px-24"
		>
			<img
				className="z-40 w-[600px] mobile:w-[300px] tablet:w-[450px]"
				src={educationVector}
				alt=""
				draggable="false"
			/>
			<div className="z-40 flex w-[45%] flex-col items-center justify-between gap-10 mobile:w-full tablet:w-full">
				<div className="space-y-4">
					<p className="z-40 text-4xl font-semibold leading-[50px] tracking-[5px] mobile:text-center mobile:text-2xl mobile:tracking-wide tablet:text-center tablet:text-3xl">
						{" "}
						Educational Resources{" "}
					</p>
					<p className=" text-xl text-stone-500 mobile:text-sm">
						Dive into the world of AWS with our insightful blog section
						at Cloud Tracker . Whether you're a beginner or an expert,
						our educational resources cater to all level of familiarity
						with Amazon Web Services. Stay updated with the latest
						trends, tips, and tutorials, empowering you to navigate the
						AWS landscape confidently. Explore, learn, and elevate your
						cloud knowledge effortlessly.
					</p>
				</div>
				<Button size="xl" onClick={() => handleNavigate("blog")}>
					Explore Blog
				</Button>
			</div>
		</motion.div>
	);
};

const Section2 = () => {
	const navigate = useNavigate();

	const handleNavigate = (page: string) => {
		navigate(`/${page}`);
	};

	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	const opacityProgress = useTransform(scaleProgress, [0, 1], [0, 1]);
	return (
		<div className="relative z-40 mb-80 mt-[10px] py-28 pl-32 pr-20 mobile:mb-64 mobile:px-8 tablet:px-24">
			<motion.div
				ref={ref}
				style={{
					scale: scaleProgress,
					opacity: opacityProgress,
				}}
				className="flex items-center justify-between mobile:flex-col-reverse mobile:gap-12 tablet:flex-col-reverse tablet:gap-12"
			>
				<div className="z-40 flex w-[45%] flex-col items-center justify-between gap-10 mobile:w-full tablet:w-full">
					<div className="space-y-4">
						<p className="z-40 text-4xl font-semibold leading-[50px] tracking-[5px] mobile:text-center mobile:text-2xl mobile:tracking-wide tablet:text-center tablet:text-3xl">
							{" "}
							Cost & usage tracking{" "}
						</p>
						<p className=" text-xl text-stone-500 mobile:text-sm">
							Optimize your AWS expenses effortlessly with Cloud
							Tracker. Our advanced recommendation system analyzes your
							usage patterns and suggests smart adjustments, such as
							resizing services to match actual needs and identifying
							idle or unused components for potential cost savings.
							Take control of your cloud costs and ensure efficient
							resource allocation with personalized recommendations
							from Cloud Tracker.
						</p>
					</div>
					<Button size="xl" onClick={() => handleNavigate("dashboard")}>
						Go To Dashboard
					</Button>
				</div>
				<img
					className="z-40 w-[450px] mobile:w-[250px] tablet:w-[350px]"
					src={costReductionVector}
					alt=""
					draggable="false"
				/>
			</motion.div>
			<img
				className="absolute bottom-[-130px] right-[-1px] z-0 w-[120px] mobile:w-[70px] tablet:w-[80px]"
				src={circleRight}
				alt=""
				draggable="false"
			/>
		</div>
	);
};

export default Service;
