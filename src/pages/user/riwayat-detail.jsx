import React from 'react';

const UserRiwayatDetail = () => {
  const handlePrint = () => {
    window.print();
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
          <div className="card-header text-center">
            Info Laporan
          </div>
          <div className="card-body d-flex">
            {/* <% if (typeof dataLaporan.foto !== 'null') { %> */}
                <div>
                <img src="https://placehold.it/200" alt="Laporan Foto" />
                {/*<img src="<%= dataLaporan.foto %>" alt="" srcSet=""/>*/}
                </div>
            {/* <% } %> */}
            <div className="isi">
              <p><span>Nama Pengirim:</span> John Doe
                {/* <%= dataUser.nama %> */}
              </p>
              <p><span>NIK:</span> 123456789
                {/* <%= dataUser.nik %> */}
              </p>
              <p><span>Status Laporan:</span> 
                    {/* <% if (dataLaporan.status === false) { %> */}
                                Belum Dibalas
                    {/* <% } else { %> */}
                                Sudah Dibalas
                    {/* <% } %> */}
                </p>
              <p><span>Isi Laporan:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              {/* <%= dataLaporan.isi_laporan %> */}
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
            <p><span>Isi Balasan :</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {/* <%= dataBalasan.isi_balasan %> */}
            </p>
            <p className="mt-5"><span>Dibalas Oleh:</span> Admin User
             {/* <%= dataAdmin.nama %> */}
            </p>
            <p><span>No. Telp:</span> 123-456-7890
            {/* <%= 0+dataAdmin.no_telp %> */}
            </p>
            <p><span>Alamat:</span> 123 Main St, City
            {/* <%= dataAdmin.alamat %> */}
            </p>
            <p><span>Dibalas Pada:</span> January 21, 2024, 12:30 PM
            {/* <%= dataBalasan.tgl_balasan.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }) %> */}
            </p>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>

      {/* Print button */}
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={handlePrint}>
          Print
        </button>
      </div>
    </>
  );
};

export default UserRiwayatDetail;
