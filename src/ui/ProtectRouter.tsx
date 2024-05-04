import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../Features/authentication/useUser";
// import { useUserContext } from "../context/UserProvider";

const ProtectRouter = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();
	const { isLoading, isAuth } = useUser();
	// const { iamRolesArn } = useUserContext();
	const currentPage = useLocation().pathname;

	useEffect(() => {
		if (
			currentPage.includes("/signIn") ||
			currentPage.includes("/signUp")
		) {
			if (!isLoading && isAuth) navigate("/profile");
		}

		if (currentPage.includes("/profile")) {
			if (!isLoading && !isAuth) navigate("/signIn");
		}

		if(currentPage === "/dashboard"){
			if (!isLoading && !isAuth) navigate("/signIn");
		}

		if (currentPage.includes("/charts")) {
			if (!isLoading && !isAuth) navigate("/signIn");
			// else if (iamRolesArn.length === 0) navigate("/dashboard");
		}
	}, [navigate, isAuth, isLoading]);

	return children;
};
export default ProtectRouter;
