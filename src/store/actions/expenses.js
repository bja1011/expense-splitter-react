import * as actionTypes from "./actionTypes";
import {doAddExpense, doDeleteExpense, doFetchExpenses} from "../../utils/ExpensesUtils";

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

export const deleteExpenseStart = (expenseId) => {
  return {
    type: actionTypes.EXPENSE_DELETE_START,
    expenseId: expenseId
  }
};

export const deleteExpenseFail = (error) => {
  return {
    type: actionTypes.EXPENSE_FETCH_FAIL,
    error: error
  }
};

export const deleteExpenseSuccess = () => {
  return {
    type: actionTypes.EXPENSE_DELETE_SUCCESS,
  }
};

export const deleteExpense = (expenseId) => {
  return (dispatch) => {
    dispatch(deleteExpenseStart(expenseId));
    doDeleteExpense(expenseId)
      .then(
        () => {
          dispatch(deleteExpenseSuccess())
          dispatch(fetchExpenses())
        },
        (err) => {
          dispatch(deleteExpenseFail(err))
        }
      )
  }
};

export const addExpense = (data) => {
  return (dispatch) => {
    dispatch(addExpenseStart())
    doAddExpense(data)
      .then(
        () => {
          dispatch(addExpenseSuccess())
          dispatch(fetchExpenses())
        },
        (err) => {
          dispatch(addExpenseFail(err))
        }
      )
  }
};

export const addExpenseStart = () => {
  return {
    type: actionTypes.EXPENSE_ADD_START
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