import { Outlet } from "react-router-dom";
import DashBoardNav from "../ui/DashBoard/DashBoardNav";

const Dashboard = () => {
	return (
		<div className="flex h-[calc(100vh-60.5px)] justify-between bg-stone-100 px-2 py-5 tablet:flex-col tablet:justify-start tablet:gap-6 tablet:overflow-y-auto mobile:flex-col mobile:justify-start mobile:gap-6 mobile:overflow-y-auto">
			<DashBoardNav />
			<div className="flex w-full items-center justify-center">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
