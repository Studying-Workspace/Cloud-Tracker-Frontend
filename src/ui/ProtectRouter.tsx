import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Features/authentication/useUser";
// import useGetRouterPath from "../hooks/useGetRouterPath";

const ProtectRouter = ({
	children,
}: {
	children: ReactNode;
}) => {
	const navigate = useNavigate();
	const { isLoading, isAuth } = useUser();
	const currentPage = window.location.href ;
	console.log(currentPage) ;

	useEffect(() => {
		if (
			currentPage.includes("/signIn") ||
			currentPage.includes("/signUp")
		) {
			if (!isLoading && isAuth) navigate("/profile");
		}

		if (
			currentPage.includes("/profile") ||
			currentPage.includes("/dashboard")
		) {
			if (!isLoading && !isAuth) navigate("/signIn");
		}
	}, [navigate, isAuth, isLoading]);

	return children;
};
export default ProtectRouter;
