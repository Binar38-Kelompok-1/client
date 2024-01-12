const AdminProfileEdit = () => {
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
                
                    label {
                        color: white;
                        font-weight: 600;
                    }
                
                    .btn {
                        border-radius: 10px;
                    }
                
                    .form-control {
                        border-radius: 10px;
                    }
                `}
            </style>
            <h1 className="text-center title">Edit Profil</h1>

            {/* <% if (typeof errors !== 'undefined') { %>
                <div className="container" style="width: 30%;">
                    <% errors.forEach(el => { %>
                        <p className="alert alert-danger" style="color: red;"><i className="fa-solid fa-circle-exclamation"></i> <%= el.message %></p>
                    <% }) %>
                </div>
            <% } %> */}
            
            <div className="container w-25 div-form">
                <form action="/admin/profil/edit" method="post">
                    {/* <% data.forEach(el => { %> */}
                        <label htmlFor="username">Username</label>
                        <input className="form-control mb-1" type="text" id="username" name="username" value="<%= el.username %>" required/>
                        <label htmlFor="nama">Nama Lengkap</label>
                        <input className="form-control mb-1" type="text" id="nama" name="nama" value="<%= el.nama %>" required/>
                        <label htmlFor="no_telp">No. Telp</label>
                        <input className="form-control mb-1" type="number" id="no_telp" name="no_telp" value="<%= 0+el.no_telp %>" required/>
                        <label htmlFor="alamat">Alamat</label>
                        <input className="form-control mb-1" type="text" id="alamat" name="alamat" value="<%= el.alamat %>" required/>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-danger" style={{width: '23%'}} href="/admin/profil"><i className="fa-solid fa-right-from-bracket"></i></a>
                            <button className="btn btn-success w-75" type="submit"><i className="fa-solid fa-check"></i></button>
                        </div>
                    {/* <% }) %> */}
                </form>
            </div>
        </>
    )
}

export default AdminProfileEdit