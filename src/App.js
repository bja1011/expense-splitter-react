import React, {Component} from 'react';
import Routes from "./Routes";
import Header from "./containers/Header/Header";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import styled from "styled-components";

const Content = styled.div`
  
`;
class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.user ? <Header user={this.props.user}/> : null}
        <Content>
          <Routes auth={this.props.user}/>
        </Content>
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
