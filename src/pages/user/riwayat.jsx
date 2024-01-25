import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserRiwayat = () => {
  const [riwayatLaporan, setRiwayatLaporan] = useState([]);

  useEffect(() => {
    handleRiwayatLaporan();
  }, []);

  const handleRiwayatLaporan = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const data = await axios({
        method: "GET",
        url: "http://54.225.11.99/user/riwayat",
        withCredentials: true,
        headers: {
          Authorization: ` ${token}`,
        },
      });
      setRiwayatLaporan(data.data.data);
      console.log("debug:", data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style>
        {`
                    .title {
                        text-align: center;
                        font-size: 50px;
                        font-weight: 700;
                    }
                
                    .nodata {
                        margin-top: 20%;
                    }
                
                    th {
                        background-color: #2E3691 !important;
                        color: white !important;
                        font-size: 15px;
                        text-align: center !important;
                    }
                
                    table {
                        align-self: center;
                        text-align: center;
                    }
                
                    .top-left {
                        border-top-left-radius: 10px;
                    }
                    .top-right {
                        border-top-right-radius: 10px;
                    }
                    .bottom-left {
                        border-bottom-left-radius: 10px;
                    }
                    .bottom-right {
                        border-bottom-right-radius: 10px;
                    }
                `}
      </style>

      <h1 className="title">Riwayat Laporan</h1>

      {!riwayatLaporan.length && (
        <h1 className="text-center nodata">Anda Belum Membuat Laporan!</h1>
      )}

      <div className="container w-100 mt-3">
        <table className="table w-100" id="example">
          <thead>
            <tr>
              <th className="top-left" scope="col">
                #
              </th>
              <th scope="col">Tanggal Dibuat</th>
              <th scope="col">Status</th>
              <th className="top-right" scope="col">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {riwayatLaporan.map((row, i) => (
              <tr key={i}>
                <td scope="row">{i + 1}</td>
                <td>
                  {new Date(row.created_at).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZoneName: "short",
                  })}
                </td>
                <td>{row.status ? "Sudah Dibalas" : "Belum Dibalas"}</td>
                <td>
                  <Link
                    to={`/user/riwayat/detail?id=${row.id_laporan}`}
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <th className="bottom-left">#</th>
            <th>Tanggal Dibuat</th>
            <th>Status</th>
            <th className="bottom-right">Aksi</th>
          </tfoot>
        </table>
      </div>
      {/* <% } %> */}
    </>
  );
};

export default UserRiwayat;
