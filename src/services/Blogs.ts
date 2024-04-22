import axios from "axios";
import { serverBaseUrl } from "../utils/constants";

export const getAllBlogs = async () => {
    try {
        const response = await axios.get(`${serverBaseUrl}/blogs`);

        console.log(response.data);
        const data = await response.data;
        return data;
    }
    catch (error: any) {
        throw new Error(error);
    }
}

export const getBlogByID = async  ( id: number ) => {
    try {
        const response = await axios.get(`${serverBaseUrl}/blogs/blog/${id}`);

        console.log(response.data);
        const data = await response.data;
        return data;
    }
    catch (error: any) {
        // return error;
        throw new Error(error);
    }
}