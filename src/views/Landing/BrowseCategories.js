import React, { Component } from "react";
import styled from "styled-components";

// import { Link } from "react-router-dom";

class BrowseCategories extends Component {
  render() {
    return (
      <Main>
        <Left>
          <H1>Learn what</H1>
          <H1>matters to your life.</H1>

          <H2>We give you content to learn!</H2>
        </Left>

        <Right>
          <Img src={require("../../assets/landing/browse-categories.png")} />
        </Right>
      </Main>
    );
  }
}

export default BrowseCategories;

const Main = styled.div`
  padding: 0 0%;
  padding-left: 10%;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 700px) {
    align-items: center;
    padding-right: 10%;
    padding-bottom: 7em;

    p {
      text-align: center;
    }
  }
`;

const H1 = styled.p`
  font-weight: 700;
  margin: 0px 0;
  font-size: 52px;

  @media (max-width: 1200px) {
    font-size: 44px;
  }
  @media (max-width: 1100px) {
    font-size: 40px;
  }
  @media (max-width: 1000px) {
    font-size: 36px;
  }
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

const H2 = styled.p`
  font-size: 20px;
  margin: 20px 0;
  /* margin-top: 20px; */
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

const Btn = styled.a`
  text-decoration: none;
  background-color: #7a7a7a;
  padding: 8px 25px;
  border-radius: 30px;
  border: none;
  color: white;
  margin-top: 30px;
`;

const Right = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  max-width: 400px;
  display: block;
  margin-left: auto;
  margin-right: 0;
  margin-top: -20px;
  margin-bottom: 160px;

  @media (min-width: 1100px) {
    max-width: 460px;
  }

  @media (max-width: 700px) {
    max-width: 320px;
    margin-bottom: 60px;
  }
`;
