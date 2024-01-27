import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const MasyarakatDetail = () => {
  const [searchParams] = useSearchParams();
  const idMasyarakat = searchParams.get("id");

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        const response = await axios.get(
          `http://54.225.11.99/admin/masyarakat/${idMasyarakat}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        console.log(response.data.data);
        setData(response.data.data.result[0]); // Assuming you want the first element of the result array
      } catch (error) {
        console.error("Error fetching masyarakat detail:", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [idMasyarakat]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
  };

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

          .prof-cont {
              margin-top: 80px !important;
          }
        `}
      </style>
      <div className="container w-75 prof-cont">
        <div className="card">
          <div className="card-header text-center">Info Masyarakat</div>
          <div className="card-body">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && data && data.id && (
              <>
                <p className="key mb-1">
                  <span>NIK:</span> {data.nik}
                </p>
                <p className="key mb-1">
                  <span>Nama Lengkap:</span> {data.nama}
                </p>
                <p className="key mb-1">
                  <span>Nomor Telepon:</span> {data.no_telp}
                </p>
                <p className="key mb-1">
                  <span>Alamat:</span> {data.alamat}
                </p>

                <p className="key mt-5">
                  <span>Waktu Dibuat:</span> {formatDate(data.updated_at)}
                </p>
                <p className="key mt-1">
                  <span>Terakhir Diubah:</span> {formatDate(data.updated_at)}
                </p>
              </>
            )}
            {!loading && !error && (!data || !data.id) && (
              <p style={{ color: "red" }}>Data not found</p>
            )}
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </>
  );
};

export default MasyarakatDetail;
