/**
 * Created by adam on 27.11.17.
 */
import React from 'react';
import {FormControl, Input, InputLabel} from "material-ui";

const AppInput = (props) => {

  let inputElement = null;

  switch (props.type) {

    case 'input':
      inputElement = <Input value={props.value} onChange={props.onChange} {...props.elementConfig}/>;
      break;

    case 'password':
      inputElement = <Input  value={props.value} onChange={props.onChange} {...props.elementConfig}/>;
      break;

  }

  return (
    inputElement ?
      <FormControl className={props.class}>
        <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
        {inputElement}
      </FormControl> : null
  )

};

export default AppInput;