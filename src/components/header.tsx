import styled from "styled-components";
import hImg from "../assets/head_img.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  // border: 1px solid white;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  // flex-direction:column;
  @media (max-width:900px){
    flex-direction:column-reverse;

    h1{
      text-align:center;
    }
  }

  

  & .left {
    display: flex;
    flex-direction: column;
    // border: 1px solid white;
    height:fit-content;
    margin:auto 0;

    h1 {
      margin: 0;

      font-size: 6em;
      font-weight: 800;
      text-transform: uppercase;
      text-shadow: 0px 5px 10px  white;


    }

    & .text_effect {
      font-size: 2em;
      padding: 1em 0;

      @media (max-width:900px){
        text-align:center;
      }
    
    }

    & .buttons {
      display: flex;
      justify-content: flex-start;
      gap: 4em;

      button {
        font-size: 1.5em;
        padding: 1em;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        background-color: #3b54c5;

        @media (max-width:800px){
          font-size:1em;
          padding: 0.8em;
          
        }
 }
        @media (max-width:900px){
          justify-content:center;
          
        }
      }
    }
  }

  & .right{
    img{
      width:100%;
    }
  }

  @media(max-width:1660px){
    & .left {
      h1{
      font-size:5em !important;
      }
      br{
        display:none;
      }
    }
  }

  @media (max-width:1250px){

  & .left {
    h1{
    font-size:4em !important;
    }
    
  }}

  @media (max-width:950px){

    & .left {
      h1{
      font-size:3em !important;
      }
      
    }
    
  }

  
  
`;

const HeaderBottom = styled.div`
  // border: 1px solid white;
  display: flex;
  width: fit-content;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 1.5em;
  background-color: #40484c;
  border-radius: 1em;

  @media (max-width: 550px) {
    padding: 1em;
  }

  & .element {
    display: flex;
    padding: 0 2em;
    flex-direction: column;
    text-align: center;
    @media (max-width: 550px) {
      padding: 0 1em;
    }
  }

  & .center {
    border-left: 2px solid white;
    border-right: 2px solid white;
  }

  & .up {
    font-weight: bold;
    font-size: 2em;
  }
`;

const tag = ["Incubate", "Ignite", "Innovate"];

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <div className="left">
          <h1>
            Welcome to JITSIE <br /> IITM Society
          </h1>
          <div className="text_effect">
            <span>#We_</span>
            <Typewriter
              words={tag}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <div className="buttons">
            <button>Contact Us</button>
            <Link to="/blogs">
              <button
                style={{ background: "black", border: "1px solid white" }}
              >
                Join Us
              </button>
            </Link>
          </div>
        </div>
        <div className="right">
          <img src={hImg} alt="..loading" />
        </div>
      </HeaderTop>
      <HeaderBottom>
        <div className="element">
          <span className="up">2</span>
          <span className="down">Per Incubation</span>
        </div>
        <div className="element center">
          <span className="up">5</span>
          <span className="down"> Partners</span>
        </div>
        <div className="element">
          <span className="up">20</span>
          <span className="down">StartUps</span>
        </div>
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header;
