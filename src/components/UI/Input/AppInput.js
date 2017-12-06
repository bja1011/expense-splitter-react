/**
 * Created by adam on 27.11.17.
 */
import React from 'react';
import './AppInput.css';
import {FormGroup, Input, Label} from "reactstrap";
import styled from "styled-components";

const AppInput = (props) => {

  const AppInput  = styled(Input)`
  height: 60px;
`;

  let inputElement = null;
  let inputClasses = [props.class];

  if(!props.valid && props.dirty) inputClasses.push('invalid');

  switch (props.elementconfig.type) {
    case 'input':
    case 'number':
      inputElement = <AppInput value={props.value} onChange={props.onChange} {...props.elementconfig}/>;
      break;

    case 'password':
      inputElement = <AppInput value={props.value} onChange={props.onChange} {...props.elementconfig}/>;
      break;

  }

  return (
    inputElement ?
      <FormGroup>
        <Label>{props.elementconfig.label}</Label>
        {inputElement}
      </FormGroup> : null
  )

};

export default AppInput;