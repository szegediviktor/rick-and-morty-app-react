import React, { useEffect, useState } from "react";
import { GridContainer, GridImg, GridCard } from "./Characters.styles";
import { useCharacters } from "../../api/useData";

const Characters = () => {
  const [pageNum, setPageNum] = useState(1);
  const characters = useCharacters(pageNum);

  return (
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
      <button onClick={() => setPageNum(pageNum + 1)}>+</button>
      <button onClick={() => setPageNum(pageNum - 1)}>-</button>
    </GridContainer>
  );
};

export default Characters;
