import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfileEdit = () => {
  const navigate = useNavigate();

  const [nikEdit, setNikEdit] = useState("");
  const [namaLengkapEdit, setNamaLengkapEdit] = useState("");
  const [nomorTeleponEdit, setNomorTeleponEdit] = useState("");
  const [alamatEdit, setAlamatEdit] = useState("");

  useEffect(() => {
    getProfilEdit();
  }, []);

  const getProfilEdit = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const { data } = await axios.get("http://54.225.11.99/user/profil", {
        withCredentials: true,
        headers: {
          Authorization: `${token}`,
        },
      });

      setNikEdit(data.data.data.nik);
      setNamaLengkapEdit(data.data.data.nama);
      setNomorTeleponEdit(data.data.data.no_telp);
      setAlamatEdit(data.data.data.alamat);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfilEdit = async (e) => {
    e.preventDefault();
    try {
      const inputUser = {
        nik: nikEdit,
        nama: namaLengkapEdit,
        no_telp: nomorTeleponEdit,
        alamat: alamatEdit,
      };

      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      await axios.post("http://54.225.11.99/user/profil/edit", inputUser, {
        withCredentials: true,
        headers: {
          Authorization: ` ${token}`,
        },
      });

      navigate("/user/profil");
    } catch (error) {
      console.error("Error editing profile:", error);
    }
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

      <h1 className="text-center title">Edit Profil</h1>

      <div className="container w-25 div-form">
        <form onSubmit={handleProfilEdit}>
          <label htmlFor="nik">NIK</label>
          <input
            className="form-control mb-1"
            type="number"
            id="nik"
            name="nik"
            value={nikEdit}
            onChange={(e) => setNikEdit(e.target.value)}
            required
          />
          <label htmlFor="nama">Nama Lengkap</label>
          <input
            className="form-control mb-1"
            type="text"
            id="nama"
            name="nama"
            value={namaLengkapEdit}
            onChange={(e) => setNamaLengkapEdit(e.target.value)}
            required
          />
          <label htmlFor="no_telp">Nomor Telepon</label>
          <input
            className="form-control mb-1"
            type="number"
            id="no_telp"
            name="no_telp"
            value={nomorTeleponEdit}
            onChange={(e) => setNomorTeleponEdit(e.target.value)}
            required
          />
          <label htmlFor="alamat">Alamat</label>
          <input
            className="form-control mb-1"
            type="text"
            id="alamat"
            name="alamat"
            value={alamatEdit}
            onChange={(e) => setAlamatEdit(e.target.value)}
            required
          />
          <div className="d-flex justify-content-between text-center mt-2">
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
    </>
  );
};

export default UserProfileEdit;
