import CharacterCard from "./CharacterCard";
import { useCharacter } from "../../api/useData";
import { useParams } from "react-router-dom";

const CharacterDataDisplay = () => {
    const { id } = useParams();
    const character = useCharacter(id);
    console.log(character);

    return (
        <div>
            <CharacterCard
                name={character?.name}
                status={character?.status}
                species={character?.species}
                type={character?.type}
                gender={character?.gender}
                orgName={character?.origin?.name}
                locName={character?.location?.name}
                img={character?.image}
            />
        </div>
    );
};

export default CharacterDataDisplay;
