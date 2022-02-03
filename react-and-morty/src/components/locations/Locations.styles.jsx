import styled from "styled-components";
import portal from "../../images/portal.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  .backButton {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1.1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    color: white;
    border-radius: 20px;
    font-weight: normal;
    transition: all 0.5s ease;
    border: white solid 1px;
    &:hover {
      background-color: rgba(0, 0, 0, 1);
      border-radius: 10px;
      font-weight: bold;
    }
  }
`;

export const LocationCard = styled.div`
  border: solid 1px black;
  border-radius: 5px;
  box-shadow: 2px 2px 2px black;
  text-align: center;
  text-decoration: none !important;

  :hover {
    transform: scale(1.03);
  }

  border-radius: 50%;
  height: 9rem;
  width: 9rem;
  font-family: "Montserrat", sans-serif;
  color: black;
  background: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
  margin-left: 3rem;
  padding-top: 3rem;
  font-size: 0.8rem;
  text-shadow: #20a308 1px 1px;
  font-weight: bold;
  transition: 0.5s ease-in-out;

  &:hover {
    background-image: url(${portal});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    height: 11rem;
    width: 11rem;
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  padding: 1rem;
  text-align: center;
  font-family: "Bangers", cursive;
  letter-spacing: 0.2rem;
  font-size: xxx-large;
  color: rgba(200, 25, 19);
  text-shadow: white 1px 1px;
`;

export const GridContainerLoc = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 0.5rem;
  margin-bottom: 2rem;
`;
