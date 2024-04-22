import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "../../context/UserProvider";
import { getUser } from "../../services/authenication";

export const useUser = () => {
  const context = useUserContext();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", context?.tokens?.token],
    queryFn: () => getUser(context?.tokens?.token),
  });

  return { user, isLoading, isAuth: context?.tokens !== null };
};
