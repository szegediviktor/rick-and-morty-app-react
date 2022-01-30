import React from "react";
import { useParams } from "react-router-dom";

const Characters = () => {
  const { characters } = useParams();

  return <div>Hello CHaracters</div>;
};

export default Characters;
