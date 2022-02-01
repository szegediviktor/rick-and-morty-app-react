import styled from "styled-components";

export const Background = styled.img`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Wrapper = styled.div`
  border-radius: 2rem;
  width: 60%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: "Montserrat", sans-serif;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
`;
export const DataWrapper = styled.div`
  color: white;
  text-shadow: 0.2rem 1px 1px rgba(0, 0, 0, 0.7);

  place-self: center;
  height: 70%;
  line-height: 2rem;
  font-weight: bolder;
`;
export const Name = styled.h1`
  backdrop-filter: blur(0);
`;

export const Status = styled.h3``;
export const Species = styled.h3``;
export const Type = styled.h3``;
export const Gender = styled.h3``;
export const OriginName = styled.h3``;
export const LocationName = styled.h3``;
export const Image = styled.img`
  place-self: center;
  height: 80%;
  border-radius: 2px;
`;
