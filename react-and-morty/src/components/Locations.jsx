import React from "react";
import { useParams } from "react-router-dom";

const Locations = () => {
  const { locations } = useParams();

  return <div>HEllo locations</div>;
};

export default Locations;
