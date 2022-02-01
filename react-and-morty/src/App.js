import React from "react";
import { useCharacters, useLocations } from "./api/useData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Characters from "./components/Characters/Characters";
import Locations from "./components/locations/Locations";
import CharacterDataDisplay from "./components/CharacterDisplay/CharacterDataDisplay";
import LocationDataDisplay from "./components/LocationDisplay/LocationDataDisplay";

function App() {
  console.log("Characters data: ");
  console.log("Locations data: ");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/character" element={<CharacterDataDisplay />} />
        <Route path="/location" element={<LocationDataDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
