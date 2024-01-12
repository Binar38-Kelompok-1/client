const Error404 = () => {
    return (
        <>
            <style>
                {`
                    h1 {
                        color: #2E3691;
                        font-size: 400px;
                        text-align: center;
                        font-family: 'Poppins';
                        font-weight: 700;
                    }
                
                    p {
                        color: #2E3691;
                        font-size: 20px;
                        text-align: center;
                        font-family: 'Poppins';
                        font-weight: 500;
                        margin-top: -70px;
                    }
                
                    img {
                        position: relative;
                        width: 100px;
                        margin-top: 20px;
                    }
                `}
            </style>
            <h1>404</h1>
            <p>Halaman Tidak Ditemukan</p>
            <center><img src="logo.png" alt=""/></center>
        </>
    )
}

export default Error404