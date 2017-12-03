/**
 * Created by adam on 28.11.17.
 */
import * as _ from "lodash";
import * as actionyTypes from "../actions/actionTypes";

const initialState = {
  expenses: [],
  removingExpense: false,
  addingExpense: false,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionyTypes.EXPENSE_FETCH_SUCCESS:
      return {
        ..._.cloneDeep(state),
        expenses: action.data
      };
      break;

    case actionyTypes.EXPENSE_ADD_SUCCESS:
      return {
        ..._.cloneDeep(state),
        addingExpense: false,

      };
      break;

    case actionyTypes.EXPENSE_ADD_START:
      return {
        ..._.cloneDeep(state),
        addingExpense: true
      };
      break;

    case actionyTypes.EXPENSE_DELETE_START:
      return {
        ..._.cloneDeep(state),
        removingExpense: action.expenseId
      };
      break;

    case actionyTypes.EXPENSE_DELETE_SUCCESS:
      return {
        ..._.cloneDeep(state),
        removingExpense: false
      };
      break;
  }

  return state;
};

export default reducer;