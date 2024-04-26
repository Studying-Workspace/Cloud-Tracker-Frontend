import { useMutation } from "@tanstack/react-query";
import { editPassword } from "../../services/authenication";
import { handleToastMessage } from "../../utils/helper";

interface password {
	currentPassword: string;
	newPassword: string;
	confirmNewPassword: string;
}

const useEditPassword = () => {
	const { mutate, isPending } = useMutation({
		mutationFn: ({
			password,
			token,
		}: {
			password: password;
			token: string | undefined;
		}) => editPassword(password, token),
		onSuccess: () => {
			handleToastMessage("Password updated successfully!", "success");
		},
		onError: (error) => {
			handleToastMessage(error.message, "warning");
		},
	});

	return { isLoading: isPending, editPassword: mutate };
};

export default useEditPassword;
