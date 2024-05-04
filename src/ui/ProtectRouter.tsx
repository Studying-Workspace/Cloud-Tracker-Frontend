import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../Features/authentication/useUser";
import { useUserContext } from "../context/UserProvider";

const ProtectRouter = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();
	const { isLoading, isAuth } = useUser();
	const { selectedRole } = useUserContext();
	const currentPage = useLocation().pathname;

	useEffect(() => {
		if (
			currentPage.includes("/signIn") ||
			currentPage.includes("/signUp")
		) {
			if (!isLoading && isAuth) navigate("/profile");
		}

		if (
			currentPage.includes("/profile") ||
			currentPage === "/dashboard"
		) {
			if (!isLoading && !isAuth) navigate("/signIn");
		}

		if (currentPage.includes("/charts")) {
			console.log(selectedRole) ;
			if(!isLoading && !isAuth) navigate("/signIn");
			else if (selectedRole === "" || selectedRole === undefined) navigate("/dashboard");
		}
	}, [navigate, isAuth, isLoading , selectedRole]);

	return children;
};
export default ProtectRouter;
