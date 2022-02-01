import {
    Wrapper,
    Name,
    Status,
    Species,
    Type,
    Gender,
    OriginName,
    LocationName,
    Image,
    DataWrapper,
    Background,
    WholePageDiv,
} from "./CharacterCard.styles";
import { Link } from "react-router-dom";
import charBackground from "../../images/character_background.png";

const CharacterCard = (props) => {
    return (
        <WholePageDiv>
            <Background src={charBackground} />
            <Wrapper>
                <DataWrapper>
                    <Name>
                        {props.name ? "Name: " : ""}
                        {props.name}
                    </Name>
                    <Status>
                        {props.status ? "Status: " : ""}
                        {props.status}
                    </Status>
                    <Species>
                        {props.species ? "Species: " : ""}
                        {props.species}
                    </Species>
                    <Type>
                        {props.type ? "Type: " : ""}
                        {props.type}
                    </Type>
                    <Gender>
                        {props.gender ? "Gender: " : ""}
                        {props.gender}
                    </Gender>
                    <OriginName>
                        {props.orgName ? "Origin: " : ""}
                        {props.orgName}
                    </OriginName>
                    <LocationName>
                        {props.locName ? "Location: " : ""}
                        {props.locName}
                    </LocationName>
                </DataWrapper>
                <Image src={props.img} />
            </Wrapper>
            <Link to="/characters" className="backButton">
                Back
            </Link>
        </WholePageDiv>
    );
};

export default CharacterCard;
