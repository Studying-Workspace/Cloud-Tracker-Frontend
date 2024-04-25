import axios from "axios";
import { serverBaseUrl } from "../utils/constants";

interface user {
  email?: string;
  name?: string;
  image?: string;
  password: string;
}

interface password {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export const register = async (user: user) => {
  try {
    const response = await axios.post(`${serverBaseUrl}/signup`, user, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
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
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    const data = await response.data;

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUser = async (token: string | undefined) => {
  try {
    if (token === undefined) return null;
    const response = await axios.get(`${serverBaseUrl}/me/profile`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.data;

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const editProfile = async (user: user, token: string | undefined) => {
  if (token === undefined) return null;
  try {
    const response = await axios.patch(`${serverBaseUrl}/me/profile`, user, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const editPassword = async (
  password: password,
  token: string | undefined,
) => {
  if (token === undefined) return null;
  try {
    const response = await axios.patch(
      `${serverBaseUrl}/me/password`,
      password,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.data;
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
