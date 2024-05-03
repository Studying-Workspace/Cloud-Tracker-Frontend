import { useQuery } from "@tanstack/react-query";
import { getIamRoles } from "../../services/dashboard";
import { useUserContext } from "../../context/UserProvider";

const useIamRoles = () => {
	const { tokens } = useUserContext();
	const { data: IamRoles, isLoading } = useQuery({
		queryKey: ["roles"],
		queryFn: () => getIamRoles(tokens?.token),
	});

	return { IamRoles, isLoading };
};
export default useIamRoles;
