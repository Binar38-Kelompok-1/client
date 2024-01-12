const SelesaiDetail = () => {
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
                        {/* <% if (typeof dataLap.foto !== 'null') { %> */}
                            <div>
                                <img src="<%= dataLap.foto %>" alt="" srcset=""/>
                            </div>
                        {/* <% } %> */}
                        <div className="isi">
                            <p><span>Nama Pengirim:</span>
                                {/* <%= dataUser.nama %> */}
                            </p>
                            <p><span>NIK:</span>
                                {/* <%= dataUser.nik %> */}
                            </p>
                            <p><span>Status Laporan:</span> 
                                {/* <% if (dataLap.status === false) { %>
                                    Belum Dibalas
                                <% } else { %>
                                    Sudah Dibalas
                                <% } %> */}
                            </p>
                            <p><span>Isi Laporan:</span>
                                {/* <%= dataLap.isi_laporan %> */}
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
                        <p><span>Isi Balasan :</span>
                            {/* <%= dataBalas.isi_balasan %> */}
                        </p>
                        <p className="mt-5"><span>Dibalas Oleh:</span>
                            {/* <%= dataAdmin.nama %> */}
                        </p>
                        <p><span>No. Telp:</span>
                            {/* <%= 0+dataAdmin.no_telp %> */}
                        </p>
                        <p><span>Alamat:</span>
                            {/* <%= dataAdmin.alamat %> */}
                        </p>
                        <p><span>Dibalas Pada:</span>
                            {/* <%= dataBalas.tgl_balasan.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }) %> */}
                        </p>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
        </>
    )
}

export default SelesaiDetail