/**
 * Created by adam on 27.11.17.
 */
import React, {Component} from 'react';
import AppInput from "../components/UI/Input/AppInput";
import {Button} from "material-ui";

export default class Auth extends Component {

  state = {
    loginForm: {
      username: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Username',
          name: 'username'
        },
        value: 'asd'
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
          name: 'password'
        },
        value: ''
      }
    }
  };

  loginFormControls() {
    return Object.keys(this.state.loginForm).map((key) => {
      let field = this.state.loginForm[key];

      return (
        <AppInput
          key={key}
          type={field.elementType}
          label={field.elementConfig.placeholder}
          value={field.value}
          onChange={(event)=>{console.log(event.target.value)}}
        />
      )
    })
  }

  render() {

    return (
      <div>
        <h1>Auth</h1>
        <form>
          {this.loginFormControls()}
          <Button color="accent">Login</Button>
        </form>
      </div>
    )
  }
}