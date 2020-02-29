import React, { Component } from "react";
import styled from "styled-components";

// import { Link } from 'react-router-dom'

class TopSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Main>
        <Left>
          <LeftTextDiv>
            <H1>A better</H1>
            <H1>conversation.</H1>
            <br />
            <H2>Learning your language in</H2>
            <H2>a great and funny way</H2>
          </LeftTextDiv>

          <HoveringThing
            src={require("../../assets/landing/hoveringthing.png")}
          />
        </Left>

        <Right>
          <Mockups src={require("../../assets/landing/app-mockups.jpg")} />
        </Right>
      </Main>
    );
  }
}

export default TopSplash;

const Main = styled.div`
  height: 100vh;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;

  @media (max-width: 800px) {
    justify-content: flex-end;
  }

  @media (max-width: 700px) {
  }
`;

const LeftTextDiv = styled.div`
  max-width: 90%;

  @media (max-width: 800px) {
    max-width: 100%;
    padding-bottom: 30px;
    p {
      text-align: center;
    }
  }
`;

const H1 = styled.p`
  font-weight: 700;
  margin: 0px 0;
  font-size: 52px;

  @media (max-width: 800px) {
    font-size: 40px;
  }
`;

const H2 = styled.p`
  font-size: 20px;
  margin: 4px 0;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const HoveringThing = styled.img`
  position: absolute;
  bottom: 10vh;
  animation: slide 3s ease-in-out infinite;
  max-width: 30px;

  @keyframes slide {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Mockups = styled.img`
  width: 100%;

  @media (max-width: 800px) {
    width: 70%;
    display: block;
    margin: auto;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 20px;
  }
`;
