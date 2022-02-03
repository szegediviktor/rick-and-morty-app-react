import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Pagination from "./Pagination";

test("pagination next page button", async () => {
    const goToNextPage = jest.fn();
    const goToPrevPage = jest.fn();
    const goToSelectedPage = jest.fn();

    render(<Pagination onClick={goToPrevPage} />);

    const prevButton = screen.getByText("prev");
    fireEvent.click(prevButton);

    await waitFor(() => expect(goToPrevPage).toHaveBeenCalled());

    expect(goToPrevPage).toHaveBeenCalled();
});
