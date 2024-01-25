import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    nik: "",
    nama: "",
    password: "",
    no_telp: "",
    alamat: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://54.225.11.99/register", formData);
      navigate("/");
      console.log("berhasil");

      // Assuming your API response structure is similar to the provided example
      //   if (response.data.token) {
      //     console.log("Login successful");
      //     console.log("authorization:", response.data.token);
      //     document.cookie = `authorization=${response.data.token}; path=/;`;

      //     // cookie.set("authorization", response.data.token, {
      //     //   httpOnly: true,
      //     //   secure: false,
      //     // });

      //     // Handle successful login, such as storing the token in state or localStorage
      //   } else {
      //     console.log("Login failed");
      //     // Handle login failure, show error message, etc.
      //   }
    } catch (error) {
      console.error("An error occurred during register:", error.message);
      // Handle error, show error message, etc.
    }
  };

  return (
    <h1>
      <style>
        {`
                    .title {
                        background-color: #2E3691;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        color: white;
                        font-weight: 800;
                    }
            
                    .form-control {
                        margin-bottom: -10px !important;
                        border-radius: 10px;
                    }
            
                    .d-flex {
                        margin-top: -25px;
                    }
            
                    .div-form {
                        background-color: #2E3691;
                        border-radius: 20px;
                        padding-top: 10px;
                        padding-bottom: 10px;
                    }
            
                    .btn {
                        border-radius: 10px;
                    }
            
                    .msg-btn-err {
                        text-decoration: none;
                        color: red;
                        position: absolute;
                        font-size: 10px;
                        margin-top: -73px;
                        margin-left: 145px;
                    }
            
                    .reg {
                        font-weight: 600;
                    }
                `}
      </style>
      <center>
        <h1 className="mt-3 title">Aplikasi Laporan Masyarakat Depok</h1> <br />
        <h1 className="reg">Register</h1>
        {/* <% if (typeof errors !== 'undefined') { %>
                    <div className="alert alert-danger w-25">
                        <% errors.forEach(el => { %>
                            <p style="color: red;"><i className="fa-solid fa-circle-exclamation"></i> <%= el.message %></p>
                        <% }) %>
                    </div>
                <% } %> */}
        <div className="container w-25 div-form">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="number"
              id="nik"
              name="nik"
              placeholder="NIK"
              value={formData.nik}
              onChange={handleInputChange}
              required
            />{" "}
            <br />
            <input
              className="form-control"
              type="text"
              id="nama"
              name="nama"
              placeholder="Nama Lengkap"
              value={formData.nama}
              onChange={handleInputChange}
              required
            />{" "}
            <br />
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />{" "}
            <br />
            <input
              className="form-control"
              type="number"
              id="no_telp"
              name="no_telp"
              placeholder="08XXXXXXXXXX"
              value={formData.no_telp}
              onChange={handleInputChange}
              required
            />{" "}
            <br />
            <input
              className="form-control"
              type="text"
              id="alamat"
              name="alamat"
              placeholder="Alamat"
              value={formData.alamat}
              onChange={handleInputChange}
              required
            />{" "}
            <br /> <br />
            <div className="d-flex justify-content-between">
              <a
                onClick={() => navigate("/")}
                className="btn btn-danger"
                style={{ width: "23%" }}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
              </a>
              <button className="btn btn-success w-75" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </center>
    </h1>
  );
};

export default Register;
