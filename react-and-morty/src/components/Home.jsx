import React from "react";
import { Link } from "react-router-dom";
import {
    FlexWrapper,
    Background,
    ButtonContainer,
    Logo,
    Wrapper,
    Description,
} from "./Home.styles";
import logo from "../images/logo.png";

const Home = () => {
    return (
        <>
            <Background />
            <FlexWrapper>
                <Logo src={logo} />
                <Wrapper>
                    <ButtonContainer>
                        <Link className="homelink" to="/characters">
                            Characters
                        </Link>
                        <Link className="homelink" to="/locations">
                            Locations
                        </Link>
                    </ButtonContainer>
                    <Description>
                        The Rick and Morty Wiki is an unofficial collaborative
                        database for the hit [adult swim] series Rick and Morty,
                        a science-fiction, black comedy series about genius
                        inventor, Rick Sanchez, and his naive grandson, Morty
                        Smith. The American animated television show is created
                        by Justin Roiland and Dan Harmon. It premiered on
                        Cartoon Network's [adult swim] block on December 2,
                        2013.
                    </Description>
                </Wrapper>
            </FlexWrapper>
        </>
    );
};

export default Home;
