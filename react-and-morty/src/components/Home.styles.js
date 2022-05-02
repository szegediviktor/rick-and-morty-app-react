import styled from "styled-components";
import background from "../images/background.jpg";

export const Background = styled.img`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
`;
export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-family: "Bangers", cursive;
    margin: 1rem auto;
    .homelink {
        width: 15rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        color: white;
        background-color: rgb(82, 15, 7);
        color: rgb(253, 174, 35);
        border-radius: 2rem;
        font-weight: bolder;
        letter-spacing: -2%;
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
    width: 80%;
    height: auto;
    margin: 0 auto;
`;

export const Wrapper = styled.div`
    color: rgb(82, 15, 7);
    display: flex;
    flex-direction: column;
`;
export const Description = styled.p`
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(6px);
    max-height: 30%;
    padding: 1.5rem;
    border-radius: 1rem;
    text-align: justify;
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
    letter-spacing: -2%;
`;
