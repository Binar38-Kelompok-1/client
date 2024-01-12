const UserRiwayat = () => {
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

            {/* <% if (data.length == 0) { %> */}
                <h1 className="text-center nodata">Anda Belum Membuat Laporan!</h1>
            {/* <% } else { %> */}
                <div className="container w-100 mt-3">
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
                            <th className="bottom-left">#</th>
                            <th>Tanggal Dibuat</th>
                            <th>Status</th>
                            <th className="bottom-right">Aksi</th>
                        </tfoot>
                    </table>
                </div>
            {/* <% } %> */}
        </>
    )
}

export default UserRiwayat