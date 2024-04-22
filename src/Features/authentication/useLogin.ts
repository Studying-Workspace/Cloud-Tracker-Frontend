import { useMutation } from "@tanstack/react-query"
import { login } from "../../services/authenication";
import { handleToastMessage } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";

export const useLogin = ()=>{
    const navigate = useNavigate() ; 
    const context = useUserContext() ;
    const {mutate , isPending} = useMutation({
        mutationFn: login,
        onSuccess: (data)=> {
            context?.setTokens(data) ; 
            navigate("/") ; 
            handleToastMessage("sign in succefully!" , "success");
        },
        onError: (error)=>{
            handleToastMessage(error.message , "warning");
        },
    });

    return {isLoading:isPending , login:mutate};
}