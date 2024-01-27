import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nik: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://54.225.11.99/", formData);

      if (response.data.token) {
        document.cookie = `authorization=${response.data.token}; path=/;`;
      } else {
        console.log("Login failed");
      }
      navigate("/user");
    } catch (error) {
      console.error("An error occurred during login:", error.message);
    }
  };

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Poppins' !important;
          }

          .title {
            background-color: #2E3691;
            padding-top: 10px;
            padding-bottom: 10px;
            color: white;
            font-weight: 800;
          }

          .div-form {
            background-color: #2E3691;
            border-radius: 20px;
          }

          .form-control {
            border-radius: 10px;
          }

          form {
            padding-top: 10px;
          }

          button {
            border-radius: 10px !important;
          }

          .msg-btn-err,
          .msg-btn-succ {
            text-decoration: none;
            position: absolute;
            font-size: 10px;
            margin-top: -73px;
            margin-left: 145px;
          }

          .msg-btn-err {
            color: red;
          }

          .msg-btn-succ {
            color: green;
          }

          img {
            position: relative;
            width: 120px;
            height: 120px;
            margin-top: 18px;
          }

          .login {
            font-weight: 600;
          }

          .masuk,
          .disini-btn {
            background-color: #4CAF50;
            color: white;
            padding: 8px 15px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .masuk:hover,
          .disini-btn:hover {
            background-color: #45a049;
          }
        `}
      </style>

      <center>
        <h1 className="mt-3 title">Aplikasi Laporan Masyarakat Depok</h1>
        <h1 className="login">Login</h1>
        <div className="container w-25 div-form">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="form-control mb-2"
                type="number"
                id="nik"
                name="nik"
                placeholder="NIK"
                value={formData.nik}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <br />
            </div>
            <button type="submit" className="btn btn-success mb-2 w-100 masuk">
              Masuk
            </button>
          </form>
        </div>
        <br />
        <p>
          Belum punya akun? Register{" "}
          <button
            onClick={() => navigate("/register")}
            className="btn btn-primary disini-btn"
          >
            disini
          </button>
        </p>
        <p>
          Petugas login{" "}
          <button
            onClick={() => navigate("/login-petugas")}
            className="btn btn-primary disini-btn"
          >
            disini
          </button>
        </p>
        <img src="logo.png" alt="" />
      </center>
    </>
  );
};

export default Login;
