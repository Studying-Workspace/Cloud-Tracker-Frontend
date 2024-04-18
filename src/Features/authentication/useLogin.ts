import { useMutation } from "@tanstack/react-query"
import { login } from "../../services/authenication";
import { handleToastMessage } from "../../utils/helper";

export const useLogin = async ()=>{
    const {mutate , isPending} = useMutation({
        mutationFn: login,
        onError: (error)=>{
            handleToastMessage(error.message , "warning");
        },
    });

    return {isLoading:isPending , login:mutate};
}