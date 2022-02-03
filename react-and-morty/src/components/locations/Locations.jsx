import React from "react";
import { useLocations } from "../../api/useData";
import { useState } from "react";
import { LocationCard, Container, GridContainerLoc } from "./Locations.styles";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import { Title } from "../Characters/Characters.styles";

const Locations = () => {
  const [pageNum, setPageNum] = useState(1);
  const locations = useLocations(pageNum);

  return (
    <Container>
      <Link to="/" className="backButton">
        Back
      </Link>
      <Title>Locations</Title>
      <Pagination
        total={7}
        current={pageNum}
        perPage={18}
        onChange={({ current }) => setPageNum(current)}
      />
      <GridContainerLoc>
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
      </GridContainerLoc>
      <Pagination
        total={7}
        current={pageNum}
        perPage={18}
        onChange={({ current }) => setPageNum(current)}
      />
    </Container>
  );
};

export default Locations;
