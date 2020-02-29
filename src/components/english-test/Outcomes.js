import React, { Component } from "react";
import styled from "styled-components";

class Outcomes extends Component {
  render() {
    return (
      <Main>
        <Left>
          <H1>Goals / Outcomes</H1>
          <UL>
            <LI>
              Defining which progressive environmental policies can be pushed
              based on your feedback/support
            </LI>
            <LI>
              We’ll share the above + more insights with you and legislators
            </LI>
          </UL>

          <Btn>Get Started</Btn>
        </Left>

        <Right>
          <RImg
            src={require("../../../src/assets/english-test/outcomes.png")}
          />
        </Right>
      </Main>
    );
  }
}

export default Outcomes;

const Main = styled.div`
  display: flex;
  background-color: #ededed;
  padding: 8em 10%;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

const Right = styled.div`
  flex: 1;
`;

const RImg = styled.img`
  width: 80%;
  margin-left: 20%;
`;
