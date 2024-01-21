import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const UserRiwayatDetail = () => {
  const [searchParams] = useSearchParams("");
  const [detailLaporan, setDetailLaporan] = useState({});
  const componentRef = useRef();

  const idLaporan = searchParams.get("id");

  useEffect(() => {
    handleDetailRiwayat(idLaporan);
  }, [idLaporan]);

  const handleDetailRiwayat = async (id) => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const data = await axios({
        method: "GET",
        url: `http://localhost:3000/user/riwayat/${id}`,
        withCredentials: true,
        headers: {
          Authorization: ` ${token}`,
        },
      });

      console.log("debug detail lap:", data.data.data);
      setDetailLaporan(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Print functionality
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
        <div className="card" ref={componentRef}>
          <div className="card-header text-center">Info Laporan</div>
          <div className="card-body d-flex">
            <div>
              <img src={detailLaporan.laporan?.foto} alt="" srcSet="" />
            </div>
            <div className="isi">
              <p>
                <span>Nama Pengirim: </span>
                {detailLaporan.nama}
              </p>
              <p>
                <span>NIK: </span>
                {detailLaporan.nikMasyarakat}
              </p>
              <p>
                <span>Status Laporan: </span>
                {detailLaporan.laporan?.status
                  ? "Sudah Dibalas"
                  : "Belum Dibalas"}
              </p>

              <p>
                <span>Isi Laporan: </span>
                {detailLaporan.laporan?.isi_laporan}
              </p>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>

      {detailLaporan.laporan?.status && (
        <div className="container w-75 mt-2">
          <div className="card">
            <div className="card-header text-center">Info Balasan</div>
            <div className="card-body">
              <p>
                <span>Isi Balasan: </span>
                {detailLaporan.balasan?.isi_balasan}
              </p>
              <p className="mt-1">
                <span>Dibalas Oleh: </span>
                {detailLaporan.admin}
              </p>
              <p>
                <span>No.Telp: </span>
                {detailLaporan.noTelpAdmin}
              </p>
              <p>
                <span>Alamat: </span>
                {detailLaporan.alamatAdmin}
              </p>
              <p>
                <span>Dibalas Pada: </span>
                {new Date(
                  detailLaporan.balasan?.tgl_balasan
                ).toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
              </p>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
      )}

        <div className="text-center mt-3">
          <button onClick={handlePrint} className="btn btn-primary">
            Print
        </button>
</div>
    </>
  );
};

export default UserRiwayatDetail;
