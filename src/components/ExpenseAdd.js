/**
 * Created by adam on 30.11.17.
 */
import React, {Component} from 'react';
import AppInput from "./UI/Input/AppInput";
import moment from "moment/moment";
import {Button} from "material-ui";
import {Save} from "material-ui-icons";
import './ExpenseAdd.css';
import * as actionCreators from "../store/actions";
import {connect} from "react-redux";
import _ from 'lodash';
import {isLogged, loggedUser} from "../utils/UserUtils";

class ExpenseAdd extends Component {

  state = {
    addForm: {
      name: {
        elementConfig: {
          type: 'input',
          label: 'Name',
          name: 'name'
        },
        value: '',
        valid: false,
        dirty: false,
        validation: {
          required: true,
        }
      },
      value: {
        elementConfig: {
          type: 'input',
          label: 'Amount',
          name: 'value'
        },
        value: '',
        valid: false,
        dirty: false,
        validation: {
          required: true,
        }
      },
      splits: {
        elementConfig: {
          type: 'input',
          label: 'Splits',
          name: 'splits'
        },
        value: '',
        valid: false,
        dirty: false,
        validation: {
          required: true,
        }
      },
    },
    addFormValid: false,
  };

  checkValidity(value, rules) {
    let isValid = false;

    if (rules.required) {
      isValid = value.trim() !== '';
    }

    return isValid;
  }

  inputChangeHandler(event, inputId) {
    let newAddForm = _.cloneDeep(this.state.addForm);
    let field = newAddForm[inputId];
    field.value = event.target.value;
    field.dirty = true;
    field.valid = this.checkValidity(field.value, field.validation);

    let formIsValid = true;
    Object.keys(this.state.addForm).map((key) => {
      formIsValid = formIsValid && this.state.addForm[key].valid;
    });

    this.setState({
      addForm: newAddForm,
      addFormValid: formIsValid
    })
  }

  handleAddClick = () => {
    let postData = {
      name: this.state.addForm.name.value,
      value: this.state.addForm.value.value,
      userId: loggedUser().localId,
      date: moment().toDate(),
      splits: this.state.addForm.splits.value,
    };

    this.props.onAddExpense(postData);
  };

  addFormControls() {
    return Object.keys(this.state.addForm).map((key) => {
      let field = this.state.addForm[key];

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

  render() {
    return (
      <div className="ExpenseAdd">
        {this.addFormControls()}
        <div>
          <Button disabled={!this.state.addFormValid} onClick={this.handleAddClick} color="accent" className="saveBtn"
                  raised dense>
            <Save/>
            Save
          </Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddExpense: (data) => dispatch(actionCreators.addExpense(data))
  }
};

export default connect(null, mapDispatchToProps)(ExpenseAdd);