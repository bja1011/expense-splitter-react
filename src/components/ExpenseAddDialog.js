/**
 * Created by adam on 3.12.17.
 */
import React, {Component} from 'react';
import AppInput from "./UI/Input/AppInput";
import moment from "moment/moment";
import {Button, CircularProgress, Dialog, DialogTitle, Paper, Typography} from "material-ui";
import {Save} from "material-ui-icons";
import _ from 'lodash';
import {loggedUser} from "../utils/UserUtils";
import * as SC from './ExpenseAdDialog.styles';

class ExpenseAddDialog extends Component {

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
          type: 'number',
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
          type: 'number',
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
    this.props.onRequestClose();
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

    const {onRequestClose, ...other} = this.props;

    return (
      <Dialog onRequestClose={onRequestClose} {...other}>
        <DialogTitle>Add expense</DialogTitle>
        <div>
          <div className="ExpenseAdd">
            <SC.MyPaper>
              <Typography component="h2">
                Add new expense
              </Typography>
              {this.addFormControls()}
              <div>
                <SC.SaveBtn disabled={!this.state.addFormValid || this.props.addingExpense}
                            onClick={this.handleAddClick}
                            color="accent" className="saveBtn"
                            raised dense
                >
                  <Save/>
                  {this.props.addingExpense ?
                    <CircularProgress className="deleteExpense" color="primary" size={24}/> : 'Save'}
                </SC.SaveBtn>
              </div>
            </SC.MyPaper>
          </div>
        </div>
      </Dialog>

    )
  }
}

export default ExpenseAddDialog;