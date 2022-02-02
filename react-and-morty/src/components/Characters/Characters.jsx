import React, { useEffect, useState } from "react";
import { GridContainer, GridImg, GridCard } from "./Characters.styles";
import { useCharacters } from "../../api/useData";
import Pagination from "../Pagination/Pagination";

const Characters = () => {
  const [pageNum, setPageNum] = useState(1);
  const characters = useCharacters(pageNum);
  console.log(characters);

  return (
    <>
      <GridContainer>
        {characters.results?.map((character) => {
          return (
            <GridCard key={character.id}>
              <GridImg src={character.image} alt="character" />
              <h3>{character.name}</h3>
              <p>{character.species}</p>
            </GridCard>
          );
        })}
      </GridContainer>
      <Pagination
        total={42}
        current={pageNum}
        perPage={20}
        onChange={({ current }) => setPageNum(current)}
      />
    </>
  );
};
// charsPerPage={charactersPerPage}
// totalChars={characters.info?.count}
// paginate={paginate}

export default Characters;
