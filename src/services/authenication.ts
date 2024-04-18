import axios from "axios";
import { serverBaseUrl } from "../utils/constants";

interface user {
  email?: string;
  name?: string;
  image?: string;
  password: string;
}

export const register = async (user: user) => {
  try {
    const response = await axios.post(`${serverBaseUrl}/signup`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.data;

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const login = async (user: user) => {
  try {
    const response = await axios.post(`${serverBaseUrl}/signin`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.data;

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};