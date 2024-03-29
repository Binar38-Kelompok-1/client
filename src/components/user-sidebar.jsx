import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const UserSidebar = (props) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUserName = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        const data = await axios.get("http://54.225.11.99/user", {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserName(data.data.data.nama);
      } catch (error) {
        console.log(error);
      }
    };
    getUserName();
  }, []);

  const logout = () => {
    if (window.confirm("Apakah Anda ingin logout?")) {
      document.cookie = `authorization=; path=/;`;
      toast.success("Logout berhasil!");
      navigate("/");
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
              font-weight: 600;
              color: black;
              cursor: pointer;
              padding: 0.75rem 1.25rem;
          }

          .list-group-item:hover {
              background-color: #2E3691;
              color: white;
          }

          .profil-item {
              margin-top: 80px;
              border-top: 1px solid lightgray !important;
              border-bottom: 0.5px solid lightgray !important;
          }

          .lapor-item,
          .riwayat-item {
              border-top: 0.5px solid lightgray !important;
              border-bottom: 1px solid lightgray !important;
          }

          .logout-item {
              margin-top: 100px;
              border-top: 1px solid lightgray !important;
              border-bottom: 1px solid lightgray !important;
          }

          .side-icon {
              margin-left: 20px;
              margin-right: 20px;
          }

          .profil-icon,
          .lapor-icon,
          .riwayat-icon,
          .logout-icon {
              margin-right: 22px;
          }
        `}
      </style>

      <div className="d-flex" id="wrapper">
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom">Halo {userName}!</div>
          <div className="list-group list-group-flush">
            <div
              className="list-group-item profil-item"
              onClick={() => navigate("/user/profil")}
            >
              <i className="fa-solid fa-user side-icon profil-icon"></i> Profil
            </div>
            <div
              className="list-group-item lapor-item"
              onClick={() => navigate("/user/lapor")}
            >
              <i className="fa-solid fa-flag side-icon lapor-icon"></i> Lapor
            </div>
            <div
              className="list-group-item riwayat-item"
              onClick={() => navigate("/user/riwayat")}
            >
              <i className="fa-solid fa-clock-rotate-left side-icon riwayat-icon"></i>{" "}
              Riwayat
            </div>
            <div className="list-group-item logout-item" onClick={logout}>
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

export default UserSidebar;
