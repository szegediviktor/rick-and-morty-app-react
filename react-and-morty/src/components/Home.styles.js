import styled from "styled-components";

export const Background = styled.img`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-evenly;
  font-family: "Bangers", cursive;
  width: 50%;

  .HomeLink {
    width: 15rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: white;
    background-color: rgba(82, 15, 7);
    color: rgb(253, 174, 35);
    border-radius: 2rem;
    font-weight: bolder;
    letter-spacing: 0.2rem;
    border: 2px solid orange;
    transition: 0.5s ease-in-out;

    @media only screen and (max-width: 600px) {
      margin-bottom: 1rem;
    }

    &:hover {
      background-color: rgba(200, 25, 19);
      color: black;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  width: 50%;
  height: auto;
`;

export const DescWrapper = styled.div`
  color: rgba(82, 15, 7);
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: justify;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  letter-spacing: 0.1rem;
`;
