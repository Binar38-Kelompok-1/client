const PetugasDetail = () => {
    return (
        <>
            <style>
                {`
                    .card-header {
                        background-color: #2E3691;
                        color: white;
                        font-size: 30px;
                        font-weight: 700;
                    }
                
                    .key {
                        font-size: 20px;
                    }
                
                    span {
                        font-weight: 600;
                    }
                
                    .card {
                        border-radius: 20px !important;
                    }
                
                    .card-header {
                        border-top-right-radius: 20px !important;
                        border-top-left-radius: 20px !important;
                    }
                
                    .card-footer {
                        border-bottom-right-radius: 20px !important;
                        border-bottom-left-radius: 20px !important;
                        background-color: #2E3691;
                    }
                
                    .prof-cont {
                        margin-top: 80px !important;
                    }
                `}
            </style>

            <div className="container w-75 prof-cont">
                <div className="card">
                    <div className="card-header text-center">
                        Info Petugas
                    </div>
                    <div className="card-body">
                        <p className="key mb-1"><span>Username:</span>
                            {/* <%= data[0].username %> */} Username Admin
                        </p>
                        <p className="key mb-1"><span>Nama Lengkap:</span>
                            {/* <%= data[0].nama %> */} Nama Admin
                        </p>
                        <p className="key mb-1"><span>Nomor Telepon:</span>
                            {/* <%= 0+data[0].no_telp %> */} No.Telp Admin
                        </p>
                        <p className="key mb-1"><span>Alamat:</span>
                            {/* <%= data[0].alamat %> */} Alamat Admin
                        </p>

                        <p className="key mt-5"><span>Waktu Dibuat:</span>
                            {/* <%= data[0].updated_at.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }) %> */} Waktu Dibuat
                        </p>
                        <p className="key mt-1"><span>Terakhir Diubah:</span>
                            {/* <%= data[0].updated_at.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }) %> */}
                        </p>
                    </div>
                    <div className="card-footer">
                    </div>
                </div>
            </div>
        </>
    )
}

export default PetugasDetail