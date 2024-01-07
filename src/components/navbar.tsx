import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

interface SudoMenuProps {
  visible: boolean;
}

const NavContainer = styled.div`
  display: flex;
  // border: 1px solid white;
  justify-content: space-between;
  padding: 1em;
  max-width: 2000px;
  margin: auto;
  font-family: "Inter", sans-serif;
  position: relative;

  & .h_bar {
    // border: 1px solid white;
    display: flex;
    align-items: center;
    font-size: 1.5em;
    @media (min-width: 900px) {
      display: none;
    }
  }
`;

const SudoNavCont = styled.div`
  flex-direction: column;
`;

const NavLeft = styled.div`
  dispaly: flex;
  align-items: center;
  img {
  }

  @media (max-width: 900px) {
    img {
      widht: 100px !important;
    }
  }
`;

const NavRight = styled.div`
  // border: 1px solid white;
  display: flex;
  gap: 1em;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 500;
    // border: 1px solid white;
    padding: 1em;
  }

  button {
    border: none;
    color: white;
    background-color: #3b54c5;
    padding: 1em;
    font-weight: bold;
    text-transform: capitalize;
    border-radius: 10px;
    margin-left: 2.5em;
    letter-spacing: 1px;
  }

  @media (max-width: 900px) {
    & .Nav_tabs {
      display: none;
    }
    button {
      margin-left: 0em;
    }
  }
`;

const SudoMenu = styled.div<SudoMenuProps>`
  // border: 1px solid white;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: black;
  top: 0;
  right: 0;
  z-index: 10;
  display: ${(props) => (props.visible ? "block" : "none")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  ttransition: opacity 2s ease, transform 2s ease;
  transform: translateY(${(props) => (props.visible ? "0" : "-20px")});
  &.notshow {
    display: none;
  }

  @media (min-width: 900px) {
    display: none;
  }

  & .sudo_menu_class {
    // border: 1px solid white;
    width: 80vw;
    height: auto;
    margin: 2em auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2em;
    a {
      padding: 1em;
      text-decoration: none;
    }
  }

  i {
    position: fixed;
    top: 40px;
    right: 40px;
    font-size: 3em;
  }
`;

const Navbar = () => {
  const [sudoMenuVisible, setSudoMenuVisible] = useState(false);

  const toggleSudoMenu = () => {
    setSudoMenuVisible(!sudoMenuVisible);
  };
  return (
    <SudoNavCont>
      <NavContainer>
        <div className="h_bar" onClick={toggleSudoMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <NavLeft>
          <img src={logo} alt="" />
        </NavLeft>
        <NavRight>
          <div className="Nav_tabs">
            <Link to="./">Home </Link>
            <Link to="/">Events </Link>
            <Link to="/blogs">Blogs </Link>
            <Link to="/team">Team </Link>
            <Link to="/">Contact </Link>
          </div>
          <button>join Us</button>
        </NavRight>
      </NavContainer>

      <SudoMenu
        className={sudoMenuVisible ? "show" : "notshow"}
        visible={sudoMenuVisible}
      >
        <div className="sudo_menu_class">
          <Link to="./" onClick={toggleSudoMenu}>
            Home
          </Link>
          <Link to="/" onClick={toggleSudoMenu}>
            Events
          </Link>
          <Link to="/blogs" onClick={toggleSudoMenu}>
            Blogs
          </Link>
          <Link to="/" onClick={toggleSudoMenu}>
            Team
          </Link>
          <Link to="/" onClick={toggleSudoMenu}>
            Contact
          </Link>
        </div>
        <i className="fa-regular fa-circle-xmark" onClick={toggleSudoMenu}></i>
      </SudoMenu>
    </SudoNavCont>
  );
};

export default Navbar;
