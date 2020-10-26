const networkLogger = (response) => {
	if (response?.config?.url) {
		console.log(response?.config?.baseURL + response?.config?.url);
	}
	if (response?.config?.params) {
		console.log({ params: response.config.params });
	}
	if (response?.config?.data) {
		console.log({ data: response.config.data });
	}
	if (response?.data) {
		console.log({ data: response.data });
	}
	console.log({ response });
	console.log("========");
};

const validatestring = (value) => {
	if (
		value.includes(".") ||
		value.includes("/") ||
		value.includes("\\") ||
		value.includes("^") ||
		value.includes(",")
	)
	return false;
	else return true;
};

const searchinArray = (keyName, keyValue, myArray) => {
	for (var i = 0; i < myArray.length; i++) {
		if (myArray[i][keyName] === keyValue) {
			return myArray[i];
		}
	}
};

export { networkLogger, validatestring, searchinArray };
