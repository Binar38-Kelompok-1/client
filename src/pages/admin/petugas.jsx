import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Make sure to install react-router-dom if not installed already

const Petugas = () => {
  const [petugasData, setPetugasData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        const response = await axios.get("http://54.225.11.99/admin/petugas", {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        });

        setPetugasData(response.data.findAdmin);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  return (
    <>
      <style>
        {`
          .title {
              font-size: 35px;
              font-weight: 600;
              margin-top: 20px;
          }

          .nodata {
              margin-top: 20%;
          }

          th {
              background-color: #2E3691 !important;
              text-align: center !important;
              color: white !important;
          }

          .top-left {
              border-top-left-radius: 20px;
          }
          .top-right {
              border-top-right-radius: 20px;
          }
          .bottom-left {
              border-bottom-left-radius: 20px;
          }
          .bottom-right {
              border-bottom-right-radius: 20px;
          }
        `}
      </style>

      <div className="d-flex justify-content-between align-items-center">
        <h1 className="title">Daftar Petugas</h1>
        <Link to="/admin/petugas/tambah" className="btn btn-success">
          <i className="fa-solid fa-user-plus"></i> Tambah Petugas
        </Link>
      </div>

      {/* Add your message alert here if needed */}
      {/* <% if (message.length > 0) { %>
          <p className="alert alert-success w-100 text-center" style={{ color: "green" }}>{message}</p>
      <% } %> */}

      {petugasData.length === 0 ? (
        <h1 className="text-center nodata">Tidak Ada Petugas Lain!</h1>
      ) : (
        <table className="table text-center" id="example">
          <thead>
            <tr>
              <th className="top-left">#</th>
              <th>Username</th>
              <th>Nama</th>
              <th>No. Telp</th>
              <th>Alamat</th>
              <th className="top-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {petugasData.map((el, index) => (
              <tr key={el.id}>
                <td>{index + 1}</td>
                <td>{el.username}</td>
                <td>{el.nama}</td>
                <td>{el.no_telp}</td>
                <td>{el.alamat}</td>
                <td>
                  <Link
                    to={`/admin/petugas/${el.id}`}
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="bottom-left">#</th>
              <th>Username</th>
              <th>Nama</th>
              <th>No. Telp</th>
              <th>Alamat</th>
              <th className="bottom-right">Aksi</th>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};

export default Petugas;
