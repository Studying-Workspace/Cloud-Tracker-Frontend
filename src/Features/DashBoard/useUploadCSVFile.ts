import { useMutation } from "@tanstack/react-query";
import { uploadCSVFile } from "../../services/dashboard";
import { useUserContext } from "../../context/UserProvider";
import { handleToastMessage } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const useUploadCSVFile = () => {
	const navigate = useNavigate() ;
	const { tokens } = useUserContext();
	const { mutate, isPending } = useMutation({
		mutationFn: (file: object) => uploadCSVFile(tokens?.token, file),
		onSuccess: () => {
			handleToastMessage("file uploaded successfully", "success");
			navigate("/dashboard/charts");
		},
		onError: (error) => {
			handleToastMessage(error.message, "warning");
		},
	});

	return { uploadCSVFile: mutate, isLoading: isPending };
};
export default useUploadCSVFile;
