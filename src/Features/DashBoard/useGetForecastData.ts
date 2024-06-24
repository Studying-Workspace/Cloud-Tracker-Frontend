import { useQuery } from "@tanstack/react-query";
import { getForecastData } from "../../services/dashboard";
import { useUserContext } from "../../context/UserProvider";

const useGetForecastData = () => {
	const { tokens, selectedRole } = useUserContext();

	const { data: ForecastData, isLoading } = useQuery({
		queryKey: ["ForecastData", selectedRole],
		queryFn: () => getForecastData(selectedRole, tokens?.token),
		enabled: !!tokens?.token && !!selectedRole,  
	});

	return { ForecastData, isLoading };
};

export default useGetForecastData;
