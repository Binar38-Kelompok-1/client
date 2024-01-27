import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserPassword = () => {
  const navigate = useNavigate();

  const [userOldPassword, setUserOldPassword] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [alertForm1, setAlertForm1] = useState(false);
  const [alertForm2, setAlertForm2] = useState(false);

  const getOldPassword = async (e) => {
    e.preventDefault();
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const data = await axios.post(
        "http://54.225.11.99/user/profil/password",
        { password: userOldPassword },
        {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      setUserOldPassword(data.data.data.password);
      setForm2(true);
      setAlertForm1(false);
      setForm1(false);
    } catch (error) {
      setAlertForm1(true);
      toast.error(error.response.data.message);
    }
  };

  const handleNewPassword = async (e) => {
    e.preventDefault();
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      await axios.post(
        "http://54.225.11.99/user/profil/password/baru",
        { password: userNewPassword },
        {
          withCredentials: true,
          headers: {
            Authorization: ` ${token}`,
          },
        }
      );

      navigate("/user/profil");
      toast.success("Password berhasil diubah!");
    } catch (error) {
      setAlertForm2(true);
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <style>
        {`
          .title {
            font-size: 40px;
            font-weight: 700;
            text-align: center;
          }
      
          .div-form {
            background-color: #2E3691;
            padding-top: 10px;
            padding-bottom: 10px;
            border-radius: 20px;
          }
      
          .form-control {
            border-radius: 10px;
          }
      
          .btn {
            border-radius: 10px;
          }
        `}
      </style>

      {form1 && (
        <div>
          <h1 className="title">Masukan Password Anda Saat Ini</h1>

          <div className="container w-25">
            {alertForm1 && (
              <p className="alert alert-danger" style={{ color: "red" }}>
                <i className="fa-solid fa-circle-exclamation inline-block mr-4"></i>
                Password salah!
              </p>
            )}
          </div>

          <div className="container div-form w-25 mt-4">
            <form onSubmit={getOldPassword}>
              <input
                className="form-control mb-2"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={userOldPassword}
                onChange={(e) => setUserOldPassword(e.target.value)}
                required
              />
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-danger"
                  style={{ width: "23%" }}
                  onClick={() => navigate("/user/profil")}
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
                <button className="btn btn-success w-75" type="submit">
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {form2 && (
        <div>
          <h1 className="title">Masukan Password Baru</h1>

          <div className="container w-50">
            {alertForm2 && (
              <p className="alert alert-danger" style={{ color: "red" }}>
                <i className="fa-solid fa-circle-exclamation"></i>
                Password tidak boleh sama!
              </p>
            )}
          </div>

          <div className="container div-form mt-4 w-25">
            <form onSubmit={handleNewPassword}>
              <input
                className="form-control mb-2"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={userNewPassword}
                onChange={(e) => setUserNewPassword(e.target.value)}
                required
              />
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-danger"
                  style={{ width: "23%" }}
                  onClick={() => navigate("/user/profil")}
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
                <button className="btn btn-success w-75" type="submit">
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPassword;
