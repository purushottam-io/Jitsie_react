import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  //   border: 1px solid white;
  background-color: #3b54c5;
  border-radius: 1em;
  padding: 3em;
  width: fit-content;
  display: flex;
  gap: 4em;
  position: relative;
  margin: auto;
  box-shadow: 0px 10px 0 -5px #14448b, 0px 20px 0 -10px #193258;

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 2em;
  }
`;

const ImageContainer = styled.div`
  img {
    border-radius: 1em;
    width: 12em;
    height: 12em;
  }

  @media (max-width: 620px) {
    img {
      width: 100%;
    }
  }
`;

const ContentContainer = styled.div`
  width: 14em;
  display: flex;
  flex-direction: column;
//   border: 1px solid white;
  height: fit-content;
  margin: auto 0;
  text-transform: capitalize;
  gap:1em;

  & .card_heading {
    font-weight: 600;
    font-size: 20px;
  }

  & .card_content {
    font-size: 14px;
  }

  button {
    font-weight: bold;
    padding:1.3em 2em;
    background-color: #242731;
    width: fit-content;
    
    border-none;
    border-radius:10px;
    border:none;
  }

  @media (max-width: 620px) {
    margin:auto;
    width:16em;
    button{
      margin: auto;
    }
  }
`;

const BlogsCard = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <img
          src="https://images.getimg.ai/resize?url=https%3A%2F%2Fassets.getimg.ai%2Fimages%2Fbackground-replacement.jpg&type=auto&width=256&quality=75"
          alt=""
        />
      </ImageContainer>
      <ContentContainer>
        <span className="card_heading">
          Artificial Intelligence For marketing
        </span>
        <span className="card_content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nulla
          sequi eligendi natus. Quam que soluta temporibus.
        </span>
        <button>Learn Now</button>
      </ContentContainer>
    </CardContainer>
  );
};

export default BlogsCard;
