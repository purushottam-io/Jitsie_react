import React, { useState } from "react";
import styled from "styled-components";

const EventContainer = styled.div`
  margin: 2em 5%;
  // border: 1px solid white;

  @media (max-width: 1200px) {
    margin: 2em;
  }

  @media (max-width: 500px) {
    margin: 0.5em;
  }

  @media (max-width: 400px) {
    margin: 0.5em 0px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-transform: capitalize; // Corrected typo here
  font-size: 22px;
  border-bottom: 1px solid white;
  font-weight: bold;
  text-align: center;

  & .tabs {
    diaplay: flex;
    align-items: cetner;
    justify-content: center;
    padding: 1em;
    cursor: pointer;
  }

  & .active {
    border-bottom: 4px solid #3b54c5;
    color: #3b54c5;
  }

  @media (max-width: 1000px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 12px;

    &.tabs {
      padding: 0.5em;
    }
  }
`;

const ContentContainer = styled.div`
  // border: 1px solid white;
  display: flex;
  justify-content: space-between;
  margin: 3em 0;

  .left {
    width: 50%;
    display: flex;
    // border: 1px solid white;
    height: fit-content;
    margin: auto 0;

    img {
      display: flex;
      width: 100%;
      margin: auto;
      border-radius: 10px;
    }
  }

  .right {
    padding: 3em;
    // border: 1px solid white;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-direction: column;

    span {
      font-size: 1em;
    }

    button {
      margin: 2em 0;
      font-size: 1em;
      padding: 0.8em;
      font-weight: bold;
      background: black;
      border: none;
      border-radius: 10px;
      border-bottom: 2px solid #3b54c5;
    }
  }

  @media (max-width: 1000px) {
    margin: 1em 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 2em;

    & .left {
      width: 100%;
    }

    & .right {
      width: 100%;
      padding: 1em 0em;
      // border: 1px solid white;
    }
  }
`;

const tabsName = [
  "Business Sustinental",
  "START-A-THON",
  "Per Incubation",
  "Initiative",
];

const EventComponent = () => {
  const [activeTab, setActiveTab] = useState(tabsName[0]);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <EventContainer>
      <TabContainer>
        {tabsName.map((tab) => (
          <div
            key={tab}
            className={`tabs ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </TabContainer>
      <ContentContainer>
        {activeTab === "Business Sustinental" && (
          <>
            <div className="left">
              <img
                src="https://images.getimg.ai/resize?url=https%3A%2F%2Fassets.getimg.ai%2Fimages%2Fbackground-replacement.jpg&type=auto&width=256&quality=75"
                alt=""
              />
            </div>
            <div className="right">
              <h1>{activeTab}</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
              </span>
              <button>Learn More</button>
            </div>
          </>
        )}
        {activeTab === "START-A-THON" && (
          <>
            <div className="left">
              <img
                src="https://images.getimg.ai/resize?url=https%3A%2F%2Fassets.getimg.ai%2Fimages%2Fbackground-replacement.jpg&type=auto&width=256&quality=75"
                alt=""
              />
            </div>
            <div className="right">
              <h1>{activeTab}</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
              </span>
              <button>Learn More</button>
            </div>
          </>
        )}
        {activeTab === "Per Incubation" && (
          <>
            <div className="left">
              <img
                src="https://images.getimg.ai/resize?url=https%3A%2F%2Fassets.getimg.ai%2Fimages%2Fbackground-replacement.jpg&type=auto&width=256&quality=75"
                alt=""
              />
            </div>
            <div className="right">
              <h1>{activeTab}</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
              </span>
              <button>Learn More</button>
            </div>
          </>
        )}
        {activeTab === "Initiative" && (
          <>
            <div className="left">
              <img
                src="https://images.getimg.ai/resize?url=https%3A%2F%2Fassets.getimg.ai%2Fimages%2Fbackground-replacement.jpg&type=auto&width=256&quality=75"
                alt=""
              />
            </div>
            <div className="right">
              <h1>{activeTab}</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
              </span>
              <button>Learn More</button>
            </div>
          </>
        )}
      </ContentContainer>
    </EventContainer>
  );
};

export default EventComponent;
