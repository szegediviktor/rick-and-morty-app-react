import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Pagination from "./Pagination";

test("pagination next page button", async () => {
  const goToNextPage = jest.fn();
  const goToPrevPage = jest.fn();
  const goToSelectedPage = jest.fn();

  render(<Pagination />);

  const prevButton = screen.getByText("prev");
  prevButton.invoke("onClick");

  expect(goToPrevPage).toHaveBeenCalled();
});
