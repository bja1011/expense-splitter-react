/**
 * Created by adam on 26.11.17.
 */
import React, {Component} from 'react';
import {Button, Grid, Paper, Tooltip, withStyles} from "material-ui";
import {apiRequest} from "../utils/ApiUtils";
import ExpensesList from "../components/ExpensesList";
import moment from "moment";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    flip: false,
    position: 'absolute',
    bottom: 32,
    right: 32,
  }
});

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
      name: "test",
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
    this.getExpenses();
  }


  render() {

    const {classes} = this.props;

    return (
      <div>
        <h1>Manage</h1>
        <div className="container">
          <Button onClick={this.handleAddClick} raised color="primary">Add new expense</Button>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper>
                <ExpensesList expenses={this.state.expenses}/>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Manage);