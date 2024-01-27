import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        const response = await axios.get("http://54.225.11.99/user", {
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

  return (
    <>
      <style>
        {`
                    .card-header {
                        background-color: #2E3691;
                        color: white;
                        font-size: 30px;
                        font-weight: 700;
                    }
                
                    .key {
                        font-size: 20px;
                    }
                
                    span {
                        font-weight: 600;
                    }
                
                    .card {
                        border-radius: 20px !important;
                    }
                
                    .card-header {
                        border-top-right-radius: 20px !important;
                        border-top-left-radius: 20px !important;
                    }
                
                    .card-footer {
                        border-bottom-right-radius: 20px !important;
                        border-bottom-left-radius: 20px !important;
                        background-color: #2E3691;
                    }
                
                    .btn {
                        border-radius: 10px;
                    }
                
                    .prof-cont {
                        margin-top: 80px !important;
                    }
                
                    .alert {
                        margin-bottom: -30px;
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

      <div className="container w-50 prof-cont">
        <div className="card">
          <div className="card-header text-center">Profil Anda</div>
          <div className="card-body">
            <p className="key">
              <span>NIK:</span> {userData.nik}
            </p>
            <p className="key">
              <span>Nama Lengkap:</span> {userData.nama}
            </p>
            <p className="key">
              <span>Nomor Telepon:</span> {"0" + userData.no_telp}
            </p>
            <p className="key">
              <span>Alamat:</span> {userData.alamat}
            </p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <a className="btn btn-danger" style={{ width: "19%" }} href="/user">
              <i className="fa-solid fa-right-from-bracket"></i>
            </a>
            <a
              className="btn btn-success"
              style={{ width: "39%" }}
              href="profil/edit"
            >
              <i className="fa-solid fa-pen-to-square"></i> Edit Profil
            </a>
            <a
              className="btn btn-primary"
              style={{ width: "39%" }}
              href="profil/password"
            >
              <i className="fa-solid fa-lock"></i> Ubah Password
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
