import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  // border: 1px solid white;
  justify-content: space-between;
  padding: 1em;
  max-width: 2000px;
  margin: auto;
  font-family: "Inter", sans-serif;

  & .h_bar {
    // border: 1px solid white;
    display: flex;
    align-items: center;
    font-size: 2em;
    @media (min-width: 900px) {
      display: none;
    }
  }
`;

const NavLeft = styled.div`
  dispaly: flex;
  align-items: center;
  img {
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

const Navbar = () => {
  return (
    <NavContainer>
      <div className="h_bar">
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
          <Link to="/">Team </Link>
          <Link to="/">Contact </Link>
        </div>
        <button>join Us</button>
      </NavRight>
    </NavContainer>
  );
};

export default Navbar;
