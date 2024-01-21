import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginPetugas from "../pages/login-petugas";

describe("LoginPetugas Component", () => {
  it("renders login form correctly", () => {
    render(
      <MemoryRouter>
        <LoginPetugas />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Aplikasi Laporan Masyarakat Depok")
    ).toBeInTheDocument();
    expect(screen.getByText("Login Petugas")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Masuk")).toBeInTheDocument();
  });

  it("handles form submission", () => {
    render(
      <MemoryRouter>
        <LoginPetugas />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Username"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "testPassword" },
    });

    fireEvent.click(screen.getByText("Masuk"));
  });
});
