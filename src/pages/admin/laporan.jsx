import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Laporan = () => {
  const [laporanData, setLaporanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        const response = await axios.get("http://54.225.11.99/admin/laporan", {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        });

        setLaporanData(response.data.laporan);
      } catch (error) {
        console.error("Error fetching laporan data:", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

      <h1 className="title">Laporan yang Belum Dibalas</h1>

      {loading && <p>Loading...</p>}
      {error && (
        <p
          className="alert alert-danger w-100 text-center"
          style={{ color: "red" }}
        >
          {error}
        </p>
      )}

      {laporanData.length === 0 ? (
        <h1 className="text-center nodata">
          Tidak Ada Laporan yang Belum Dibalas!
        </h1>
      ) : (
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
            {laporanData.map((el, index) => (
              <tr key={el.id_laporan}>
                <td>{index + 1}</td>
                <td>{el.id_masyarakat}</td>
                <td>{el.nama}</td>
                <td>
                  {new Date(el.created_at).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td>
                  <Link
                    to={`/admin/laporan/${el.id_laporan}`}
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </Link>
                  <Link
                    to={`/admin/laporan/${el.id_laporan}/delete`}
                    className="btn btn-danger"
                    onClick={() =>
                      window.confirm(
                        `Apakah Anda Ingin Menghapus Laporan dari ${el.nama}?`
                      )
                    }
                  >
                    <i className="fa-solid fa-trash"></i>
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
      )}
    </>
  );
};

export default Laporan;
