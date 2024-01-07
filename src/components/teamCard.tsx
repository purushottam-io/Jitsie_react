import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  font-family: "Inter", sans-serif;
  // border: 1px solid white;
  width: fit-content;
  padding: 2em 3em;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.8em;
  max-width: 10em;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px white;
  img {
    width: 10em;
    height: 10em;
    background: white;
    border: 4px solid white;
    border-radius: 50%;
  }

  p {
    text-align: center;
    margin: 0;
  }
`;

interface CardComponentsProps {
  name: string;
  imgLink: string;
  desg: string;
  desc: string;
}

const TeamCard: React.FC<CardComponentsProps> = (props) => {
  const { name, imgLink, desg, desc } = props;

  return (
    <CardContainer>
      <img src={imgLink} alt="../loading" />
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.5em",
          textWrap: "nowrap",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {name}
      </span>
      <span style={{ textTransform: "uppercase", fontSize: "1em" }}>
        {desg}
      </span>
      <p>{desc}</p>
    </CardContainer>
  );
};

export default TeamCard;
