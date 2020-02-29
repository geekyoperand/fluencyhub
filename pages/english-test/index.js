import React, { Component } from "react";
import { hot } from "react-hot-loader";

import { connect } from "react-redux";
import styled from "styled-components";

import Link from "next/link";

import LandingHeader from "../../src/components/LandingHeader";
import Outcomes from "../../src/components/glover/Outcomes";
import Topics from "../../src/components/glover/Topics";
import Final from "../../src/components/glover/Final";

class EnglishTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <LandingHeader />
        <Main>
          <Final />
        </Main>
      </>
    );
  }
}

export default hot(module)(EnglishTest);

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 67px;
`;

const Landing = styled.div`
  /* width: 100%;
  background: url(${({ bg }) => bg});
  background-size: cover; */

  /* margin: 10px; */
  min-height: 440px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${({ bg }) => bg});
  background-size: cover;
  padding: 0 10%;
  
  /* transition: opacity ease 0.3s, box-shadow ease 0.3s;
  cursor: pointer; */

  @media (max-width: 1100px) {
    min-height: 350px;
  }

`;

const H1 = styled.p`
  color: white;
  font-size: 38px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
`;

const H2 = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 20px;
  max-width: 50%;
`;

const PurpleBar = styled.div`
  width: 120px;
  height: 8px;
  border-radius: 30px;
  background-color: #f6abf5;
`;

const T1 = styled.p`
  text-align: center;
  width: 55%;
  max-width: 800px;
  margin: 8em auto;
  font-size: 17px;
  line-height: 28px;
  color: #5c5c5c;
`;

const AboutGlover = styled.div`
  background-color: rgba(163, 238, 224, 0.38);
  display: flex;
  justify-content: center;
  padding: 4em 0;
`;

const AGInner = styled.div`
  display: flex;
  align-items: center;
`;

const AGImgSection = styled.div`
  padding: 0 30px;
`;

const AGImg = styled.img`
  width: 90px;
  height: 90px;
`;

const AGContent = styled.div`
  p {
    margin: 5px 0;
  }
`;

const AGT1 = styled.p`
  color: #b5b5b5;
  font-weight: 500;
  font-size: 12px;
`;

const AGT2 = styled.p`
  color: #5c5c5c;
  font-weight: 600;
  font-size: 26px;
`;

const AGT3 = styled.p`
  color: #5c5c5c;
  font-weight: 500;
  font-size: 16px;
`;

const AGBtn = styled.button`
  background-color: #dcf9f3;
  border: 1px solid #cacaca;
  border-radius: 3px;
  font-size: 12px;
  margin-top: 5px;
  color: #7b7070;
  font-weight: 500;
  padding: 5px 10px;
`;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6em 0;
  padding-bottom: 7em;
`;

const PH1 = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 28px;
`;

const Row = styled.div`
  display: flex;
  padding: 2em 10%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  p {
    text-align: center;
  }
`;

const Right = styled(Left)`
  border-left: 1px solid #ddd;

  @media (max-width: 800px) {
    border-top: 1px solid #ddd;
    border-left: none;
  }
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const T2 = styled.p`
  font-size: 20px;
  margin: 10px 0;
  margin-top: 40px;
`;

const T3 = styled.p`
  margin: 0px 0;
`;

const Btn = styled.button`
  margin-top: 30px;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 16px;
`;
