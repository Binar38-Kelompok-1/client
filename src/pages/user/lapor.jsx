import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Lapor = () => {
  const navigate = useNavigate();
  const [isiLaporan, setIsiLaporan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch the token from cookie
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const formData = new FormData(e.target);
      const response = await axios.post(
        "http://54.225.11.99/user/lapor",
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      if (response.data.message === "success") {
        navigate("/user/riwayat");
      } else {
        console.log("Laporan gagal terkirim");
      }
    } catch (error) {
      // Handle error, you might want to show an error message
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <style>
        {`
                    .title {
                        text-align: center;
                        font-size: 50px;
                        font-weight: 700;
                    }
                
                    .btn {
                        border-radius: 10px;
                    }
                
                    textarea {
                        border-radius: 20px !important;
                    }
                `}
      </style>

      <h1 className="title">Tulis Laporan</h1>

      {/* <% if (typeof message !== 'undefined') { %>
                <div className="container text-center">
                    <p className="alert alert-success" style="color: green;"><%= message %></p>
                </div>
            <% } %> */}

      <div className="container w-100">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <textarea
            style={{ height: "200px" }}
            className="form-control mb-2"
            name="isi_laporan"
            id="isi_laporan"
            placeholder="Tulis Laporan Disini"
            value={isiLaporan}
            onChange={(e) => setIsiLaporan(e.target.value)}
          ></textarea>
          <div className="d-flex justify-content-between">
            <input
              className="file"
              type="file"
              id="foto"
              name="foto"
              multiple
            />
            <div className="d-flex justify-content-between w-25">
              <a
                className="btn btn-danger"
                style={{ width: "23%" }}
                href="/user"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
              </a>
              <button className="btn btn-success w-75" type="submit">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Lapor;
