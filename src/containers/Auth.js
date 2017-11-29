/**
 * Created by adam on 27.11.17.
 */
import React, {Component} from 'react';
import AppInput from "../components/UI/Input/AppInput";
import {Button, CircularProgress} from "material-ui";
import _ from 'lodash';
import login from '../utils/AuthUtils';
import * as actionTypes from "../store/actions";
import {connect} from "react-redux";

class Auth extends Component {

  state = {
    loginForm: {
      username: {
        elementConfig: {
          type: 'input',
          label: 'Username',
          name: 'username'
        },
        value: '',
        valid: false,
        dirty: false,
        validation: {
          required: true,
        }
      },
      password: {
        elementConfig: {
          type: 'password',
          label: 'Password',
          name: 'password'
        },
        value: '',
        valid: false,
        dirty: false,
        validation: {
          required: true
        }
      }
    },
    loginFormValid: false,
  };

  checkValidity(value, rules) {
    let isValid = false;

    if (rules.required) {
      isValid = value.trim() !== '';
    }

    return isValid;
  }

  inputChangeHandler(event, inputId) {
    let newLoginForm = _.cloneDeep(this.state.loginForm);
    let field = newLoginForm[inputId];
    field.value = event.target.value;
    field.dirty = true;
    field.valid = this.checkValidity(field.value, field.validation);

    let formIsValid = true;
    Object.keys(this.state.loginForm).map((key) => {
      formIsValid = formIsValid && this.state.loginForm[key].valid;
    });

    this.setState({
      loginForm: newLoginForm,
      loginFormValid: formIsValid
    })
  }

  loginFormControls() {
    return Object.keys(this.state.loginForm).map((key) => {
      let field = this.state.loginForm[key];

      return (
        <AppInput
          key={key}
          elementconfig={field.elementConfig}
          value={field.value}
          onChange={(event) => this.inputChangeHandler(event, key)}
          valid={field.valid}
          dirty={field.dirty}
        />
      )
    })
  }

  submitLoginForm(event) {
    event.preventDefault();

    this.props.onUserAuthStart();
    let formData = {};

    Object.keys(this.state.loginForm).map((key) => {
      formData[key] = this.state.loginForm[key].value;
    });

    login(formData.username, formData.password)
      .then((resp) => {
        this.props.onUserAuthSuccess(resp.data)
      })
  }

  loginForm() {
    return (
      <form className={this.state.formSubmitted ? 'submitted' : null} onSubmit={this.submitLoginForm.bind(this)}>
        {this.loginFormControls()}
        <Button disabled={!this.state.loginFormValid} type="submit" color="accent">
          Login {this.props.loading && <CircularProgress size={24} />}
        </Button>
      </form>
    )
  }

  render() {
    return (
      <div>
        <h1>Auth</h1>
        {!this.props.user ? this.loginForm() : `Logged as ${this.props.user.name}`}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    loading: state.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onUserAuthSuccess: (user) => dispatch({
      type: actionTypes.USER_AUTH_SUCCESS,
      user: user
    }),
    onUserAuthStart: (user) => dispatch({
      type: actionTypes.USER_AUTH_START
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);