import React from "react";
import { useCharacters, useLocations } from "./api/useData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Locations from "./components/locations/Locations";
import CharacterCard from "./components/CharacterCard";

function App() {
  const characters = useCharacters(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={<Characters charactersArray={characters.results} />}
        />
        <Route path="/locations" element={<Locations />} />
        <Route path="/character" element={<CharacterCard />} />
      </Routes>
    </Router>
  );
}

export default App;
