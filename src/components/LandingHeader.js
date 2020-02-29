import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

class LandingHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollytop: false,
      mobileCloseBuffer: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = e => {
    if (window.scrollY > 20) {
      this.setState({
        scrollytop: true
      });
    } else {
      this.setState({
        scrollytop: false
      });
    }
  };

  handleClick = () => {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("is-nav-open");
    this.setState({
      mobileCloseBuffer: !this.state.mobileCloseBuffer
    });
  };

  render() {
    let userName = this.props.userName;
    let page = this.props.page;

    if (userName !== undefined && userName.includes("@")) {
      userName = userName.split("@")[0];
    }

    return (
      <Main>
        <MobileAfterScroll page={page} bg={this.state.scrollytop}>
          <Left>
            {/* <MenuBtn
              src={require('../assets/menu-btn-black.png')}
              onClick={this.handleClick}
            ></MenuBtn> */}
            <Link href={"/"}>
              <h1>Fluency Hub</h1>
            </Link>
          </Left>
        </MobileAfterScroll>
      </Main>
    );
  }
}
export default LandingHeader;

const Main = styled.div`
  z-index: 5;
  top: 0;
  left: 0;

  .is-nav-open {
    margin-right: 0;
  }
`;

const MobileAfterScroll = styled.div`
  position: fixed;
  top: ${({ page }) => (page === "landing" ? "25px" : "5px")};
  /* left: 5%; */
  left: ${({ page }) => (page === "landing" ? "5%" : "5px")};
  width: ${({ page }) => (page === "landing" ? "80%" : "calc(100% - 30px)")};
  padding: ${({ page }) => (page === "landing" ? "10px 5%" : "10px 10px")};
  /* margin: 15px 5%; */
  background-color: ${({ bg }) => (bg ? "#ffffff96" : "none")};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 701px) {
    width: ${({ page }) => (page === "landing" ? "80%" : "calc(80% - 10px)")};
    padding: ${({ page }) => (page === "landing" ? "10px 5%" : "12px 10%")};
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 15;
  height: 100vh;
  min-height: 600px;
  width: 60%;
  transition: margin-right ease-in-out 0.5s, display ease 0.5s;
  margin-right: -60%;

  @media (min-width: 701px) {
    width: 400px;
    margin-right: -400px;
  }
`;

const MobileCloseBuffer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  width: calc(100% - 400px);
  height: 100vh;
  min-height: 600px;
  background-color: transparent;

  @media (max-width: 700px) {
    width: 40%;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  text-decoration: none;
`;

const LogoImg = styled.img`
  width: ${({ landing }) => (landing ? "150px" : "100px")};
  opacity: ${({ op }) =>
    op === true || op === false ? (op ? "1" : "0.55") : "1"};
  cursor: pointer;
`;

const LogoImg2 = styled.img`
  width: ${({ landing }) => (landing ? "150px" : "100px")};
  opacity: ${({ op }) => (op ? op : "1")};
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderRight = styled.div`
  display: flex;
`;

const MenuItem = styled.p`
  cursor: pointer;
  margin: 0;
  /* font-family: 'Noto Serif', serif; */
  color: ${({ landing, scroll }) =>
    landing ? (scroll ? "#5d5d5d" : "white") : "grey"};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  /* line-height: 26px; */
  line-height: ${({ page }) => (page === "landing" ? "26px" : "18px")};
`;

const MenuBtn = styled.img`
  width: 22px;
  height: 16px;
  opacity: 0.7;
  margin-left: 10px;
  cursor: pointer;
`;

// const MenuBtnLanding = styled.img`
//   width: 28px;
//   height: 28px;
//   opacity: 0.9;
//   margin-left: 10px;
//   cursor: pointer;
// `
