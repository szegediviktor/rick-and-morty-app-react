import LocationCard from "./LocationCard";
import { useParams } from "react-router-dom";
import { useLocation } from "../../api/useData";

const LocationDataDisplay = () => {
    const { id } = useParams();
    const location = useLocation(id);

    return (
        <div>
            <LocationCard
                name={location?.name}
                type={location?.type}
                dimension={location?.dimension}
            />
        </div>
    );
};

export default LocationDataDisplay;
