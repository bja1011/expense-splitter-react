/**
 * Created by adam on 27.11.17.
 */
import React from 'react';
import {FormControl, InputLabel} from "material-ui";
import './AppInput.css';
import {Input} from "antd";

const AppInput = (props) => {

  let inputElement = null;
  let inputClasses = [props.class];

  if(!props.valid && props.dirty) inputClasses.push('invalid');

  inputClasses = inputClasses.join(' ');

  switch (props.elementconfig.type) {

    case 'input':
    case 'number':
      inputElement = <Input value={props.value} onChange={props.onChange} {...props.elementconfig}/>;
      break;

    case 'password':
      inputElement = <Input value={props.value} onChange={props.onChange} {...props.elementconfig}/>;
      break;

  }

  return (
    inputElement ?
      <Input.Group size="large">
        <InputLabel htmlFor={props.elementconfig.name}>{props.elementconfig.label}</InputLabel>
        {inputElement}
      </Input.Group> : null
  )

};

export default AppInput;