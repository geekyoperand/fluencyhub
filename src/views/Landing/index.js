import React, { Component } from "react";
import styled from "styled-components";
import TopSplash from "./TopSplash";
import FaceIt from "./FaceIt";
import AboutFluencyHub from "./AboutFluencyHub";
import HowItWorks from "./HowItWorks";
import BrowseCategories from "./BrowseCategories";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Main>
        <TopSplash overlay={this.props.showAnOverlay} />
        <FaceIt />
        <AboutFluencyHub overlay={this.props.showAnOverlay} />
        <HowItWorks />
        <BrowseCategories />
      </Main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showAnOverlay: (type, data) => dispatch(showAnOverlay(type, data))
});

export default Landing;

const Main = styled.div`
  width: 100%;
`;
