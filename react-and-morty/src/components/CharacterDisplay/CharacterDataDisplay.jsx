import CharacterCard from "./CharacterCard";

const obj = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};
const data = [obj];
// const array = [];

// const arrayPush = () => {
//   array.push(Object.keys(obj));
//   console.log(array);
// };
// arrayPush();
const CharacterDataDisplay = () => {
  return (
    <div>
      {data.map((item, i) => (
        <CharacterCard
          key={item.id}
          name={item.name}
          status={item.status}
          species={item.species}
          type={item.type}
          gender={item.gender}
          orgName={item.origin.name}
          locName={item.location.name}
          img={item.image}
        />
      ))}
    </div>
  );
};

export default CharacterDataDisplay;
