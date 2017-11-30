import * as actionTypes from "./actionTypes";
import {doFetchExpenses} from "../../utils/ExpensesUtils";

export const fetchExpensesSuccess = (data) => {
  return {
    type: actionTypes.EXPENSE_FETCH_SUCCESS,
    data: data
  }
};

export const fetchExpensesFail = (data) => {
  return {
    type: actionTypes.EXPENSE_FETCH_FAIL,
    error: data
  }
};

export const fetchExpenses = () => {
  return (dispatch) => {
    doFetchExpenses()
      .then(
        (resp) => {
          dispatch(fetchExpensesSuccess(resp.data))
        },
        (err) => {
          dispatch(fetchExpensesFail(err))
        }
      )
  }
};