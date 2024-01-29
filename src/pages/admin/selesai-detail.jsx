import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SelesaiDetail = () => {
  const { idLaporan } = useParams("");
  const [detailSelesai, setDetailSelesai] = useState({});

  useEffect(() => {
    handleDetailSelesai(idLaporan);
  }, []);

  const handleDetailSelesai = async (idLaporan) => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const data = await axios({
        method: "GET",
        url: `http://54.225.11.99/admin/selesai/${idLaporan}`,
        withCredentials: true,
        headers: {
          Authorization: ` ${token}`,
        },
      });

      console.log("debug detail selesai:", data.data);
      setDetailSelesai(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style>
        {`
                    .card {
                        border-radius: 20px !important;
                    }
                
                    .card-header {
                        background-color: #2E3691;
                        color: white;
                        font-size: 20px;
                        font-weight: 600;
                        border-top-left-radius: 20px !important;
                        border-top-right-radius: 20px !important;
                    }
                
                    .card-footer {
                        background-color: #2E3691;
                        color: white;
                        border-bottom-left-radius: 20px !important;
                        border-bottom-right-radius: 20px !important;
                    }
                
                    img {
                        width: 200px;
                    }
                
                    .isi {
                        margin-left: 10px;
                        font-size: 15px;
                    }
                
                    span {
                        font-weight: 600;
                    }
                `}
      </style>

      <div className="container w-75 mt-2">
        <div className="card">
          <div className="card-header text-center">Info Laporan</div>
          <div className="card-body d-flex">
            {/* <% if (typeof dataLap.foto !== 'null') { %> */}
            <div>
              <img src={detailSelesai.dataLap?.foto} alt="" srcset="" />
            </div>
            {/* <% } %> */}
            <div className="isi">
              <p>
                <span>Nama Pengirim: </span>
                {detailSelesai.dataUser?.nama}
              </p>
              <p>
                <span>NIK: </span>
                {detailSelesai.dataUser?.nik}
              </p>
              <p>
                <span>Status Laporan: </span>
                {detailSelesai.dataLap?.status
                  ? "Sudah Dibalas"
                  : "Belum Dibalas"}
                {/* <% if (dataLap.status === false) { %>
                                    Belum Dibalas
                                <% } else { %>
                                    Sudah Dibalas
                                <% } %> */}
              </p>
              <p>
                <span>Isi Laporan: </span>
                {detailSelesai.dataLap?.isi_laporan}
              </p>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>

      <div className="container w-75 mt-2">
        <div className="card">
          <div className="card-header text-center">Info Balasan</div>
          <div className="card-body">
            <p>
              <span>Isi Balasan: </span>
              {detailSelesai.dataBalas?.isi_balasan}
            </p>
            <p className="mt-5">
              <span>Dibalas Oleh: </span>
              {detailSelesai.dataAdmin?.nama}
            </p>
            <p>
              <span>No. Telp: </span>
              {"0" + detailSelesai.dataAdmin?.no_telp}
            </p>
            <p>
              <span>Alamat: </span>
              {detailSelesai.dataAdmin?.alamat}
            </p>
            <p>
              <span>Dibalas Pada: </span>
              {new Date(detailSelesai.dataBalas?.created_at).toLocaleDateString(
                "id-ID",
                {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                }
              )}
            </p>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </>
  );
};

export default SelesaiDetail;
