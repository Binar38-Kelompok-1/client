import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../pages/login";
import { MemoryRouter } from "react-router-dom";

describe("Login Component", () => {
  it("renders login form correctly", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Check if essential elements are rendered
    expect(
      screen.getByText("Aplikasi Laporan Masyarakat Depok")
    ).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("NIK")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Masuk")).toBeInTheDocument();
    expect(screen.getByText("Petugas login")).toBeInTheDocument();
  });
});
