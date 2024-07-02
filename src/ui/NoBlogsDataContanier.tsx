import NoData from "../assets/no_data.png";

const NoBlogsDataContanier = () => {
	return (
		<div className="flex flex-col items-center space-y-3 mobile:space-y-7">
			<img
				alt="No Data"
				className="w-[35%] object-cover mobile:mt-9 mobile:w-[75%] tablet:mt-32 tablet:w-[75%]"
				src={NoData}
			/>
			<p className="text-2xl font-bold mobile:text-lg tablet:text-3xl">
				Unfortunately No Blogs Found! 😕
			</p>
		</div>
	);
};

export default NoBlogsDataContanier;
