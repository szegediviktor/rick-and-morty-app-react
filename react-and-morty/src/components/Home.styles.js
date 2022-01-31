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
  border: 2px solid red;
  width: 50%;

  .HomeLink {
    /* padding: 1rem 5rem; */
    width: 15rem;
    height: 3rem;
    text-align: center;

    text-decoration: none;
    color: white;
    background-color: rgba(82, 15, 7);
    color: rgb(253, 174, 35);
    border-radius: 2rem;
    font-weight: bolder;
    letter-spacing: 0.2rem;
    border: 2px solid orange;

    &:hover {
      background-color: rgba(200, 25, 19);
      color: black;
    }
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
