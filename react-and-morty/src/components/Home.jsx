import React from "react";
import { Link } from "react-router-dom";
import background from "../images/background.jpg";
import { Background, Wrapper, Logo } from "./Home.styles";
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
    </div>
  );
};

export default Home;
