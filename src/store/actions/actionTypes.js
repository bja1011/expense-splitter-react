/**
 * Created by adam on 28.11.17.
 */

export const USER_AUTH_START = 'USER_AUTH_STARTED';
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';
export const USER_AUTH_FAIL = 'USER_AUTH_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userAuthSuccess = (user) => {
  return {
    type: USER_AUTH_SUCCESS,
    user: user
  }
};

export const userAuthStart = () => {
  return {
    type: USER_AUTH_START
  }
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  }
};

