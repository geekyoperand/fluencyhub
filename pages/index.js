import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Landing from "../src/views/Landing/index";
import LandingHeader from "../src/components/LandingHeader";

class Home extends Component {
  render() {
    return (
      <>
        <LandingHeader page={"landing"} />
        <Landing />
      </>
    );
  }
}

export default hot(module)(Home);
