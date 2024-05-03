import axios from "axios"
import { serverBaseUrl } from "../utils/constants"

export const getIamRoles = async (token:string|undefined)=>{
	if (token === undefined) return null;

	try{
		const response = await axios.get(`${serverBaseUrl}/role/all` , {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		}) ;

		const data = await response.data ;

		return data ;
	}
	catch(error : any){
		throw new Error(error)
	}
}
