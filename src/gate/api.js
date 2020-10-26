import axios from "axios";

import { apiUrl, enableNetworkLogger } from "../helpers/configs";
import { networkLogger } from "../helpers/utility";


const config = {
	headers: { Authorization: `Bearer "254"` },
};

const api = axios.create({
	baseURL: apiUrl,
	config,
});

api.interceptors.request.use(
	function (request) {
		return request;
	},
	function (error) {
		return Promise.reject(error);
	}
);
api.interceptors.response.use(
	function (response) {
		if (enableNetworkLogger) {
			networkLogger(response);
		}
		return response;
	},
	function (error) {
		const responseStatus = error?.response?.status + "";
		let message = "some error has occured ";
		return Promise.reject(error);
	}
);

export default api;
