import * as actionTypes from "./userActionTypes";

const initialState = {
	userToken: "",
	userName: "",
	state: false,
};

const userReducer = (state = initialState, action) => {
 	switch (action.type) {
   		case actionTypes.START_LOGIN: {
			state = { ...state };
			state.userToken = "";
			state.userName = "";
			state.state = true;
			break;
   		}
		case actionTypes.LOGIN_FAIL: {
			state = { ...state };
			state.userToken = "";
			state.userName = "";
			state.state = false;
			break;
   		}
    		case actionTypes.LOGIN_SUCCESS: {
			state = { ...state };
			state.token = action.payload.userToken;
			state.userName = action.payload.userName;
			state.state = false;
			localStorage.setItem("token", action.payload.userToken);

      break;
    		}
    		case actionTypes.START_LOGOUT: {
			state = { ...state };
			state.userToken = "";
			state.userName = "";

      break;
    }

    default:
      break;
  }

  return state;
};

export default userReducer;
