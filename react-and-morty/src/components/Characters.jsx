import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Characters = () => {
  const { characters } = useParams();

  return (
    <div>
      <Link to="/character">Character prba</Link>
    </div>
  );
};

export default Characters;
