import { useMutation } from "@tanstack/react-query"
import { register } from "../../services/authenication";
import { handleToastMessage } from "../../utils/helper";

export const useRegister = ()=>{
    const {mutate , isPending} = useMutation({
        mutationFn: register,
        onSuccess: ()=>{
            handleToastMessage("Register successfully!" , "success") ; 
        },
        onError: (error)=>{
            handleToastMessage(error.message , "warning") ; 
        }
    });

    return {register:mutate , isLoading:isPending} ; 
}