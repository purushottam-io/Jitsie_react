import React from "react";
import styled from "styled-components";

const Heading = styled.div`
  margin: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (max-width: 900px) {
    margin-top: 1em;
  }

  h1 {
    font-size: 3em;
  }

  span {
    margin: auto;
    width: 40%;
  }
`;

interface HeadingComponentProps {
  title: string;
  subTitle: string;
}

const HeadingComponent: React.FC<HeadingComponentProps> = (props) => {
  // Destructure the props for easy access
  const { title, subTitle } = props;

  return (
    <Heading>
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </Heading>
  );
};

export default HeadingComponent;
