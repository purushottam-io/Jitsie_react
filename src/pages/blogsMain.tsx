import React from "react";
import styled from "styled-components";
import BlogsCard from "../components/card";
import HeadingComponent from "../components/headingComponent";

const MainContainer = styled.div`
  max-width: 2000px;
  margin: auto;
  font-family: "Inter", sans-serif;
`;

const Heading = styled.div`
  margin: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 3em;
  }

  span {
    margin: auto;
    width: 50%;
  }
`;

const CardContainer = styled.div`
  width: -moz-fit-content;
  // border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  gap: 5em;
  margin: auto;
`;

const BlogMainPage = () => {
  return (
    <MainContainer>
      <HeadingComponent
        title="JITSIE Blogs"
        subTitle=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          minima? Quaerat a debitis, corrupti excepturi iure commodi impedit"
      />

      <CardContainer>
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />

        <BlogsCard />
      </CardContainer>

      <Heading>
        <h1 style={{ textTransform: "uppercase" }}>Lorem Ipsum</h1>
      </Heading>
    </MainContainer>
  );
};

export default BlogMainPage;
