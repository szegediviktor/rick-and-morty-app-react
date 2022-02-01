import React from "react";
import { Link } from "react-router-dom";
import background from "../images/background.jpg";
import { Background, Wrapper, Logo, DescWrapper } from "./Home.styles";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <div>
      <Background src={background} />
      <Logo src={logo} />
      <Wrapper>
        <Link className="HomeLink" to="/characters">
          Characters
        </Link>
        <Link className="HomeLink" to="/locations">
          {" "}
          Locations
        </Link>
      </Wrapper>
      <DescWrapper>
        <p className="Desc">
          The Rick and Morty Wiki is an unofficial collaborative database for
          the hit [adult swim] series Rick and Morty, a science-fiction, black
          comedy series about genius inventor, Rick Sanchez, and his naive
          grandson, Morty Smith. The American animated television show is
          created by Justin Roiland and Dan Harmon. It premiered on Cartoon
          Network's [adult swim] block on December 2, 2013.
        </p>
      </DescWrapper>
    </div>
  );
};

export default Home;
