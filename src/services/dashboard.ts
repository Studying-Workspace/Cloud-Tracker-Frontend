import axios from "axios";
import { serverBaseUrl } from "../utils/constants";

export const getIamRoles = async (token: string | undefined) => {
	if (token === undefined) return null;

	try {
		const response = await axios.get(`${serverBaseUrl}/role/all`, {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await response.data;

		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};

export const addARN = async (ARN: string, token: string | undefined) => {
	if (token === undefined) return null;

	try {
		const response = await axios.post(
			`${serverBaseUrl}/role?arn=${ARN}`,
			null,
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
		throw new Error(error.response.data);
	}
};

export const getBillingData = async (arn: string | undefined, token: string | undefined) => {
	if (arn === undefined || token === undefined || arn==="") return;
	try {
		const response = await axios.get(
			`${serverBaseUrl}/role/cost?arn=${arn}`,
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
		throw new Error(error.response.data);
	}
};
