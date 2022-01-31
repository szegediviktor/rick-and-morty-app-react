import { Wrapper, Name } from "./CharacterDisplay.styles";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div>
      <Wrapper>
        <Name></Name>
      </Wrapper>
      <Link to="/characters">Vissza</Link>
    </div>
  );
};

export default CharacterCard;
