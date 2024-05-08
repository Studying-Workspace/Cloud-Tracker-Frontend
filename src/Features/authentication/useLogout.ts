import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";
import { handleToastMessage } from "../../utils/helper";

export const useLogout = (to: string, message: string) => {
	const { setTokens } = useUserContext();
	const navigate = useNavigate();
	const logout = () => {
		setTokens(null);
		localStorage.clear();
		navigate(to);
		if(message.length !== 0) handleToastMessage(message, "success");
	};

	return { logout };
};
