import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`;

export const GridCard = styled.div`
  border: solid 1px black;
  box-shadow: 2px 2px 2px black;

  :hover {
    transform: scale(1.03);
  }
`;
export const GridImg = styled.img`
  width: 100%;

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
