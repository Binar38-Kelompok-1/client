import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSidebar = (props) => {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");

  const logout = () => {
    if (window.confirm("Apakah Anda Ingin Logout?")) {
      document.cookie = `authorization=; path=/;`;
      navigate("/");
    }
  };

  useEffect(() => {
    handleNama();
  }, []);

  const handleNama = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const response = await axios.get("http://54.225.11.99/admin/", {
        withCredentials: true,
        headers: {
          Authorization: `${token}`,
        },
      });

      setNama(response.data.data.nama);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style>
        {`
          #wrapper {
              overflow-x: hidden;
          }

          #sidebar-wrapper {
              min-height: 100vh;
              margin-left: -15rem;
              transition: margin 0.25s ease-out;
          }

          #sidebar-wrapper .sidebar-heading {
              padding: 0.875rem 1.25rem;
              font-size: 1.2rem;
          }

          #sidebar-wrapper .list-group {
              width: 15rem;
          }

          #page-content-wrapper {
              min-width: 100vw;
          }

          body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
              margin-left: 0;
          }

          @media (min-width: 768px) {
              #sidebar-wrapper {
                  margin-left: 0;
              }
              #page-content-wrapper {
                  min-width: 0;
                  width: 100%;
              }
              body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
                  margin-left: -15rem;
              }
          }

          .sidebar-heading {
              background-color: #2E3691;
              color: white;
              text-align: center;
              font-weight: 700;
              margin-top: 20px;
              border-top: 1px solid lightgray;
              padding-top: 10px;
          }

          .list-group-item {
              font-size: 18px;
              font-weight: 500;
              color: black;
              cursor: pointer;
              padding: 0.75rem 1.25rem;
          }

          .list-group-item:hover {
              background-color: #2E3691;
              color: white;
          }

          .profil-item,
          .dasbor-item,
          .masyarakat-item,
          .petugas-item,
          .belum-item,
          .selesai-item,
          .riwayat-item,
          .logout-item {
              border-top: 0.5px solid lightgray !important;
              border-bottom: 1px solid lightgray !important;
          }

          .side-icon {
              margin-left: 20px;
              margin-right: 20px;
          }

          .profil-icon,
          .dasbor-icon,
          .masyarakat-icon,
          .petugas-icon,
          .belum-icon,
          .selesai-icon,
          .riwayat-icon,
          .logout-icon {
              margin-right: 22px;
          }
        `}
      </style>

      <div className="d-flex" id="wrapper">
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading">{`${nama}`}</div>
          <div className="list-group list-group-flush">
            <div
              onClick={() => navigate("/admin/profil")}
              className="list-group-item profil-item"
            >
              <i className="fa-solid fa-user side-icon profil-icon"></i> Profil
            </div>
            <div
              onClick={() => navigate("/admin/dasbor")}
              className="list-group-item dasbor-item"
            >
              <i className="fa-solid fa-table-columns side-icon dasbor-icon"></i>{" "}
              Dasbor
            </div>
            <div
              onClick={() => navigate("/admin/masyarakat")}
              className="list-group-item masyarakat-item"
            >
              <i className="fa-solid fa-users side-icon masyarakat-icon"></i>{" "}
              Masyarakat
            </div>
            <div
              onClick={() => navigate("/admin/petugas")}
              className="list-group-item petugas-item"
            >
              <i className="fa-solid fa-user-tie side-icon petugas-icon"></i>{" "}
              Petugas
            </div>
            <div
              onClick={() => navigate("/admin/laporan")}
              className="list-group-item belum-item"
            >
              <i className="fa-solid fa-circle-exclamation side-icon belum-icon"></i>{" "}
              Belum Dibalas
            </div>
            <div
              onClick={() => navigate("/admin/selesai")}
              className="list-group-item selesai-item"
            >
              <i className="fa-solid fa-circle-check side-icon selesai-icon"></i>{" "}
              Sudah Dibalas
            </div>
            <div
              onClick={() => navigate("/admin/riwayat")}
              className="list-group-item riwayat-item"
            >
              <i className="fa-solid fa-clock-rotate-left side-icon riwayat-icon"></i>{" "}
              Riwayat
            </div>
            <div onClick={logout} className="list-group-item logout-item">
              <i className="fa-solid fa-right-from-bracket side-icon logout-icon"></i>{" "}
              Logout
            </div>
          </div>
        </div>
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <props.body />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
