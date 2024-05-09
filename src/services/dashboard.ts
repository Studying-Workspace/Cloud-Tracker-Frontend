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

export const getBillingData = async (
	arn: string | File | undefined,
	token: string | undefined,
) => {
	if (arn === undefined || token === undefined || arn === "") return;

	if (typeof arn === "string") {
		const req = await getBillingDataByERN(arn , token) ;
		return req ;
	}

	const req = await getBillingDataByCSVFile(token) ;
	return req ;
};

const getBillingDataByERN = async (arn:string , token:string) => {
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

const getBillingDataByCSVFile = async (token:string) => {
	try {
		const response = await axios.get(
			`${serverBaseUrl}/cost-info/months`,
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

export const uploadCSVFile = async (
	token: string | undefined,
	file: object,
) => {
	if (token === undefined) return;

	try {
		const response = await axios.post(
			`${serverBaseUrl}/cost-info/upload`,
			file,
			{
				headers:{
					Authorization: `Bearer ${token}`,
				}
			}
		);

		const data = response.data;

		return data;
	} catch (error: any) {
		throw new Error(error.response.data);
	}
};
