import React from "react";
import { render, screen } from "@testing-library/react";
import Error404 from "../pages/404";

describe("Error404 Component", () => {
  it("renders 404 page correctly", () => {
    render(<Error404 />);

    // Check if essential elements are rendered
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Halaman Tidak Ditemukan")).toBeInTheDocument();
    expect(screen.getByAltText("")).toBeInTheDocument(); // Replace with the alt text of your image

    // Optionally, you can add more specific assertions based on your component's logic.
  });
});
