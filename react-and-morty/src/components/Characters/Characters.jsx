import React, { useState } from "react";
import {
  GridContainer,
  GridImg,
  GridCard,
  Title,
  PageDiv,
} from "./Characters.styles";
import { useCharacters } from "../../api/useData";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const Characters = () => {
  const [pageNum, setPageNum] = useState(1);
  const characters = useCharacters(pageNum);

  return (
    <PageDiv>
      <Link to="/" className="backButton">
        Back
      </Link>
      <Title>Characters</Title>
      <Pagination
        total={42}
        current={pageNum}
        perPage={20}
        onChange={({ current }) => setPageNum(current)}
      />
      <GridContainer>
        {characters.results?.map((character) => {
          return (
            <Link key={character.id} to={`/character/${character.id}`}>
              <GridCard>
                <GridImg src={character.image} alt="character" />
                <h3 className="on-character-card">{character.name}</h3>
                <p className="on-character-card">{character.species}</p>
              </GridCard>
            </Link>
          );
        })}
      </GridContainer>
      <Pagination
        total={42}
        current={pageNum}
        perPage={20}
        onChange={({ current }) => setPageNum(current)}
      />
    </PageDiv>
  );
};

export default Characters;
