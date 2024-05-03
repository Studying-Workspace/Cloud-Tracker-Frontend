import { useQuery } from "@tanstack/react-query";
import { getBillingData } from "../../services/dashboard";
import { useUserContext } from "../../context/UserProvider";

const useGetBillingData = () => {
	const { tokens, selectedRole } = useUserContext();

	const { data: BillingData, isLoading } = useQuery({
		queryKey: ["BillingData"],
		queryFn: () => getBillingData(selectedRole, tokens?.token),
	});

	return { BillingData, isLoading };
};

export default useGetBillingData;
