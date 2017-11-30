/**
 * Created by adam on 28.11.17.
 */
import * as _ from "lodash";
import * as actionyTypes from "../actions/actionTypes";

const initialState = {
  expenses: []
};

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case actionyTypes.EXPENSE_FETCH_SUCCESS:

      return {
        ..._.cloneDeep(state),
        expenses: action.data
      };

      break;

    case actionyTypes.EXPENSE_ADD_SUCCESS:

      return {
        ..._.cloneDeep(state)
      };

      break;
  }

  return state;
};

export default reducer;