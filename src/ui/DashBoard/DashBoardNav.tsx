import { Link } from "react-router-dom";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { RiBubbleChartLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import useGetRouterPath from "../../hooks/useGetRouterPath";

const DashBoardNav = () => {
	const currentPage = useGetRouterPath();

	return (
		<div className="flex h-full w-fit flex-col justify-between rounded-xl bg-gradient-to-t from-linearBlue-3 via-linearBlue-3 to-linearBlue-3 px-2 py-12 text-3xl text-linearBlue-1 tablet:h-0 tablet:w-full tablet:flex-row tablet:items-center tablet:px-8 tablet:py-8 mobile:h-0 mobile:w-full mobile:flex-row mobile:items-center mobile:px-8 mobile:py-6">
			<Link
				to="/dashboard"
				className={`pb-1 ${currentPage.includes("/dashboard") && !currentPage.includes("/bubbleChart") && !currentPage.includes("/notification") ? "border-b-4 border-linearOrange-200" : ""} transition-all duration-100`}
			>
				<HiOutlineRectangleGroup />
			</Link>
			<Link
				to="bubbleChart"
				className={`pb-1 ${currentPage.includes("/bubbleChart") ? "border-b-4 border-linearOrange-200" : ""} transition-all duration-100`}
			>
				<RiBubbleChartLine />
			</Link>
			<Link
				to="notification"
				className={`pb-1 ${currentPage.includes("/notification") ? "border-b-4 border-linearOrange-200" : ""} transition-all duration-100`}
			>
				<IoMdNotificationsOutline />
			</Link>
		</div>
	);
};
export default DashBoardNav;
