import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Selesai = () => {
  const [replied, setReplied] = useState([]);

  useEffect(() => {
    handleReplied();
  }, []);

  const handleReplied = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const data = await axios({
        method: "GET",
        url: "http://54.225.11.99/admin/selesai",
        withCredentials: true,
        headers: {
          Authorization: ` ${token}`,
        },
      });
      setReplied(data.data.data);
      console.log("debug replied:", data.data.data);
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

      {!replied.length && (
        <h1 className="text-center nodata">
          Tidak Ada Laporan yang Sudah Dibalas!
        </h1>
      )}

      {!!replied.length && (
        <>
          <h1 className="title">Laporan yang Sudah Dibalas</h1>

          <table className="table" id="example">
            <thead>
              <tr>
                <th className="top-left">#</th>
                <th>NIK</th>
                <th>Nama</th>
                <th>Tanggal Masuk</th>
                <th className="top-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {replied.map((row, i) => (
                <tr key={i}>
                  <td scope="row">{i + 1}</td>
                  <td>{row.nik}</td>
                  <td>{row.nama}</td>
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
                  <td>
                    <Link
                      to={`/admin/selesai/${row.id_laporan}`}
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
              <th className="bottom-right">Aksi</th>
            </tfoot>
          </table>
        </>
      )}
    </>
  );
};

export default Selesai;
