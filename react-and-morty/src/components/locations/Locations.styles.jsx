import { GridCard, GridContainer } from "../Characters/Characters.styles";
import styled from "styled-components";

export const Background = styled.img`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LocationCard = styled(GridCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5rem;
  position: absolute;
`;
