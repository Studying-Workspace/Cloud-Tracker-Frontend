import NavBar from "./NavBar";
import Footer from "./Footer";
// import Spinner from "./Spinner";

import { Outlet, useLocation } from "react-router-dom";
// import { useUser } from "../Features/authentication/useUser";

const Applayout = () => {
	const loacation = useLocation();
	const currentPage = loacation.pathname;
	const setFooter = currentPage === "/" || currentPage === "/profile";
	// const { isLoading, isAuth } = useUser();

	return (
		<div>
			<NavBar />
			<div
				className={`relative  ${currentPage === "/blog" ? "h-[calc(100vh-60.5px)]" : ""}  overflow-hidden`}
			>
				<Outlet />
			</div>
			{setFooter && <Footer />}
		</div>
	);
	// return isAuth && isLoading ? (
	// 	<Spinner />
	// ) : (
	// 	<div>
	// 		<NavBar />
	// 		<div
	// 			className={`relative  ${currentPage === "/blog" ? "h-[calc(100vh-60.5px)]" : ""}  overflow-hidden`}
	// 		>
	// 			<Outlet />
	// 		</div>
	// 		{setFooter && <Footer />}
	// 	</div>
	// );
};

export default Applayout;
