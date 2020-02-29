import React, { Component } from "react";
import styled from "styled-components";

class FaceIt extends Component {
  render() {
    return (
      <Main>
        <H1>Let's face the world.</H1>
        <H2>With your great english skills.</H2>
      </Main>
    );
  }
}

export default FaceIt;

const Main = styled.div`
  padding: 20vh 10%;
  background-color: #f1f1f1;

  p {
    text-align: center;
    color: #3b064d;
  }
`;
const H1 = styled.p`
  font-size: 58px;
  font-weight: 600;
  margin: 30px 0;

  @media (max-width: 700px) {
    font-size: 44px;
    margin: 10px 0;
  }
`;

const H2 = styled.p`
  margin: 30px 0;
  font-size: 32px;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 30px;
    margin: 10px 0;
  }
`;
