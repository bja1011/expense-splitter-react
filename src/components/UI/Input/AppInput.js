/**
 * Created by adam on 27.11.17.
 */
import React from 'react';
import {FormControl, Input, InputLabel} from "material-ui";
import './AppInput.css';

const AppInput = (props) => {

  let inputElement = null;
  let inputClasses = [props.class];

  if(!props.valid && props.dirty) inputClasses.push('invalid');

  inputClasses = inputClasses.join(' ');

  switch (props.elementconfig.type) {

    case 'input':
      inputElement = <Input value={props.value} onChange={props.onChange} {...props.elementconfig}/>;
      break;

    case 'password':
      inputElement = <Input value={props.value} onChange={props.onChange} {...props.elementconfig}/>;
      break;

  }

  return (
    inputElement ?
      <FormControl className={inputClasses}>
        <InputLabel htmlFor={props.elementconfig.name}>{props.elementconfig.label}</InputLabel>
        {inputElement}
      </FormControl> : null
  )

};

export default AppInput;