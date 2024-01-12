const Lapor = () => {
    return (
        <>
            <style>
                {`
                    .title {
                        text-align: center;
                        font-size: 50px;
                        font-weight: 700;
                    }
                
                    .btn {
                        border-radius: 10px;
                    }
                
                    textarea {
                        border-radius: 20px !important;
                    }
                `}
            </style>

            <h1 className="title">Tulis Laporan</h1>

            {/* <% if (typeof message !== 'undefined') { %>
                <div className="container text-center">
                    <p className="alert alert-success" style="color: green;"><%= message %></p>
                </div>
            <% } %> */}

            <div className="container w-100">
                <form action="/user/lapor" method="post" encType="multipart/form-data">
                    <textarea style={{height: '200px'}} className="form-control mb-2" name="isi_laporan" id="isi_laporan" placeholder="Tulis Laporan Disini"></textarea>
                    <div className="d-flex justify-content-between">
                        <input className="file" type="file" id="foto" name="foto" multiple/>
                        <div className="d-flex justify-content-between w-25">
                            <a className="btn btn-danger" style={{width: '23%'}} href="/user"><i className="fa-solid fa-right-from-bracket"></i></a>
                            <button className="btn btn-success w-75" type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Lapor