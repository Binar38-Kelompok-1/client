import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Make sure to install react-router-dom if not installed already

const Masyarakat = () => {
  const [masyarakatData, setMasyarakatData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        const response = await axios.get(
          "http://54.225.11.99/admin/masyarakat",
          {
            withCredentials: true,
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        setMasyarakatData(response.data.data.result);
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
      <h1 className="title">Daftar Masyarakat</h1>

      {masyarakatData.length === 0 ? (
        <h1 className="text-center nodata">Tidak ada Masyarakat!</h1>
      ) : (
        <table className="table" id="example">
          <thead>
            <tr>
              <th className="top-left">#</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>No. Telp</th>
              <th>Alamat</th>
              <th className="top-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {masyarakatData.map((el, index) => (
              <tr key={el.id}>
                <td>{index + 1}</td>
                <td>{el.nik}</td>
                <td>{el.nama}</td>
                <td>{el.no_telp}</td>
                <td>{el.alamat}</td>
                <td>
                  <Link
                    to={`/admin/masyarakat/detail?id=${el.id}`}
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </Link>
                  <Link
                    to={`/admin/masyarakat/detail?id=${el.id}/edit`}
                    className="btn btn-success"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <Link
                    to={`/admin/masyarakat/detail?id=${el.id}/delete`}
                    className="btn btn-danger"
                    onClick={() =>
                      window.confirm(`Apakah Anda Ingin Menghapus ${el.nama}?`)
                    }
                  >
                    <i className="fa-solid fa-trash"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="bottom-left">#</th>
              <th>NIK</th>
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

export default Masyarakat;
