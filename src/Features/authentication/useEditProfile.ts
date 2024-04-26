import { useMutation } from "@tanstack/react-query";
import { editProfile } from "../../services/authenication";
import { handleToastMessage } from "../../utils/helper";

interface user {
	email?: string;
	name?: string;
	image?: string;
	password: string;
}

const useEditProfile = () => {
	const { mutate, isPending } = useMutation({
		mutationFn: ({
			user,
			token,
		}: {
			user: user;
			token: string | undefined;
		}) => editProfile(user, token),
		onSuccess: () => {
			handleToastMessage("Profile updated successfully!", "success");
		},
		onError: (error) => {
			handleToastMessage(error.message, "warning");
		},
	});

	return { isLoading: isPending, editProfile: mutate };
};

export default useEditProfile;
