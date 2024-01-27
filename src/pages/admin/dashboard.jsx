import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [totalLaporan, setTotalLaporan] = useState(0);
  const [belumDibalas, setBelumDibalas] = useState(0);
  const [sudahDibalas, setSudahDibalas] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        const response = await axios.get("http://54.225.11.99/admin/dasbor", {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        });

        const data = response.data.data;

        setTotalLaporan(data.semua.length || 0);
        setBelumDibalas(data.belum.length || 0);
        setSudahDibalas(data.sudah.length || 0);
      } catch (error) {
        console.error("Error fetching dasbor data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <style>
        {`
          .card {
              border-radius: 20px !important;
          }

          .header1 {
              border-top-left-radius: 20px !important;
              border-top-right-radius: 20px !important;
              color: white;
              font-size: 30px;
              font-weight: 700;
          }

          .body1 {
              border-bottom-left-radius: 20px !important;
              border-bottom-right-radius: 20px !important;
              color: white;
              font-size: 50px;
              font-weight: 700;
          }

          .header2 {
              border-top-left-radius: 20px !important;
              border-top-right-radius: 20px !important;
              color: white;
              font-size: 20px;
              font-weight: 700;
          }

          .body2 {
              border-bottom-left-radius: 20px !important;
              border-bottom-right-radius: 20px !important;
              color: white;
              font-size: 50px;
              font-weight: 700;
          }
        `}
      </style>
      <div className="container con1 w-100">
        <div className="card card1 bg-warning text-center mt-2">
          <div className="card-header header1">Total Laporan Masuk</div>
          <div className="card-body body1">
            <p>{totalLaporan}</p>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <div
          className="card card2 bg-danger text-center mt-2"
          style={{ width: "49%" }}
        >
          <div className="card-header header2">Laporan Belum Dibalas</div>
          <div className="card-body body2">
            <p>{belumDibalas}</p>
          </div>
        </div>
        <div
          className="card card2 bg-success text-center mt-2"
          style={{ width: "49%" }}
        >
          <div className="card-header header2">Laporan Sudah Dibalas</div>
          <div className="card-body body2">
            <p>{sudahDibalas}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
