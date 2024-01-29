import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Laporan = () => {
  const [unreplied, setUnreplied] = useState([]);

  useEffect(() => {
    handleUnreplied();
  }, []);

  const handleUnreplied = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const data = await axios({
        method: "GET",
        url: "http://54.225.11.99/admin/laporan",
        withCredentials: true,
        headers: {
          Authorization: ` ${token}`,
        },
      });
      setUnreplied(data.data.laporan);
      console.log("debug unreplied:", data.data.laporan);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUnreplied = async (idLaporan) => {
    try {
      if (window.confirm("Apakah Anda ingin menghapus laporan?")) {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        await axios({
          method: "GET",
          url: `http://54.225.11.99/admin/laporan/${idLaporan}/delete`,
          withCredentials: true,
          headers: {
            Authorization: ` ${token}`,
          },
        });
        toast.success("Laporan berhasil dihapus!");
        handleUnreplied();
      }
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

      {!unreplied.length && (
        <h1 className="text-center nodata">
          Tidak Ada Laporan yang Belum Dibalas!
        </h1>
      )}

      {!!unreplied.length && (
        <>
          <h1 className="title">Laporan yang Belum Dibalas</h1>
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
              {unreplied.map((row, i) => (
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
                      to={`/admin/laporan/${row.id_laporan}`}
                      className="btn btn-primary"
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteUnreplied(row.id_laporan)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}

              <tr>
                <td></td>
              </tr>
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

export default Laporan;
