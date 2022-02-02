import React from "react";
import { useLocations } from "../../api/useData";
import { useState } from "react";
import { GridContainer, GridCard } from "../Characters/Characters.styles";
import { LocationCard } from "./Locations.styles";
import Pagination from "../Pagination/Pagination";

const Locations = () => {
  const [pageNum, setPageNum] = useState(1);
  const locations = useLocations(pageNum);

  return (
    <>
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
      <Pagination
        total={7}
        current={pageNum}
        perPage={18}
        onChange={({ current }) => setPageNum(current)}
      />
    </>
  );
};

export default Locations;
