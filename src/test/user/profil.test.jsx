import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "../../pages/user/profile";

describe("UserProfile Component", () => {
  it("renders user profile correctly", () => {
    render(<UserProfile />);

    // Check if essential elements are rendered
    expect(screen.getByText("Profil Anda")).toBeInTheDocument();
    expect(screen.getByText("NIK:")).toBeInTheDocument();
    expect(screen.getByText("Nama Lengkap:")).toBeInTheDocument();
    expect(screen.getByText("Nomor Telepon:")).toBeInTheDocument();
    expect(screen.getByText("Alamat:")).toBeInTheDocument();
    expect(screen.getByText("Edit Profil")).toBeInTheDocument();
    expect(screen.getByText("Ubah Password")).toBeInTheDocument();
  });
});
