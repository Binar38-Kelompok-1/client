import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserPassword from "../../pages/user/password";

describe("UserPassword Component Rendering", () => {
  it("renders form1 initially", () => {
    render(
      <MemoryRouter>
        <UserPassword />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Masukan Password Anda Saat Ini")
    ).toBeInTheDocument();
    expect(screen.queryByText("Masukan Password Baru")).not.toBeInTheDocument();
  });

  it("renders form2 after updating state", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <UserPassword />
      </MemoryRouter>
    );
    screen.getByText("Masukan Password Anda Saat Ini").click();
  });
});
