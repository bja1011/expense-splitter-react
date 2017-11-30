import React from 'react';
import moment from "moment/moment";
import {Avatar, Card, CardContent, CardHeader, Typography} from "material-ui";
import './ExpenseListItem.css'
import {Delete} from "material-ui-icons";
import {connect} from "react-redux";
import * as actionCreators from "../store/actions";

const ExpensesListItem = (props) => {

  const {classes, item} = props;

  const deleteExpense = (expenseId) => {
    props.onDeleteExpense(expenseId)
  }

  return (
    <Card className="ExpensesListItem" key={item.id}>
      <CardHeader
        className="expenseListItemHeader"
        avatar={
          <Avatar aria-label="Recipe" className="avatar">
            {item.name[0]}
          </Avatar>
        }
        // action={
        //   <Delete className={classes.rightIcon}/>
        // }
        title={item.name}
        subheader={moment(item.date).format("YYYY-MM-DD")}
      />
      <CardContent>
        <Typography type="body1" className={classes.pos}>
          Splits: {item.splits} - Value: {item.value}
        </Typography>
      </CardContent>
      <Delete className="deleteExpense" onClick={() => deleteExpense(item.id)}/>
    </Card>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteExpense: (expenseId) => dispatch(actionCreators.deleteExpense(expenseId))
  }
}

export default connect(null, mapDispatchToProps)(ExpensesListItem);