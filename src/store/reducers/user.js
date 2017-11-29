/**
 * Created by adam on 28.11.17.
 */
import * as _ from "lodash";
import * as actionTypes from "../actions";

const initialState = {
  data: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_AUTH_SUCCESS:
      return {
        ..._.cloneDeep(state),
        data: action.user
      };

      break;

    case actionTypes.USER_LOGOUT:
      return {
        ..._.cloneDeep(state),
        data: null
      };

      break;
  }
  return state;
};

export default reducer;