import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Link } from "react-router-dom";
import { createMemoryHistory } from "history";

test("There are test-cases that check whether the page loads successfuly", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test("there is a test that tests whether there is a button for Characters", () => {
  render(<App />);
  const btn = screen.getByText("Characters");
  expect(btn).toBeVisible();
});

test("there is a test that tests whether there is a button for Locations", () => {
  render(<App />);
  const btn = screen.getByText("Locations");
  expect(btn).toBeVisible();
});

// test("routes to a new route", () => {
//   const history = createMemoryHistory();
//   history.push = jest.fn();

//   const { getByText } = render(
//     <MemoryRouter history={history}>
//       <Link to="/characters">Characters</Link>
//     </MemoryRouter>
//   );

//   fireEvent.click(getByText("Characters"));
//   expect(history.push).toHaveBeenCalledWith("/characters");
// });
