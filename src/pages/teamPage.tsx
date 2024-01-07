import React from "react";
import styled from "styled-components";
import TeamCard from "../components/teamCard";

const MainContainer = styled.div`
  max-width: 2000px;
  font-family: "Inter", sans-serif;

  margin: auto;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
  }
  hr {
    color: white;
  }
`;

const ContentContainer = styled.div`
  border: 1px solid white;
  h2 {
    margin-bottom: 0;
  }

  margin: auto;
  margin-bottom: 2em;
  & .CardContainer {
    display: grid;
    gap: 2em;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

let L = [
  {
    name: "Prashant mehta",
    image: "https://picsum.photos/200/300",
    position: "CEO",
    description:
      "He is the main dev of the Ozone Labs Team who have many experinced than other dev there",
  },
];

const TeamPage = () => {
  return (
    <MainContainer>
      <h1>Our Team</h1>
      <ContentContainer>
        <h2>Web Dev.</h2>
        <hr />
        <div className="CardContainer">
          {L.map((dev: any) => (
            <TeamCard
              name={dev.name}
              imgLink={dev.image}
              desg={dev.position}
              desc={dev.description}
            />
          ))}
        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default TeamPage;
