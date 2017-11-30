/**
 * Created by adam on 26.11.17.
 */
import React, {Component} from 'react';
import {Button, Grid, Paper, Tooltip, withStyles} from "material-ui";
import AddIcon from 'material-ui-icons/Add';
import {apiRequest} from "../utils/ApiUtils";
import ExpensesList from "../components/ExpensesList";
import moment from "moment";
import './Manage.css';

const styles = theme => ({});

/**
 * Expenses manage container
 */
class Manage extends Component {

  state = {
    expenses: []
  };

  getExpenses = () => {
    apiRequest({
      path: '/expenses.json',
      method: 'get'
    })
      .then(resp => this.setState({expenses: resp.data}))
  };

  handleAddClick = () => {
    let postData = {
      name: "tes as sdf dsf d",
      value: Math.random() * 1000,
      userId: 1,
      date: moment().toDate(),
      splits: Math.round(Math.random() * 10),
    };

    apiRequest({
      path: '/expenses.json',
      method: 'post',
      data: postData
    })
      .then(resp => this.getExpenses())
      .catch(resp => console.log(resp))
  };

  componentDidMount() {
    if (!this.state.expenses.length) this.getExpenses();
  }


  render() {

    const {classes} = this.props;

    return (
      <div className="Manage">
        <h1>Manage</h1>
        <div className="container">
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Manage);