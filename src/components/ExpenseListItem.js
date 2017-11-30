import React from 'react';
import moment from "moment/moment";
import {Avatar, Card, CardContent, CardHeader, IconButton, Typography} from "material-ui";
import MoreVertIcon from 'material-ui-icons/MoreVert';
import './ExpenseListItem.css'
const ExpensesListItem = (props) => {

  const {classes, item} = props;

  return (
    <Card className="ExpensesListItem" key={item.id}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className="avatar">
            {item.name[0]}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        }
        title={item.name}
        subheader={moment(item.date).format("YYYY-MM-DD")}
      />
      <CardContent>
        <Typography type="body1" className={classes.pos}>
          Splits: {item.splits} - Value: {item.value}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default ExpensesListItem;