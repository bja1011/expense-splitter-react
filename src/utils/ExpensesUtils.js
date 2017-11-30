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
