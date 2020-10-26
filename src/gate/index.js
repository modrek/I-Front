import _axios from "./api";
import {mockonclient} from  "../helpers/configs"
import {searchinArray} from "../helpers/utility"
import mockdata from "../gate/userMockData";


const user = {
	checkAuthentication: async (userData) => {   
		if (mockonclient) 
		{      
			var user = searchinArray("userName",userData.username,mockdata);   
			if (user==undefined)
				return { success: false, errorMessage: "User does not exist." };
			if (user.password!=userData.password)
				return {success:false,errorMessage:"Password is incorrect."};
			return { success: true, errorMessage: "User login successfully." };
		}
		else
		{
			const result = await _axios
			.post("User/Login", userData)
			.catch((e) => {});
			return result?.data;
		}
	},

	Logout: async (userData) => {      
		const result = await _axios
		.post("User/Login", userData)
		.catch((e) => {});
		return result?.data;
	},
};
export default {...user };
