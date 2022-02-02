import { GridCard } from "../Characters/Characters.styles";
import styled from "styled-components";

export const Background = styled.img`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const GridContainerLoc = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`;

export const LocationCard = styled(GridCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5rem;
  position: absolute;
  border: 2px solid red;
`;
