import React from "react";
import { useParams } from "react-router-dom";
import { GridContainer, GridImg, GridCard } from "./Characters.styles";

const Characters = (props) => {
  const { characters } = useParams();
  const { charactersArray } = props;

  return (
    <GridContainer>
      {charactersArray.map((character) => {
        return (
          <GridCard key={character.id}>
            <GridImg src={character.image} alt="character" />
            <h3>{character.name}</h3>
            <p>{character.species}</p>
          </GridCard>
        );
      })}
    </GridContainer>
  );
};

export default Characters;
