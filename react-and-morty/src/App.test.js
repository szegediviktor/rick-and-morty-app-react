import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("There are test-cases that check whether the page loads successfuly", () => {
  const { container } = render(<App />);
  // expect(container).toMatchSnapshot();
});

// test("Should render Home page from route", () => {
//   // Home.mockImplementation(() => <div>Home</div>);
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );
//   expect(screen.getByText("Home")).toBeInTheDocument();
// });
