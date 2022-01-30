import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/characters">Characters</Link>
      <Link to="/locations"> Locations</Link>
    </div>
  );
};

export default Home;
