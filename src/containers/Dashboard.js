/**
 * Created by adam on 26.11.17.
 */
import React, {Component} from 'react';
import {Button, Grid, withStyles} from "material-ui";
import AddIcon from 'material-ui-icons/Add';
import ExpensesList from "../components/ExpensesList";
import './Dashboard.css';
import {connect} from "react-redux";
import * as actionCreators from "../store/actions";
import ExpenseAdd from "../components/ExpenseAdd";

const styles = theme => ({});

/**
 * Expenses manage container
 */
class Dashboard extends Component {

  state = {
    showAddExpenseBox: false
  };

  getExpenses = () => {
    this.props.onFetchExpenses();
  };

  toggleAddExpenseBox = () => {
    this.setState({
      showAddExpenseBox: !this.state.showAddExpenseBox
    })
  };

  addExpenseBox() {
    return (
      <Grid item xs={12}>
        <ExpenseAdd/>
      </Grid>
    )
  }

  componentDidMount() {
    this.getExpenses();
  }

  render() {

    const {classes} = this.props;

    return (
      <div className="Dashboard">
        <div className="page-container">
          <h1>Dashboard</h1>
          <div className="container">
            <Grid container spacing={24}>
              {this.state.showAddExpenseBox ? this.addExpenseBox() : null}
              <Grid item xs={12} sm={6}>
                <h2>
                  Expenses <Button onClick={this.toggleAddExpenseBox}
                                   color="accent" aria-label="add"
                                   className={classes.button}>
                  <AddIcon/>
                </Button>
                </h2>
                <ExpensesList expenses={this.props.expenses}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>Events <Button color="accent" aria-label="add"
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
    expenses: state.expenses.expenses
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchExpenses: () => dispatch(actionCreators.fetchExpenses()),
    onAddExpense: (data) => dispatch(actionCreators.addExpense(data)),
  }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Dashboard));