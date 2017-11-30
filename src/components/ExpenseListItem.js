import React from 'react';
import moment from "moment/moment";
import {Card, CardContent, Typography} from "material-ui";

const ExpensesListItem = (props) => {

  const {classes, item} = props;

  return (
    <Card className={classes.card} key={item.id}>
      <CardContent>
        <Typography type="body1" className={classes.title}>
          {moment(item.date).format("YYYY-MM-DD")}
        </Typography>
        <Typography type="headline" component="h2">
          {item.name}
        </Typography>
        <Typography type="body1" className={classes.pos}>
          Splits: {item.splits} - Value: {item.value}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default ExpensesListItem;