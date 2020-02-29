import React, { Component } from "react";
import styled from "styled-components";

class HowItWorks extends Component {
  render() {
    return (
      <Main>
        <H1>Let's solve english problem with this.</H1>
      </Main>
    );
  }
}

export default HowItWorks;

const Main = styled.div`
  padding: 6em 10%;
  background-color: #e8f5fe;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const H1 = styled.p`
  text-align: center;
  color: #3b064d;
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

const ImgDesktop = styled.img`
  width: 90%;
  object-fit: contain;

  @media (max-width: 700px) {
    display: none;
  }
`;

const ImgMobile = styled.img`
  /* width: 80%; */
  /* object-fit: contain; */
  max-width: 250px;
  object-fit: contain;

  @media (min-width: 701px) {
    display: none;
  }
`;
