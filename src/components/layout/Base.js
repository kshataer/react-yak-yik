import React, { Component } from "react";
import Zones from "../containers/Zones";
import Navbar from "./Navbar";
import Footer from "./Footer";
class Base extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Zones />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Base;
