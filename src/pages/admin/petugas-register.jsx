const PetugasRegister = () => {
    return (
        <>
            <style>
                {`
                    .title {
                        font-size: 50px;
                        font-weight: 700;
                    }
                
                    .div-form {
                        background-color: #2E3691;
                        padding-bottom: 10px;
                        padding-top: 10px;
                        border-radius: 20px;
                    }
                
                    .btn {
                        border-radius: 10px;
                    }
                
                    .form-control {
                        border-radius: 10px;
                    }
                
                    .justify-content-between {
                        margin-top: -40px;
                    }
                `}
            </style>

            <h1 className="title text-center">Tambah Petugas</h1>

            {/* <% if (typeof errors !== 'undefined') { %>
                <% errors.forEach(el => { %>
                    <p className="alert alert-danger container text-center" style="color: red; width: 30%;"><i className="fa-solid fa-circle-exclamation"></i> <%= el.message %></p className="alert alert-danger">
                <% }) %>
            <% } %>      */}

            <div className="container w-25 div-form">
                <form action="/admin/petugas/tambah" method="post">
                    <input className="form-control" type="text" id="username" name="username" placeholder="Username" required/> <br/>
                    <input className="form-control" type="text" id="nama" name="nama" placeholder="Nama Lengkap" required/> <br/>
                    <input className="form-control" type="number" id="no_telp" name="no_telp" placeholder="08XXXXXXXXXX" required/> <br/>
                    <input className="form-control" type="text" id="alamat" name="alamat" placeholder="Alamat" required/> <br/> <br/>
                    <div className="d-flex justify-content-between">
                        <a className="btn btn-danger" style={{width: '23%'}} href="/admin/petugas"><i className="fa-solid fa-right-from-bracket"></i></a>
                        <button className="btn btn-success w-75" type="submit"><i className="fa-solid fa-check"></i></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PetugasRegister