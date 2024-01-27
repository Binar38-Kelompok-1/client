import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPetugas = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://54.225.11.99/login-petugas", {
        username: username,
        password: password,
      });

      if (response.data.token) {
        console.log("Login Success");
        document.cookie = `authorization=${response.data.token}; path=/;`;
        toast.success("Login Berhasil !", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
        navigate("/admin");
      } else {
        console.log("Login Failed");
      }
    } catch (error) {
      toast.error("Username atau Password Salah !", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      console.log(error);
    }
  };

  return (
    <>
      <style>
        {`
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
            padding-top: 5px;
            padding-bottom: 10px;
          }

          .form-control {
            border-radius: 10px;
            margin-bottom: -15px;
          }

          .btn {
            border-radius: 10px;
          }

          .login {
            font-weight: 600;
          }

          .msg-btn-err {
            text-decoration: none;
            color: red;
            position: absolute;
            font-size: 10px;
            margin-top: -73px;
            margin-left: 145px;
          }

          .justify-content-between {
            margin-top: -25px;
          }
        `}
      </style>
      <center>
        <h1 className="title mt-3">Aplikasi Laporan Masyarakat Depok</h1> <br />
        <h1 className="login">Login Petugas</h1>
        <div className="container w-25 div-form">
          <form onSubmit={handleSubmit} className="mt-2">
            <input
              onChange={handleUsername}
              className="form-control"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />{" "}
            <br />
            <input
              onChange={handlePassword}
              className="form-control"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />{" "}
            <br /> <br />
            <div className="d-flex justify-content-between">
              <button
                onClick={handleNavigateHome}
                className="btn btn-danger"
                style={{ width: "23%" }}
                type="button"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
              <button className="btn btn-success w-75" type="submit">
                Masuk
              </button>
            </div>
          </form>
        </div>
      </center>

      <ToastContainer />
    </>
  );
};

export default LoginPetugas;
