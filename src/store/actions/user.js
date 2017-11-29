/**
 * Created by adam on 29.11.17.
 */

import * as actionTypes from "./actionTypes";
import login from "../../utils/AuthUtils";

export const authSuccess = (user) => {
  return {
    type: actionTypes.USER_AUTH_SUCCESS,
    user: user
  }
};

export const auth = (user) => {
  return (dispatch) => {
    login(user.username, user.password)
      .then((resp) => {
        console.log(resp);
        dispatch(authSuccess(resp.data))
      })
  }
};

export const logout = () => {
  return {
    type: actionTypes.USER_LOGOUT
  }
};

export const authStart = () => {
  return {
    type: actionTypes.USER_AUTH_START
  }
};