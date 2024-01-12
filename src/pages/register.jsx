const Register = () => {
    return (
        <>
            <style>
                {`
                    .title {
                        background-color: #2E3691;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        color: white;
                        font-weight: 800;
                    }
            
                    .form-control {
                        margin-bottom: -10px !important;
                        border-radius: 10px;
                    }
            
                    .d-flex {
                        margin-top: -25px;
                    }
            
                    .div-form {
                        background-color: #2E3691;
                        border-radius: 20px;
                        padding-top: 10px;
                        padding-bottom: 10px;
                    }
            
                    .btn {
                        border-radius: 10px;
                    }
            
                    .msg-btn-err {
                        text-decoration: none;
                        color: red;
                        position: absolute;
                        font-size: 10px;
                        margin-top: -73px;
                        margin-left: 145px;
                    }
            
                    .reg {
                        font-weight: 600;
                    }
                `}
            </style>
            <center>
                <h1 className="mt-3 title">Aplikasi Laporan Masyarakat Depok</h1> <br/>
                <h1 className="reg">Register</h1>

                {/* <% if (typeof errors !== 'undefined') { %>
                    <div className="alert alert-danger w-25">
                        <% errors.forEach(el => { %>
                            <p style="color: red;"><i className="fa-solid fa-circle-exclamation"></i> <%= el.message %></p>
                        <% }) %>
                    </div>
                <% } %> */}

                <div className="container w-25 div-form">
                    <form action="/register" method="post">
                        <input className="form-control" type="number" id="nik" name="nik" placeholder="NIK" required/> <br/>
                        <input className="form-control" type="text" id="nama" name="nama" placeholder="Nama Lengkap" required/> <br/>
                        <input className="form-control" type="password" id="password" name="password" placeholder="Password" required/> <br/>
                        <input className="form-control" type="number" id="no_telp" name="no_telp" placeholder="08XXXXXXXXXX" required/> <br/>
                        <input className="form-control" type="text" id="alamat" name="alamat" placeholder="Alamat" required/> <br/> <br/>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-danger" style={{width: '23%'}} href="/"><i className="fa-solid fa-right-from-bracket"></i></a>
                            <button className="btn btn-success w-75" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </center>
        </>
    )
}

export default Register