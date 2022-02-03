import styled from "styled-components";

export const GridContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
`;

export const PageDiv = styled.div`
    background-color: #212121;
    font-family: "Montserrat", sans-serif;
`;

export const Title = styled.h1`
    font-family: "Bangers", cursive;
    text-align: center;
    font-weight: bold;
    font-size: 5rem;
    letter-spacing: 0.2rem;
    color: rgb(253, 174, 35);
    padding: 2rem;
`;

export const GridCard = styled.div`
    border-radius: 5px;
    text-align: center;

    width: 98%;

    display: flex;
    flex-direction: column;
    padding: 3rem;

    transition: all 0.8s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);

        width: 100%;
    }

    &:hover {
    }

    h3 {
        opacity: 0.8;
        color: rgb(255, 255, 255);
        padding: 0.5rem;
    }
    h3:hover {
        opacity: 1;
    }
    p {
        padding: 0.5rem;
        opacity: 0.8;
        color: rgb(255, 255, 255);
    }
    p:hover {
        opacity: 1;
    }
`;
export const GridImg = styled.img`
    border-radius: 10%;
`;
