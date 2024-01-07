import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import HeadingComponent from "../components/headingComponent";
import EventComponent from "../components/eventComponent";
import Partner from "../components/partner";

const MainContainer = styled.div`
  max-width: 2000px;
  // border: 1px solid white;
  padding: 1em;
  margin: 0 auto;
  font-family: "Inter", sans-serif;

  @media (max-width: 900px) {
    padding: 0;
  }
`;

const HomePage = () => {
  return (
    <MainContainer>
      <Header />
      <HeadingComponent
        title="Lorem ipsum dolor sit amet"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
      />
      <EventComponent />
      <Partner />
      <HeadingComponent
        title="Incuabated Startups"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
      />
    </MainContainer>
  );
};

export default HomePage;
