import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import blogImg from "../../assets/blogImg.png";
import { BiLike } from "react-icons/bi";
import { LuUpload } from "react-icons/lu";

const BlogElement = () => {
	const navigate = useNavigate();
	// const { blogId } = useParams();
	const handleClick = () => {
		// when we going to link it with API, we will use this
		// navigate(`/blog/${blogId}`);
		navigate(`/blog/123`);
	};

	const handleMakeLike = (e: any) => {
		// stop onClick event from perant div
		if (e && e.stopPropagation) e.stopPropagation();
		console.log("like");
	};

	return (
		<div
			className="flex cursor-pointer flex-col gap-6 px-4 py-6 transition-all duration-500 hover:bg-gray-100"
			onClick={() => handleClick()}
		>
			{/* head */}
			<div className="flex items-center justify-between">
				{/* publisher */}
				<div className="flex items-center gap-1">
					<IoPersonCircleOutline className="text-4xl text-gray-600 mobile:text-3xl" />
					<p className="text-sm text-gray-600 mobile:text-xs">
						Publisher
					</p>
				</div>
				{/* date */}
				<div className="text-sm text-gray-500 mobile:text-xs">
					April 19,2024
				</div>
			</div>

			{/* body */}
			<div className="flex items-center justify-between">
				{/* container */}
				<div className="flex w-[60%] flex-col gap-6 mobile:w-[65%]">
					<p className="text-2xl font-bold mobile:text-xs tablet:text-lg">
						Exploring the Future of Digital Innovation
					</p>

					<p className="text-lg mobile:hidden tablet:hidden">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						vestibulum justo quis urna posuere, sed sodales nisl
						facilisis. Phasellus suscipit, ipsum sed consectetur
						efficitur, leo felis....
					</p>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-6 mobile:gap-3">
							<div className="w-fit rounded-full border-2 border-linearOrange-200 px-6 py-1 text-center font-semibold mobile:px-2 mobile:text-xs">
								Cloud
							</div>
							<div className="text-sm text-gray-500 mobile:text-xs">
								6 min read
							</div>
						</div>
						<div className="flex items-center justify-center gap-2">
							<div className="flex items-center justify-center gap-2 mobile:gap-1">
								<p className="text-sm text-gray-500 mobile:text-xs">
									100
								</p>
								<BiLike
									className="text-2xl text-gray-600 hover:text-blue-600 mobile:text-xl"
									onClick={(e) => handleMakeLike(e)}
								/>
							</div>
							<div>
								<LuUpload
									className="z-50 text-xl text-gray-600 hover:text-blue-600 mobile:text-lg"
									onClick={() => {
										console.log("upload");
										navigate("/");
									}}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* image */}
				<img
					src={blogImg}
					alt="img"
					draggable="false"
					className=" h-32 w-32 self-start mobile:h-16 mobile:w-16 mobile:self-start tablet:h-24 tablet:w-24"
				/>
			</div>
		</div>
	);
};

export default BlogElement;
