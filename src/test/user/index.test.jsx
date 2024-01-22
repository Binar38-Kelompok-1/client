import React from "react";
import { render, screen } from "@testing-library/react";
import UserIndex from "../../pages/user/index";

describe("UserIndex Component", () => {
  it("renders welcome message", () => {
    render(<UserIndex />);

    // Check if the welcome message is rendered
    expect(screen.getByText("Selamat Datang, Nama User!")).toBeInTheDocument();
  });
});
