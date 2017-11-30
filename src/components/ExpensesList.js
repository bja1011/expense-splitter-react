/**
 * Created by adam on 29.11.17.
 */
import React from 'react';
import {Grid, withStyles} from "material-ui";
import ExpensesListItem from "./ExpenseListItem";

const styles = theme => ({});

const ExpensesList = (props) => {

  const {classes} = props;

  let expenses = Object.keys(props.expenses).map(key => {
    return {
      ...props.expenses[key],
      id: key
    }
  });

  expenses = expenses.sort((a, b) => a.date > b.date)

  return (
    <div className="ExpensesList">
      <Grid container spacing={24}>
        {expenses.reverse().map(e => {
          return (
            <Grid key={e.id} item xs={12}>
              <ExpensesListItem item={e} classes={classes}/>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
};

export default withStyles(styles)(ExpensesList);