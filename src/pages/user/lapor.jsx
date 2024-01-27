import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Lapor = () => {
  const navigate = useNavigate();
  const [isiLaporan, setIsiLaporan] = useState("");
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch the token from cookie
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const formData = new FormData();
      formData.append("isi_laporan", isiLaporan);

      // Append selected files to formData
      if (selectedFiles) {
        for (const file of selectedFiles) {
          formData.append("foto", file);
        }
      }

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
            required
          ></textarea>
          <input
            className="file mb-2"
            type="file"
            id="foto"
            name="foto"
            onChange={handleFileChange}
            multiple
            required
          />
          <div className="d-flex justify-content-between w-25">
            <button
              className="btn btn-danger"
              style={{ width: "23%" }}
              onClick={() => navigate("/user")}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
            <button className="btn btn-success w-75" type="submit">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Lapor;
