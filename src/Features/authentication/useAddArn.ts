import { useMutation } from "@tanstack/react-query";
import { addARN} from "../../services/authenication";
import { handleToastMessage } from "../../utils/helper";
import { useNavigate } from "react-router-dom";



const useAddARN = () => {
	const navigate = useNavigate();
	const { mutate, isPending } = useMutation({
		mutationFn: ({ ARN, token }: { ARN: string; token: string | undefined }) =>
			addARN(ARN, token),
		onSuccess: () => {
			handleToastMessage("ARN is successfully!", "success");
			navigate("charts");
		},
		onError: (error) => {
			handleToastMessage(error.message, "warning");
		},
	});

	return { isLoading: isPending, addARN: mutate };
};

export { useAddARN };
