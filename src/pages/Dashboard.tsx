import { Outlet, useLocation } from "react-router-dom";
import DashBoardNav from "../ui/DashBoard/DashBoardNav";

const Dashboard = () => {
	const loacation = useLocation();
	const currentPage = loacation.pathname;

	return (
		<div className="flex h-[calc(100vh-60.5px)] justify-between bg-stone-100 px-2 py-5 mobile:flex-col mobile:justify-start mobile:gap-6 mobile:overflow-y-auto tablet:flex-col tablet:justify-start tablet:gap-6 tablet:overflow-y-auto">
			<DashBoardNav />
			<div
				className={`${currentPage === "/dashboard/charts/notification"? "" : "flex items-center justify-center"} mobile:items-start  w-full overflow-auto`}
			>
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
