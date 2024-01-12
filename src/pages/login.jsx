const Login = () => {
    return (
        <>
            <style>
                {`
                    body {
                        font-family: 'Poppins' !important;
                    }
    
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
                    }
    
                    .form-control {
                        border-radius: 10px;
                    }
    
                    form {
                        padding-top: 10px;
                    }
    
                    button {
                        border-radius: 10px !important;
                    }
    
                    .msg-btn-err {
                        text-decoration: none;
                        color: red;
                        position: absolute;
                        font-size: 10px;
                        margin-top: -73px;
                        margin-left: 145px;
                    }
    
                    .msg-btn-succ {
                        text-decoration: none;
                        color: green;
                        position: absolute;
                        font-size: 10px;
                        margin-top: -73px;
                        margin-left: 145px;
                    }
    
                    img {
                        position: relative;
                        width: 120px;
                        height: 120px;
                        margin-top: 18px;
                    }
                    
                    .login {
                        font-weight: 600;
                    }
    
                    .masuk {
                        margin-top: -15px;
                    }
                `}
            </style>

            <center>
                <h1 className="mt-3 title">Aplikasi Laporan Masyarakat Depok</h1> <br/>
                <h1 className="login">Login</h1>

                {/* <% if (typeof message !== 'undefined' && message.length > 0) { %>
                    <p className="alert alert-success w-25" style="color: green;"><%= message %></p>
                    <a className="msg-btn-succ" href="/"><i className="fa-sharp fa-solid fa-xmark"></i></a>
                <% } %> */}

                {/* <% if (typeof errors !== 'undefined') { %>
                    <p className="alert alert-danger w-25" style="color: red;"><i className="fa-solid fa-circle-exclamation"></i> <%= errors[0].message %></p>
                    <a className="msg-btn-err" href="/"><i className="fa-sharp fa-solid fa-xmark"></i></a>
                <% } %> */}
                
                <div className="container w-25 div-form">
                    <form action="/" method="post">
                        <div>
                            <input className="form-control mb-2" type="number" id="nik" name="nik" placeholder="NIK" required/>
                        </div>
                        <div>
                            <input className="form-control" type="password" id="password" name="password" placeholder="Password"/> <br/>
                        </div>
                        <button type="submit" className="btn btn-success mb-2 w-100 masuk">Masuk</button>
                    </form>
                </div> <br/>

                <p>Belum punya akun? Register <a href="/register">disini</a></p>
                <p>Petugas login <a href="/login-petugas">disini</a></p>
                <img src="logo.png" alt=""/>
            </center>
        </>
    )
}

export default Login