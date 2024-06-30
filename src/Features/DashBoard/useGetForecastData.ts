import { useQuery } from "@tanstack/react-query";
import { getForecastData } from "../../services/dashboard";
import { useUserContext } from "../../context/UserProvider";

const useGetForecastData = () => {
	const { tokens, selectedRole } = useUserContext();

	const { data: forecastData, isLoading } = useQuery({
		queryKey: ["forecastData", selectedRole],
		queryFn: () => getForecastData(selectedRole, tokens?.token),
		enabled: !!tokens?.token && !!selectedRole,  
	});

	return { forecastData, isLoading };
};

export default useGetForecastData;
