import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const FooterContainer = styled.div`
  max-width: 2000px;
  margin: auto;
  // border: 1px solid white;
  padding: 1em;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const FooterTop = styled.div`
  border-bottom: 0.5px solid #486284;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2em;

  & .TRight {
    // border: 1px solid white;
    display: flex;
    gap: 3em;
    @media (max-width: 1100px) {
      gap: 0;
    }
  }

  & .TLeft {
    // border: 1px solid white;
    display: flex;
    flex-direction: column;
    font-size: 1em;

    span {
      padding: 1em 0;
    }

    img {
      width: 150px;
    }

    i {
      // border: 1px solid white;
      padding: 0.4em;
      font-size: 2em;
      border-radius: 50%;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    & .TLeft {
      align-items: center;
    }

    & .TRight {
      justify-content: space-between;
    }
  }

  @media (max-width: 600px) {
    & .TRight {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const ListBlock = styled.div`
  // border: 1px solid white;
  padding: 0em 2em;
  text-transform: capitalize;

  & .Heading {
    text-decoration: underline;
    font-size: 20px;
    padding: 0 1em 0.5em 1em;
  }

  & .Items {
    font-size: 1em;
    padding: 1em;
  }

  @media (max-width: 1100px) {
    padding: 0 1.5em;
  }

  @media (max-width: 600px) {
    text-align: center;
    margin-bottom: 1em;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 0;

  & .right {
    display: flex;
    gap: 2em;
  }
`;

const FooterItems = [
  {
    name: "Company",
    items: ["About Us", "Features", "Partnership", "Bushiness Relation"],
  },
  {
    name: "Community",
    items: ["Events", "Blogs", "Podcaste", "invite a Friend"],
  },
  { name: "Social", items: ["Discord", "Instagram", "twitter", "Facebook"] },
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <div className="TLeft">
          <img src={logo} alt="" />
          <span>
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </span>
          <div className="icons">
            <Link to="/">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
        <div className="TRight">
          {FooterItems.map((Heading: any, id) => (
            <ListBlock>
              <div key={id} className="Heading">
                {Heading.name}
              </div>

              {Heading.items.map((item: any) => (
                <div className="Items">{item}</div>
              ))}
            </ListBlock>
          ))}
        </div>
      </FooterTop>
      <FooterBottom>
        <div className="left">
          <span>All rights reserved © JITSIE, IITM. | 2023</span>
        </div>
        <div className="right">
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
