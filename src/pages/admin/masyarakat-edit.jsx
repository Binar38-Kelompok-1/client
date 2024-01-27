import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MasyarakatEdit = () => {
  const { idMasyarakat } = useParams();
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        const response = await axios.get(
          `http://54.225.11.99/admin/masyarakat/${idMasyarakat}/edit`,
          {
            withCredentials: true,
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        setData(response.data.result);
      } catch (error) {
        console.error("Error fetching masyarakat data:", error);
        setErrors([{ message: "Error fetching data" }]);
      }
    };

    fetchData();
  }, [idMasyarakat]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <style>
        {`
                    .title {
                        font-size: 50px;
                        font-weight: 700;
                        text-align: center;
                    }
                
                    .div-form {
                        background-color: #2E3691;
                        padding-bottom: 10px;
                        padding-top: 10px;
                        border-radius: 20px;
                    }
                
                    label {
                        color: white;
                        font-weight: 600;
                    }
                
                    .btn {
                        border-radius: 10px;
                    }
                
                    .form-control {
                        border-radius: 10px;
                    }
                `}
      </style>
      <h1 className="title">Edit Info Masyarakat</h1>

      {errors.length > 0 && (
        <div className="container" style={{ width: "30%" }}>
          {errors.map((el, index) => (
            <p
              key={index}
              className="alert alert-danger"
              style={{ color: "red" }}
            >
              <i className="fa-solid fa-circle-exclamation"></i> {el.message}
            </p>
          ))}
        </div>
      )}

      <div className="container w-25 div-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nik">NIK</label>
          <input
            className="form-control mb-1"
            type="number"
            id="nik"
            name="nik"
            value={data[0]?.nik || ""}
            required
          />
          <label htmlFor="nama">Nama Lengkap</label>
          <input
            className="form-control mb-1"
            type="text"
            id="nama"
            name="nama"
            value={data[0]?.nama || ""}
            required
          />
          <label htmlFor="no_telp">No. Telp</label>
          <input
            className="form-control mb-1"
            type="number"
            id="no_telp"
            name="no_telp"
            value={0 + data[0]?.no_telp || ""}
            required
          />
          <label htmlFor="alamat">Alamat</label>
          <input
            className="form-control mb-1"
            type="text"
            id="alamat"
            name="alamat"
            value={data[0]?.alamat || ""}
            required
          />
          <div className="d-flex justify-content-between">
            <Link
              className="btn btn-danger"
              style={{ width: "23%" }}
              to="/admin/masyarakat"
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </Link>
            <button className="btn btn-success w-75" type="submit">
              <i className="fa-solid fa-check"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MasyarakatEdit;
