/**
 * Created by adam on 29.11.17.
 */

import * as actionTypes from "./actionTypes";
import login from "../../utils/UserUtils";

export const auth = (user) => {
  return (dispatch) => {
    login(user.username, user.password)
      .then(
        (resp) => {
          dispatch(authSuccess(resp.data))
        },
        (err) => {
          dispatch(authFail(err))
        }
      )
  }
};

export const authStart = () => {
  return {
    type: actionTypes.USER_AUTH_START
  }
};

export const authSuccess = (user) => {
  return {
    type: actionTypes.USER_AUTH_SUCCESS,
    user: user
  }
};

export const authFail = (error) => {
  return {
    type: actionTypes.USER_AUTH_FAIL,
    error: error
  }
};

export const logout = () => {
  return {
    type: actionTypes.USER_LOGOUT
  }
};
