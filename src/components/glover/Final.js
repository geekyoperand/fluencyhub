import React, { Component } from "react";
import styled from "styled-components";

class Final extends Component {
  render() {
    return (
      <Main>
        <T1>From Concern to Action</T1>
        <T2>Ready to have and speak english?</T2>
        <Btn>Get started!</Btn>
      </Main>
    );
  }
}

export default Final;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ededed;
  padding: 8em 10%;

  p,
  button {
    text-align: center;
  }
`;

const T1 = styled.p`
  color: #d0d0d0;
  font-weight: 600;
  font-size: 20px;

  @media (max-width: 700px) {
    max-width: 86%;
    font-size: 16px;
  }
`;

const T2 = styled.p`
  color: #979797;
  font-size: 34px;
  max-width: 66%;
  margin-top: 20px;

  @media (max-width: 700px) {
    max-width: 86%;
    font-size: 26px;
  }
`;

const Btn = styled.button`
  border: 1px solid grey;
  padding: 5px 30px;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 20px;
`;
