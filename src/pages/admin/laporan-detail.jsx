const LaporanDetail = () => {
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
                    <div className="card-header text-center">
                        Info Laporan
                    </div>
                    <div className="card-body d-flex">
                        {/* <% if (typeof dataLap[0].foto !== 'null') { %>
                            <div>
                                <img src="<%= dataLap[0].foto %>" alt="" srcset="">
                            </div>
                        <% } %> */}
                        <div className="isi">
                            <p><span>Nama Pengirim:</span>
                                {/* <%= dataUser[0].nama %> */}
                            </p>
                            <p><span>NIK:</span>
                                {/* <%= dataUser[0].nik %> */}
                            </p>
                            <p><span>Status Laporan:</span> 
                                {/* <% if (dataLap[0].status === false) { %>
                                    Belum Dibalas
                                <% } else { %>
                                    Sudah Dibalas
                                <% } %> */}
                            </p>
                            <p><span>Isi Laporan:</span>
                                {/* <%= dataLap[0].isi_laporan %> */}
                            </p>
                        </div>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>

            <div className="container w-75 mt-2">
                <div className="card">
                    <div className="card-header text-center">Balasan</div>
                    <form action="/admin/laporan/<%= dataLap[0].id_laporan %>" method="post">
                        <div className="card-body">
                            <textarea style={{height: '170px'}} name="isi_balasan" id="isi_balasan" className="form-control w-100" placeholder="Tulis Balasan Disini" required></textarea>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <a className="btn btn-danger" href="/admin/laporan"><i className="fa-solid fa-right-from-bracket"></i></a>
                            <button className="btn btn-success w-25" type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LaporanDetail