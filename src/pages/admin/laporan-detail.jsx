import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LaporanDetail = () => {
  const navigate = useNavigate();

  const { idLaporan } = useParams("");
  const [detailLaporan, setDetailLaporan] = useState({});
  const [balasan, setBalasan] = useState("");

  useEffect(() => {
    handleDetailLaporan(idLaporan);
  }, []);

  const handleDetailLaporan = async (idLaporan) => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      const data = await axios({
        method: "GET",
        url: `http://54.225.11.99/admin/laporan/${idLaporan}`,
        withCredentials: true,
        headers: {
          Authorization: ` ${token}`,
        },
      });

      console.log("debug detail laporan:", data.data);
      setDetailLaporan(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBalasan = async (e) => {
    e.preventDefault();
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authorization="))
        .split("=")[1];

      await axios.post(
        `http://54.225.11.99/admin/laporan/${idLaporan}`,
        { isi_balasan: balasan },
        {
          withCredentials: true,
          headers: {
            Authorization: ` ${token}`,
          },
        }
      );
      navigate("/admin/laporan");
      toast.success("Laporan berhasil dibalas!");
    } catch (error) {
      toast.error("Gagal membalas laporan!");
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
                
                    textarea {
                        border-radius: 20px !important;
                    }
                `}
      </style>
      <div className="container w-75 mt-2">
        <div className="card">
          <div className="card-header text-center">Info Laporan</div>
          <div className="card-body d-flex">
            {/* <% if (typeof dataLap[0].foto !== 'null') { %> */}
            <div>
              <img src={detailLaporan.laporan?.[0]?.foto} alt="" srcset="" />
            </div>
            {/* <% } %> */}
            <div className="isi">
              <p>
                <span>Nama Pengirim: </span>
                {detailLaporan.data?.user?.nama}
              </p>
              <p>
                <span>NIK: </span>
                {detailLaporan.data?.user?.nik}
              </p>
              <p>
                <span>Status Laporan: </span>
                {detailLaporan.laporan?.status
                  ? "Sudah Dibalas"
                  : "Belum Dibalas"}
              </p>
              <p>
                <span>Isi Laporan: </span>
                {detailLaporan.laporan?.[0]?.isi_laporan}
              </p>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>

      <div className="container w-75 mt-2">
        <div className="card">
          <div className="card-header text-center">Balasan</div>
          <form
            onSubmit={handleBalasan}
            // action="/admin/laporan/<%= dataLap[0].id_laporan %>"
            // method="post"
          >
            <div className="card-body">
              <textarea
                style={{ height: "170px" }}
                name="isi_balasan"
                id="isi_balasan"
                className="form-control w-100"
                placeholder="Tulis Balasan Disini"
                value={balasan}
                onChange={(e) => setBalasan(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Link to={"/admin/laporan"}>
                <a className="btn btn-danger">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </a>
              </Link>

              <button className="btn btn-success w-25" type="submit">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LaporanDetail;
