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
  Label,
} from "./CharacterCard.styles";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div>
      <Wrapper>
        <Name>{props.name}</Name>
      </Wrapper>
      <Link to="/characters">Vissza</Link>
    </div>
  );
};

export default CharacterCard;
