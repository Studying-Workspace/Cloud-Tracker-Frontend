import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/authenication";
import { handleToastMessage } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
	const navigate = useNavigate();
	const { mutate, isPending } = useMutation({
		mutationFn: register,
		onSuccess: () => {
			handleToastMessage("Register successfully!", "success");
			navigate("/signIn");
		},
		onError: (error) => {
			handleToastMessage(error.message, "warning");
		},
	});

	return { register: mutate, isLoading: isPending };
};
