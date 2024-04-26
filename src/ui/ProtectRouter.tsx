import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Features/authentication/useUser";

const ProtectRouter = ({
	children,
	route,
}: {
	children: ReactNode;
	route: string;
}) => {
	const navigate = useNavigate();
	const { isLoading, isAuth } = useUser();

	useEffect(() => {
		if (route === "signIn" || route === "signUp") {
			if (!isLoading && isAuth) navigate("/profile");
		}

		if (route === "profile") {
			if (!isLoading && !isAuth) navigate("/signIn");
		}
	}, [navigate, isAuth, isLoading]);

	return children;
};
export default ProtectRouter;
