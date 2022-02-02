import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { CharacterDisplay } from "./components/CharacterDisplay/CharacterDataDisplay";
import { LocationDataDisplay } from "./components/LocationDisplay/LocationDataDisplay";
import { Characters } from "./components/Characters/Characters";
import { Locations } from "./components/locations/Locations";
import { Pagination } from "./components/Pagination/Pagination";
import { Home } from "./components/Home";
import { MemoryRouter } from "react-router";

jest.mock("./components/CharacterDisplay/CharacterDataDisplay");
jest.mock("./components/LocationDisplay/LocationDataDisplay");
jest.mock("./components/Characters/Characters");
jest.mock("./components/locations/Locations");
jest.mock("./components/Pagination/Pagination");
jest.mock("./components/Home");

test("There are test-cases that check whether the page loads successfuly", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test("Should render Home page from route", () => {
  Home.mockImplementation(() => <div>Home</div>);
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText("Home")).toBeInTheDocument();
});
