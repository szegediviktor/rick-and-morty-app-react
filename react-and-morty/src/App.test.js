import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import Pagination from "./components/Pagination/Pagination";

test("There are test-cases that check whether the page loads successfuly", () => {
    const { container } = render(<App />);
    // expect(container).toMatchSnapshot();
});
