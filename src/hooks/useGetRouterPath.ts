import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useGetRouterPath = () => {
	const location = useLocation();
	const [currentPage, setCurrentPage] = useState<string>(location.pathname);

	useEffect(
		function () {
			setCurrentPage(location.pathname);
		},
		[location],
	);

	return currentPage ; 
};
export default useGetRouterPath;
