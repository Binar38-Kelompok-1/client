import React from "react";
import { render, screen } from "@testing-library/react";
import Register from "../pages/register";
import { MemoryRouter } from "react-router-dom";

describe("Register Component", () => {
  it("renders registration form correctly", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    // Check if essential elements are rendered
    expect(
      screen.getByText("Aplikasi Laporan Masyarakat Depok")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/register/i, { selector: "h1" })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("NIK")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nama Lengkap")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("08XXXXXXXXXX")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Alamat")).toBeInTheDocument();
  });
});
