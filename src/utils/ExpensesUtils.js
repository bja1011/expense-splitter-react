/**
 * Created by adam on 30.11.17.
 */
import {apiRequest} from "./ApiUtils";
import {loggedUser} from "./UserUtils";

export const doFetchExpenses = () => {

  return apiRequest({
    path: '/expenses.json',
    method: 'get',
    query: '&orderBy="userId"&equalTo="' + loggedUser().localId+'"'
  })
};

export const doAddExpense = (data) => {
  return apiRequest({
    path: '/expenses.json',
    method: 'post',
    data: data
  })
}

export const doDeleteExpense = (expenseId) => {
  return apiRequest({
    path: '/expenses/'+expenseId+'.json',
    method: 'delete'
  })
}
