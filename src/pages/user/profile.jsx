const UserProfile = () => {
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
                
                    .btn {
                        border-radius: 10px;
                    }
                
                    .prof-cont {
                        margin-top: 80px !important;
                    }
                
                    .alert {
                        margin-bottom: -30px;
                    }
                `}
            </style>

            <div className="container w-50 text-center">
                {/* <% if (message.length > 0) { %>
                    <p className="alert alert-success mt-5" style="color: green;"><%= message %></p>
                <% } %> */}
            </div>

            <div className="container w-50 prof-cont">
                <div className="card">
                    <div className="card-header text-center">
                        Profil Anda
                    </div>
                    <div className="card-body">
                        <p className="key"><span>NIK:</span>
                            {/* <%= data.nik %> */}
                        </p>
                        <p className="key"><span>Nama Lengkap:</span>
                            {/* <%= data.nama %> */}
                        </p>
                        <p className="key"><span>Nomor Telepon:</span>
                            {/* <%= 0+data.no_telp %> */}
                        </p>
                        <p className="key"><span>Alamat:</span>
                            {/* <%= data.alamat %> */}
                        </p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <a className="btn btn-danger" style={{width: '19%'}} href="/user"><i className="fa-solid fa-right-from-bracket"></i></a>
                        <a className="btn btn-success" style={{width: '39%'}} href="profil/edit"><i className="fa-solid fa-pen-to-square"></i> Edit Profil</a>
                        <a className="btn btn-primary" style={{width: '39%'}} href="profil/password"><i className="fa-solid fa-lock"></i> Ubah Password</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile