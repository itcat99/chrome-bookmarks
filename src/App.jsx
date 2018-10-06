import React, { Component } from "react";
import { connect } from "react-redux";
import Btn from "./components/Btn";

import actions from "./actions";

class App extends Component {
  render() {
    const { plus, minus, count } = this.props;
    return (
      <>
        <div>{count}</div>
        <Btn onClick={plus}>plus</Btn>
        <Btn onClick={minus}>minus</Btn>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { minus, plus } = state;

  return {
    count: plus + minus
  };
};
const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
