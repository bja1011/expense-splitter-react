/**
 * Created by adam on 26.11.17.
 */
import React, {Component} from 'react';
import {Button} from "material-ui";
import {request} from "../utils/ApiUtils";

/**
 * Expenses manage container
 */
export default class Manage extends Component {

  state = {
    expenses: []
  };

  getExpenses = () => {
    request({
      path: '/expenses.json',
      method: 'get'
    })
      .then(resp => this.setState({expenses: resp.data}))
  };

  handleAddClick = () => {
    let postData = {
      name: "test",
      value: "test",
      userId: 1
    };

    request({
      path: '/expenses.json',
      method: 'post',
      data: postData
    })
      .then(resp => this.getExpenses())
      .catch(resp => console.log(resp))
  };

  componentDidMount() {
    this.getExpenses();
  }

  render() {
    return (
      <div>
        <h1>Manage</h1>
        <Button onClick={this.handleAddClick} raised color="primary">Add</Button>
      </div>
    )
  }
}