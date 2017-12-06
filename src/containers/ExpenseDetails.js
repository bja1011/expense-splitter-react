/**
 * Created by adam on 26.11.17.
 */
import React, {Component} from 'react';
import {Button, Grid, withStyles} from "material-ui";
import AddIcon from 'material-ui-icons/Add';
import ExpensesList from "../components/ExpensesList";
import {connect} from "react-redux";
import * as actionCreators from "../store/actions";
import ExpenseAddDialog from "../components/ExpenseAddDialog";
import styled from "styled-components";

const styles = theme => ({});

const H1 = styled.h1`
  border-bottom: solid 1px #444;
  padding-bottom: 10px;
  text-align: center;
`;

/**
 * Expenses manage container
 */
class ExpenseDetails extends Component {

  state = {
    showAddExpenseDialog: false
  };

  getExpenses = () => {
    this.props.onFetchExpenses();
  };

  handleDialogOpen = () => {
    this.setState({showAddExpenseDialog: true})
  };

  handleDialogClose = () => {
    this.setState({showAddExpenseDialog: false});
  };

  componentDidMount() {
    this.getExpenses();
  }

  render() {

    const {classes} = this.props;

    return (
      <div className="Dashboard">
        <div className="page-container">
          <H1>Dashboard</H1>
          <div className="container">
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <h2>
                  Expenses
                  <Button onClick={this.handleDialogOpen}
                          color="accent"
                          className={classes.button}>
                    <AddIcon/>
                  </Button>
                </h2>
                <ExpensesList addingExpense={this.props.addingExpense} expenses={this.props.expenses}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>
                  Events
                  <Button color="accent"
                          disabled
                          className={classes.button}>
                    <AddIcon/>
                  </Button>
                </h2>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses.expenses,
    addingExpense: state.expenses.addingExpense
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchExpenses: () => dispatch(actionCreators.fetchExpenses()),
    onAddExpense: (data) => dispatch(actionCreators.addExpense(data))
  }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ExpenseDetails));
