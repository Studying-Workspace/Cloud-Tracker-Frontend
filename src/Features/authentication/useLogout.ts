import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";
import { handleToastMessage } from "../../utils/helper";

export const useLogout = (to: string, message: string) => {
	const { setTokens } = useUserContext();
	const navigate = useNavigate();
	const logout = () => {
		setTokens(null);
		navigate(to);
		handleToastMessage(message, "success");
	};

	return { logout };
};
