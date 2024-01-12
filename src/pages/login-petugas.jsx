const LoginPetugas = () => {
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
            
                    .div-form {
                        background-color: #2E3691;
                        border-radius: 20px;
                        padding-top: 5px;
                        padding-bottom: 10px;
                    }
            
                    .form-control {
                        border-radius: 10px;
                        margin-bottom: -15px;
                    }
            
                    .btn {
                        border-radius: 10px;
                    }
            
                    .login {
                        font-weight: 600;
                    }
            
                    .msg-btn-err {
                        text-decoration: none;
                        color: red;
                        position: absolute;
                        font-size: 10px;
                        margin-top: -73px;
                        margin-left: 145px;
                    }
            
                    .justify-content-between {
                        margin-top: -25px;
                    }
                `}
            </style>
            <center>
                <h1 className="title mt-3" >Aplikasi Laporan Masyarakat Depok</h1> <br/>
                <h1 className="login">Login Petugas</h1>

                {/* <% if (typeof errors !== 'undefined') { %>
                    <p className="alert alert-danger w-25" style="color: red;"><i className="fa-solid fa-circle-exclamation"></i> <%= errors[0].message %></p>
                    <a className="msg-btn-err" href="/login-petugas"><i className="fa-sharp fa-solid fa-xmark"></i></a>
                <% } %> */}

                <div className="container w-25 div-form">
                    <form className="mt-2" action="/login-petugas" method="post">
                        <input className="form-control" type="text" id="username" name="username" placeholder="Username" required/> <br/>
                        <input className="form-control" type="password" id="password" name="password" placeholder="Password"/> <br/> <br/>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-danger" style={{width: '23%'}} href="/"><i className="fa-solid fa-right-from-bracket"></i></a>
                            <button className="btn btn-success w-75" type="submit">Masuk</button>
                        </div>
                    </form>
                </div>
            </center>
        </>
    )
}

export default LoginPetugas