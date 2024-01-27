import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminRiwayat = () => {
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
        url: "http://54.225.11.99/admin/riwayat",
        withCredentials: true,
        headers: {
          Authorization: ` ${token}`,
        },
      });
      setRiwayatLaporan(data.data.balasan);
      console.log("debug riwayat:", data.data.balasan);
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
                        text-align: center;
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
                
                    table {
                        text-align: center;
                    }
                `}
      </style>

      {!riwayatLaporan.length && (
        <h1 className="text-center nodata">
          Belum Ada Laporan yang Anda Balas
        </h1>
      )}

      <h1 className="title text-center">Laporan yang Anda Balas</h1>

      <table className="table" id="example">
        <thead>
          <tr>
            <th className="top-left">#</th>
            <th>NIK</th>
            <th>Nama</th>
            <th>Tanggal Masuk</th>
            <th>Tanggal Dibalas</th>
            <th className="top-right">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {riwayatLaporan.map((row, i) => (
            <tr key={i}>
              <td scope="row">{i + 1}</td>
              <td>{row.nik}</td>
              <td>{row.nama}</td>
              <td>
                {new Date(row.tgl_laporan).toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
              </td>
              <td>
                {new Date(row.tgl_balasan).toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
              </td>
              <td>
                <Link
                  to={`/admin/riwayat/${row.id_laporan}`}
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
          <th>NIK</th>
          <th>Nama</th>
          <th>Tanggal Masuk</th>
          <th>Tanggal Dibalas</th>
          <th className="bottom-right">Aksi</th>
        </tfoot>
      </table>
    </>
  );
};

export default AdminRiwayat;
