import React, {Component} from 'react';
import './App.css';
import Routes from "./Routes";
import Header from "./containers/Header/Header";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header user={this.props.user}/>
        <Routes auth={this.props.user}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data
  }
};

export default withRouter(connect(mapStateToProps)(App));
