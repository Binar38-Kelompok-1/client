import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const UserRiwayatDetail = () => {
  const [searchParams] = useSearchParams("");
  const [detailLaporan, setDetailLaporan] = useState({});

  const idLaporan = searchParams.get("id");

  useEffect(() => {
    handleDetailRiwayat(idLaporan);
  }, []);

  const handleDetailRiwayat = async (id) => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const response = await axios.get(
        `http://54.225.11.99/user/riwayat/${id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const { data } = response;
      setDetailLaporan(data.data);
    } catch (error) {
      console.log(error);
    }
  };

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
                {detailLaporan.nik}
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
                {detailLaporan.admin?.nama}
              </p>
              <p>
                <span>No.Telp: </span>
                {"0" + detailLaporan.admin?.no_telp}
              </p>
              <p>
                <span>Alamat: </span>
                {detailLaporan.admin?.alamat}
              </p>
              <p>
                <span>Dibalas Pada: </span>
                {formatDate(detailLaporan.balasan?.created_at)}
              </p>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserRiwayatDetail;
