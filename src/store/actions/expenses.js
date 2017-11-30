import * as actionTypes from "./actionTypes";
import {doAddExpense, doFetchExpenses} from "../../utils/ExpensesUtils";

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

export const addExpenseSuccess = () => {
  return {
    type: actionTypes.EXPENSE_ADD_SUCCESS
  }
};

export const addExpenseFail = (data) => {
  return {
    type: actionTypes.EXPENSE_ADD_FAIL,
    error: data
  }
};

export const addExpense = (data) => {
  return (dispatch) => {

    doAddExpense(data)
      .then(
        () => {
          dispatch(fetchExpenses())
        },
        (err) => {
          dispatch(addExpenseFail(err))
        }
      )
  }
};