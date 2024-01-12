const AdminPassword = () => {
    return (
        <>
            <style>
                {`
                    .title {
                        font-size: 40px;
                        font-weight: 700;
                        text-align: center;
                    }
                
                    .div-form {
                        background-color: #2E3691;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        border-radius: 20px;
                    }
                
                    .form-control {
                        border-radius: 10px;
                    }
                
                    .btn {
                        border-radius: 10px;
                    }
                `}
            </style>
            {/* <% if (pass == false) { %> */}
                <h1 className="title">Masukan Password Anda Saat Ini</h1>

                {/* <% if (typeof errors !== 'undefined') { %> */}
                    <div className="container w-25">
                        <p className="alert alert-danger" style={{color: 'red'}}><i className="fa-solid fa-circle-exclamation"></i>
                            {/* <%= errors %> */}
                        </p>
                    </div>
                {/* <% } %> */}

                <div className="container div-form w-25">
                    <form action="/admin/profil/password" method="post">
                        <input className="form-control mb-2" type="password" id="password" name="password" placeholder="Password" required/>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-danger" style={{width: '23%'}} href="/admin/profil"><i className="fa-solid fa-right-from-bracket"></i></a>
                            <button className="btn btn-success w-75" type="submit"><i className="fa-solid fa-check"></i></button>
                        </div>
                    </form>
                </div>
            {/* <% } %> */}

            {/* <% if (pass == true) { %> */}
                <h1 className="title">Masukan Password Baru</h1>

                {/* <% if (typeof errors !== 'undefined') { %> */}
                    <div className="container w-50">
                        <p className="alert alert-danger" style={{color: 'red'}}><i className="fa-solid fa-circle-exclamation"></i>
                            {/* <%= errors %> */}
                        </p>
                    </div>
                {/* <% } %> */}

                <div className="container div-form mt-4 w-25">
                    <form action="/admin/profil/password/baru" method="post">
                        <input className="form-control mb-2" type="password" id="password" name="password" placeholder="Password" required/>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-danger" style={{width: '23%'}} href="/admin/profil"><i className="fa-solid fa-right-from-bracket"></i></a>
                            <button className="btn btn-success w-75" type="submit"><i className="fa-solid fa-check"></i></button>
                        </div>
                    </form>
                </div>
            {/* <% } %> */}
        </>
    )
}

export default AdminPassword