/**
 * Created by adam on 29.11.17.
 */
import React, {Component} from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, withStyles} from "material-ui";
import moment from "moment";

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',

  },
  table: {
    minWidth: 700,
  },
});

const ExpensesList = (props) => {

  const {classes} = props;

  let expenses = Object.keys(props.expenses).map(key => {
    return {
      ...props.expenses[key],
      id: key
    }
  });

  return (

    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell numeric>Name</TableCell>
          <TableCell numeric>Value</TableCell>
          <TableCell numeric>Split count </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {expenses.map(n => {
          return (
            <TableRow key={n.id}>
              <TableCell>{moment(n.date).format("YYYY-MM-DD")}</TableCell>
              <TableCell numeric>{n.name}</TableCell>
              <TableCell numeric>{n.value}</TableCell>
              <TableCell numeric>{n.splits}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>

  )
}

export default withStyles(styles)(ExpensesList);