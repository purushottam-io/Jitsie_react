import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import im1 from "../assets/cm1.png";
import im2 from "../assets/cm2.png";

import im3 from "../assets/cm3.png";

import im4 from "../assets/cm4.png";

import im5 from "../assets/cm5.png";

const MainContainer = styled.div`
  //   border: 1px solid white;
  margin: 5% 10%;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 2.5em;
    text-align: center;
  }

  @media (max-width: 1250px) {
    h1 {
      font-size: 1.5em;
      margin: 1em;
    }
  }
`;

const MarqueeContainer = styled.div`
  //   border: 1px solid white;
  width: 50%;
  margin: 1em auto;
  padding: 2em;

  img {
    // border: 1px solid white;
    margin: 0 3em;
  }

  @media (max-width: 1650px) {
    width: 70%;
  }

  @media (max-width: 1250px) {
    width: 80%;
  }

  @media (max-width: 850px) {
    width: 95%;
  }
`;

const Partner = () => {
  return (
    <MainContainer>
      <h1>Partnered Companies</h1>
      <MarqueeContainer>
        <Marquee>
          <img src={im1} alt="" />
          <img src={im2} alt="" />

          <img src={im3} alt="" />

          <img src={im4} alt="" />

          <img src={im5} alt="" />
        </Marquee>
      </MarqueeContainer>
    </MainContainer>
  );
};

export default Partner;
