import React from 'react';

const UserRiwayat = () => {
  const data = []; // Replace with your actual data

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Riwayat Laporan</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('@media print { #example tbody, #example tfoot { display: none; } }');
    printWindow.document.write('</style></head><body>');
    printWindow.document.write('<h1 style="text-align: center; font-size: 50px; font-weight: 700;">Riwayat Laporan</h1>');

    // Printing specific data
    data.forEach((el, index) => {
      printWindow.document.write('<p>');
      printWindow.document.write(`Tanggal Dibuat: ${el.tgl_laporan.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}`);
      printWindow.document.write('</p>');
      printWindow.document.write(`<p>Status: ${el.status ? 'Sudah Dibalas' : 'Belum Dibalas'}</p>`);
      printWindow.document.write('<hr />');
    });

    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
       <style>
                {`
                    .title {
                        text-align: center;
                        font-size: 50px;
                        font-weight: 700;
                    }
                
                    .nodata {
                        margin-top: 20%;
                    }
                
                    th {
                        background-color: #2E3691 !important;
                        color: white !important;
                        font-size: 15px;
                        text-align: center !important;
                    }
                
                    table {
                        align-self: center;
                        text-align: center;
                    }
                
                    .top-left {
                        border-top-left-radius: 10px;
                    }
                    .top-right {
                        border-top-right-radius: 10px;
                    }
                    .bottom-left {
                        border-bottom-left-radius: 10px;
                    }
                    .bottom-right {
                        border-bottom-right-radius: 10px;
                    }
                `}
            </style>

      <h1 className="title">Riwayat Laporan</h1>

      {/* Check if data length is 0 */}
      <div className="container w-100 mt-3">
        <div className="d-flex justify-content-end mb-3">
        </div>
        {/* Displaying data on the page */}
        {data.length === 0 ? (
          <h1 className="text-center nodata">Anda Belum Membuat Laporan!</h1>
        ) : null}
        {/* Your existing table */}
        <table className="table w-100" id="example">
          <thead>
            <tr>
              <th className="top-left" scope="col">#</th>
              <th scope="col">Tanggal Dibuat</th>
              <th scope="col">Status</th>
              <th className="top-right" scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
              {/* <% i = 0 %> */}
                            {/* <% data.forEach(el => { %> */}
                                <tr>
                                    <td scope="row">
                                        {/* <%= i+=1 %> */}
                                    </td>
                                    <td>
                                        {/* <%= el.tgl_laporan.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) %> */}
                                    </td>
                                    <td>
                                        {/* <% if (el.status === false) { %> */}
                                            Belum Dibalas
                                        {/* <% } else { %> */}
                                            Sudah Dibalas
                                        {/* <% } %> */}
                                    </td>
                                    <td><a className="btn btn-primary" href="/user/riwayat/<%= el.id_laporan %>"><i className="fa-solid fa-circle-info"></i></a></td>
                                </tr>
                            {/* <% }) %> */}
          </tbody>
          <tfoot>
            <tr>
              <th className="bottom-left">#</th>
              <th>Tanggal Dibuat</th>
              <th>Status</th>
              <th className="bottom-right">Aksi</th>
            </tr>
          </tfoot>
        </table>
        {/* Print button */}
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={handlePrint}>
          Print
        </button>
      </div>
      </div>
    </>
  );
};

export default UserRiwayat;
