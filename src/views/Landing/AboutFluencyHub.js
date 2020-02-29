import React, { Component } from "react";
import styled from "styled-components";

class AboutFluencyHub extends Component {
  render() {
    return (
      <Main>
        <Left>
          <Img src={require("../../assets/landing/es-landing-loop.jpg")} />
        </Left>

        <Right>
          <Label2>
            You want to change it but don't want tpo deal with that which seems
            vey fruitless thing.
          </Label2>
          <T1 margintop={"25px"}>
            Fluencyhub is a platform that provides you with a great learning and
            understanding of english.
          </T1>
          <T1>Its not about who knows its about who learns.</T1>
          <GetStartedBtn onClick={() => this.props.overlay("signup-new")}>
            HAVE YOUR SAY
          </GetStartedBtn>
        </Right>
      </Main>
    );
  }
}

export default AboutFluencyHub;

const Main = styled.div`
  padding: 2em 10%;
  background-color: white;
  /* height: 100vh; */
  min-height: calc(80vh - 4em);
  display: flex;

  @media (max-width: 700px) {
    min-height: 600px;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
`;

const Label = styled.p`
  color: #8712da;
  font-size: 14px;
  font-weight: 600;
`;

const Heading1 = styled.p`
  color: #3b064d;
  font-size: 28px;
  margin: 0;
  margin-top: 25px;
  font-weight: 600;

  @media (min-width: 701px) {
    display: none;
  }
`;

const Heading2 = styled.p`
  color: #3b064d;
  font-size: 32px;
  font-weight: 600;
  margin-top: 0;

  @media (min-width: 701px) {
    display: none;
  }
`;

const Heading3 = styled.p`
  color: #3b064d;
  font-size: 32px;
  font-weight: 600;
  margin-top: 0;
  text-align: center;
  display: none;

  @media (min-width: 701px) {
    display: block;
    text-align: left;
  }
`;

const Img = styled.img`
  width: 90%;
  max-width: 380px;

  @media (min-width: 701px) {
    max-width: 440px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;

  @media (max-width: 700px) {
    padding-left: 0px;
  }
`;

const Label2 = styled.p`
  color: #ed18ef;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const T1 = styled.p`
  font-size: 15px;
  color: #3b064d;
  font-family: "Noto Serif", serif;

  @media (max-width: 700px) {
    margin: 8px 0;
    margin-top: ${({ margintop }) => (margintop ? margintop : "8px")};
    display: ${({ hide }) => (hide ? "none" : "initial")};
  }
`;

const GetStartedBtn = styled.button`
  display: none;
  margin-right: auto;
  font-size: 11px;
  border: none;
  background-color: #8105d8;
  color: white;
  padding: 9px 40px;
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: 1px;

  @media (max-width: 700px) {
    margin-top: 20px;
    margin-bottom: 80px;
  }
`;
