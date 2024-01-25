const Selesai = () => {
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

      <h1 className="title">Laporan yang Sudah Dibalas</h1>

      {/* <% if (data.length == 0) { %> */}
      <h1 className="text-center nodata">
        Tidak Ada Laporan yang Sudah Dibalas!
      </h1>
      {/* <% } else { %> */}
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
          {/* <% i = 0 %> */}
          {/* <% data.forEach(el => { %> */}
          <tr>
            <td>{/* <%= i+=1 %> */}</td>
            <td>{/* <%= el.nik %> */}</td>
            <td>{/* <%= el.nama %> */}</td>
            <td>
              {/* <%= el.tgl_laporan.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) %> */}
            </td>
            <td>
              <a
                className="btn btn-primary"
                href="/admin/selesai/<%= el.id_laporan %>"
              >
                <i className="fa-solid fa-circle-info"></i>
              </a>
            </td>
          </tr>
          {/* <% }); %> */}
        </tbody>
        <tfoot>
          <th className="bottom-left">#</th>
          <th>NIK</th>
          <th>Nama</th>
          <th>Tanggal Masuk</th>
          <th className="bottom-right">Aksi</th>
        </tfoot>
      </table>
      {/* <% } %> */}
    </>
  );
};

export default Selesai;
