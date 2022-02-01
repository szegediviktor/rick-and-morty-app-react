import React from "react";
import { useLocations } from "../../api/useData";
import { useState } from "react";
import { GridContainer, GridCard } from "../Characters/Characters.styles";
import { LocationCard } from "./Locations.styles";

const Locations = () => {
  const [page, setPage] = useState(1);
  const locations = useLocations(page);

  return (
    <GridContainer>
      {locations.results?.map((locations) => {
        return (
          <LocationCard key={locations.id}>
            <h3>{locations.name}</h3>
            <p>{locations.type}</p>
          </LocationCard>
        );
      })}
    </GridContainer>
  );
};

export default Locations;
