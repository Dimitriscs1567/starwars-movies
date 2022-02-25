import axios from 'axios';

const defaultTimeout = 60000; //60 seconds

export const get = (url: string, headers: any, timeout?: number) => {
	if (!timeout) {
		timeout = defaultTimeout;
	}
	return axios.get(url, {
		headers: { ...headers },
		timeout: timeout
	});
};

export const post = (
	url: string,
	headers: any,
	body: any,
	timeout?: number
) => {
	if (!timeout) {
		timeout = defaultTimeout;
	}
	return axios.post(url, body, {
		headers: { ...headers },
		timeout: timeout
	});
};

export const deleteR = (
	url: string,
	headers: any,
	body?: any,
	timeout?: number
) => {
	if (!timeout) {
		timeout = defaultTimeout;
	}
	return axios.delete(url, {
		headers: { ...headers },
		timeout: timeout,
		data: body
	});
};

export const patch = (
	url: string,
	headers: any,
	body: any,
	timeout?: number
) => {
	if (!timeout) {
		timeout = defaultTimeout;
	}
	return axios.patch(url, body, {
		headers: { ...headers },
		timeout: timeout
	});
};
