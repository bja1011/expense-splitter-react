/**
 * Created by adam on 28.11.17.
 */
import * as _ from "lodash";
import * as actionTypes from "../actions/actionTypes";
import {logout} from "../../utils/UserUtils";

const initialState = {
  data: JSON.parse(localStorage.getItem('user')),
  token: localStorage.getItem('idToken')
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.USER_AUTH_START:
      return {
        ..._.cloneDeep(state),
        loading: true,
        error: null
      };

      break;

    case actionTypes.USER_AUTH_FAIL:
      return {
        ..._.cloneDeep(state),
        loading: false,
        error: action.error.response.data.error.message
      };

      break;

    case actionTypes.USER_AUTH_SUCCESS:
      return {
        ..._.cloneDeep(state),
        data: action.user,
        error: null,
        loading: false
      };

      break;

    case actionTypes.USER_LOGOUT:

      logout();
      return {
        ..._.cloneDeep(state),
        data: null
      };

      break;
  }
  return state;
};

export default reducer;