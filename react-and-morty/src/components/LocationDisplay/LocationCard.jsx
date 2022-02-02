import {
  Wrapper,
  Name,
  Type,
  Dimension,
  DataWrapper,
  Background,
  WholePageDiv,
} from "./LocationCard.styles";
import { Link } from "react-router-dom";
import locBackground from "../../images/location_background.png";

const LocationCard = (props) => {
  return (
    <WholePageDiv>
      <Background src={locBackground} />
      <Wrapper>
        <DataWrapper>
          <Name>
            {props.name ? "Name: " : ""}
            {props.name}
          </Name>
          <Type>
            {props.type ? "Type: " : ""}
            {props.type}
          </Type>
          <Dimension>
            {props.dimensiion ? "Dimension: " : ""}
            {props.dimension}
          </Dimension>
        </DataWrapper>
      </Wrapper>
      <Link to="/locations" className="backButton">
        Back
      </Link>
    </WholePageDiv>
  );
};

export default LocationCard;
