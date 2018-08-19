import React, { Component } from "react";
import ReactDOM from "react-dom";
import Base from "./components/layout/Base";
class App extends Component {
  render() {
    return <Base />;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
