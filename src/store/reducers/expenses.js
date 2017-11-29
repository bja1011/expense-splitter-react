/**
 * Created by adam on 28.11.17.
 */
import * as _ from "lodash";
import * as actionTypes from "../actions";

const initialState = {
  expenses: null
};

const reducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case actionTypes.USER_AUTH_SUCCESS:
  //     return {
  //       ..._.cloneDeep(state),
  //       user: action.user
  //     };
  //
  //     break;
  //
  //   case actionTypes.USER_LOGOUT:
  //     return {
  //       ..._.cloneDeep(state),
  //       user: null
  //     };
  //
  //     break;
  // }
  return state;
};

export default reducer;