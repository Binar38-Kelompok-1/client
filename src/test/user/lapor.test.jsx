import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Lapor from "../../pages/user/lapor";

describe("Lapor Component", () => {
  it("renders the lapor page correctly", () => {
    render(
      <MemoryRouter>
        <Lapor />
      </MemoryRouter>
    );

    expect(screen.getByText("Tulis Laporan")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Tulis Laporan Disini")
    ).toBeInTheDocument();
  });
});
