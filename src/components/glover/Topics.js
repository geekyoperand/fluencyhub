import React, { Component } from "react";
import styled from "styled-components";

class Topics extends Component {
  render() {
    return (
      <Main>
        <Left>
          <LImg src={require("../../../src/assets/mpp-glover/topics.png")} />
        </Left>

        <Right>
          <H1>Topics</H1>
          <UL>
            <LI>Waste creation</LI>
            <LI>Energy consumption</LI>
            <LI>Transportation habits</LI>
          </UL>

          <Btn>Get Started</Btn>
        </Right>
      </Main>
    );
  }
}

export default Topics;

const Main = styled.div`
  display: flex;
  padding: 8em 10%;
`;

const Left = styled.div`
  flex: 1;
`;

const LImg = styled.img`
  width: 70%;
  max-width: 360px;
  display: block;
  margin: auto;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  p,
  ul,
  li {
    text-align: right;
  }
`;

const H1 = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
`;

const UL = styled.ul`
  max-width: 80%;
`;

const LI = styled.li`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Btn = styled.button`
  border: 1px solid grey;
  padding: 5px 30px;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 20px;
`;
