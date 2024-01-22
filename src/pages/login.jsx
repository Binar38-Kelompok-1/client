import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

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
      const response = await axios.post("http://localhost:3000/", formData);

      // Assuming your API response structure is similar to the provided example
      if (response.data.token) {
        console.log("Login successful");
        console.log("authorization:", response.data.token);
        document.cookie = `authorization=${response.data.token}; path=/;`;

        // cookie.set("authorization", response.data.token, {
        //   httpOnly: true,
        //   secure: false,
        // });

        // Handle successful login, such as storing the token in state or localStorage
      } else {
        console.log("Login failed");
        // Handle login failure, show error message, etc.
      }
      navigate("/user/");
    } catch (error) {
      console.error("An error occurred during login:", error.message);
      // Handle error, show error message, etc.
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
    
                    .msg-btn-err {
                        text-decoration: none;
                        color: red;
                        position: absolute;
                        font-size: 10px;
                        margin-top: -73px;
                        margin-left: 145px;
                    }
    
                    .msg-btn-succ {
                        text-decoration: none;
                        color: green;
                        position: absolute;
                        font-size: 10px;
                        margin-top: -73px;
                        margin-left: 145px;
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
    
                    .masuk {
                        margin-top: -15px;
                    }
                `}
      </style>

      <center>
        <h1 className="mt-3 title">Aplikasi Laporan Masyarakat Depok</h1> <br />
        <h1 className="login">Login</h1>
        {/* <% if (typeof message !== 'undefined' && message.length > 0) { %>
                    <p className="alert alert-success w-25" style="color: green;"><%= message %></p>
                    <a className="msg-btn-succ" href="/"><i className="fa-sharp fa-solid fa-xmark"></i></a>
                <% } %> */}
        {/* <% if (typeof errors !== 'undefined') { %>
                    <p className="alert alert-danger w-25" style="color: red;"><i className="fa-solid fa-circle-exclamation"></i> <%= errors[0].message %></p>
                    <a className="msg-btn-err" href="/"><i className="fa-sharp fa-solid fa-xmark"></i></a>
                <% } %> */}
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
              />{" "}
              <br />
            </div>
            <button type="submit" className="btn btn-success mb-2 w-100 masuk">
              Masuk
            </button>
          </form>
        </div>{" "}
        <br />
        <p>
          Belum punya akun? Register <a onClick={() => navigate('/register')} href="javascript:void(0)">disini</a>
        </p>
        <p>
          Petugas login <a onClick={() => navigate('/login-petugas')} href="javascript:void(0)">disini</a>
        </p>
        <img src="logo.png" alt="" />
      </center>
    </>
  );
};

export default Login;
