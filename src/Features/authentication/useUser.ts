import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "../../context/UserProvider";
import { getUser } from "../../services/authenication";

export const useUser = () => {
	const { tokens } = useUserContext();

	const { data: user, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: () => getUser(tokens?.token),
	});

	return { user, isLoading, isAuth: tokens !== null };
};
