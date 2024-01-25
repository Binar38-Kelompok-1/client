import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Slide, toast } from "react-toastify";

const AdminProfileEdit = () => {
  useEffect(() => {
    getCurrentData();
  }, []);
  const navigate = useNavigate();

  const [currentData, setCurrentData] = useState({});

  const [newUsername, setNewUsername] = useState(currentData.username || "");
  const [newNama, setNewNama] = useState(currentData.nama || "");
  const [newTelp, setNewTelp] = useState(`${currentData.no_telp || ""}`);
  const [newAlamat, setNewAlamat] = useState(currentData.alamat || "");

  const handleNewUsername = (event) => {
    setNewUsername(event.target.value);
  };

  const handleNewNama = (event) => {
    setNewNama(event.target.value);
  };

  const handleNewTelp = (event) => {
    setNewTelp(event.target.value);
  };

  const handleNewAlamat = (event) => {
    setNewAlamat(event.target.value);
  };

  const getCurrentData = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const response = await axios.get(
        "http://localhost:3000/admin/profil/edit",
        {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      setCurrentData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const response = await axios.post(
        "http://localhost:3000/admin/profil/edit",
        {
          username: newUsername,
          nama: newNama,
          no_telp: newTelp,
          alamat: newAlamat,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: ` ${token}`,
          },
        }
      );

      console.log(response.data);

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

      navigate("/admin/profil");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <style>
        {`
                    .title {
                        font-size: 50px;
                        font-weight: 700;
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
      <h1 className="text-center title">Edit Profil</h1>

      {/* <% if (typeof errors !== 'undefined') { %>
                <div className="container" style="width: 30%;">
                    <% errors.forEach(el => { %>
                        <p className="alert alert-danger" style="color: red;"><i className="fa-solid fa-circle-exclamation"></i> <%= el.message %></p>
                    <% }) %>
                </div>
            <% } %> */}

      <div className="container w-25 div-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleNewUsername}
            className="form-control mb-1"
            type="text"
            id="username"
            name="username"
            value={newUsername !== "" ? newUsername : currentData.username}
            required
          />
          <label htmlFor="nama">Nama Lengkap</label>
          <input
            onChange={handleNewNama}
            className="form-control mb-1"
            type="text"
            id="nama"
            name="nama"
            value={newNama !== "" ? newNama : currentData.nama}
            required
          />
          <label htmlFor="no_telp">No. Telp</label>
          <input
            onChange={handleNewTelp}
            className="form-control mb-1"
            type="number"
            id="no_telp"
            name="no_telp"
            value={newTelp !== "" ? newTelp : `${0 + currentData.no_telp}`}
            required
          />
          <label htmlFor="alamat">Alamat</label>
          <input
            onChange={handleNewAlamat}
            className="form-control mb-1"
            type="text"
            id="alamat"
            name="alamat"
            value={newAlamat !== "" ? newAlamat : currentData.alamat}
            required
          />
          <div className="d-flex justify-content-between">
            <a
              onClick={() => navigate("/admin/profil")}
              className="btn btn-danger"
              style={{ width: "23%" }}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </a>
            <button className="btn btn-success w-75" type="submit">
              <i className="fa-solid fa-check"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminProfileEdit;
