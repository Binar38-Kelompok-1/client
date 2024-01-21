import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Lapor = () => {
  const [formLapor, setFormLapor] = useState("");
  const [setUserData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        const response = await axios.get("http://localhost:3000/user", {
          withCredentials: true,
          headers: {
            Authorization: ` ${token}`,
          },
        });

        if (response.data.message === "success") {
          setUserData(response.data.data);
        } else {
          setError("Failed to fetch user data");
        }
      } catch (error) {
        setError("An error occurred while fetching user data");
      }
    };

    fetchUserData();
  }, []);

  const Navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormLapor({
      ...formLapor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLaporan = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/user/lapor", formLapor);
      Navigate("/user/riwayat");
    } catch (error) {
      console.error("An error occurred:", error.message);
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

      <div className="container w-50 text-center">
        {error && (
          <p className="alert alert-danger mt-5" style={{ color: "red" }}>
            {error}
          </p>
        )}
      </div>

      <h1 className="title">Tulis Laporan</h1>

      {/* <% if (typeof message !== 'undefined') { %>
                <div className="container text-center">
                    <p className="alert alert-success" style="color: green;"><%= message %></p>
                </div>
            <% } %> */}

      <div className="container w-100">
        <form
          action="/user/lapor"
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmitLaporan}
        >
          <textarea
            style={{ height: "200px" }}
            className="form-control mb-2"
            name="isi_laporan"
            id="isi_laporan"
            placeholder="Tulis Laporan Disini"
            value={formLapor.lapor}
            onChange={handleInputChange}
            required
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
