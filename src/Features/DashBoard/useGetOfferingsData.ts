import { useQuery } from "@tanstack/react-query";
import { getOfferingsData } from "../../services/dashboard";
import { useUserContext } from "../../context/UserProvider";

const useGetOfferingsData = () => {
  const { tokens, selectedRole } = useUserContext();
  const { data: offeringsData, isLoading } = useQuery({
    queryKey: ["OfferingsData", selectedRole],
    queryFn: () => getOfferingsData(selectedRole, tokens?.token),
  });
  
  return { offeringsData, isLoading };
};

export default useGetOfferingsData;
