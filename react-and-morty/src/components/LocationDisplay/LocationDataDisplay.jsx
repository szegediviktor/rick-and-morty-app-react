import LocationCard from "./LocationCard";

const obj = {
  id: 1,
  name: "Earth (C-137)",
  type: "Planet",
  dimension: "Dimension C-137",
  residents: [
    "https://rickandmortyapi.com/api/character/38",
    "https://rickandmortyapi.com/api/character/45",
    "https://rickandmortyapi.com/api/character/71",
  ],
  url: "https://rickandmortyapi.com/api/location/1",
  created: "2017-11-10T12:42:04.162Z",
};

const data = [obj];

const LocationDataDisplay = () => {
  return (
    <div>
      {data.map((item, i) => (
        <LocationCard
          key={item.id}
          name={item.name}
          type={item.type}
          dimension={item.dimension}
        />
      ))}
    </div>
  );
};

export default LocationDataDisplay;
