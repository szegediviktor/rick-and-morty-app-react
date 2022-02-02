import React from "react";
import { useLocations } from "../../api/useData";
import { useState } from "react";
import { GridContainer } from "../Characters/Characters.styles";
import { LocationCard, Background } from "./Locations.styles";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import CandyBackground from "../../images/candymountain.jpg";

const Locations = () => {
  const [pageNum, setPageNum] = useState(1);
  const locations = useLocations(pageNum);

  return (
    <>
      <Background src={CandyBackground} />
      <GridContainer>
        {locations.results?.map((locations) => {
          return (
            <Link key={locations.id} to={`/location/${locations.id}`}>
              <LocationCard>
                <h3>{locations.name}</h3>
                <p>{locations.type}</p>
              </LocationCard>
            </Link>
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
