/**
 * Created by adam on 30.11.17.
 */
import {apiRequest} from "./ApiUtils";

export const doFetchExpenses = () => {
  return apiRequest({
    path: '/expenses.json',
    method: 'get',
  })
}

export const doAddExpense = (data) => {
  return apiRequest({
    path: '/expenses.json',
    method: 'post',
    data: data
  })
}
