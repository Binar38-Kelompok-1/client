const Dashboard = () => {
    return (
        <>
            <style>
                {`
                    .card {
                        border-radius: 20px !important;
                    }
                
                    .header1 {
                        border-top-left-radius: 20px !important;
                        border-top-right-radius: 20px !important;
                        color: white;
                        font-size: 30px;
                        font-weight: 700;
                    }
                
                    .body1 {
                        border-bottom-left-radius: 20px !important;
                        border-bottom-right-radius: 20px !important;
                        color: white;
                        font-size: 50px;
                        font-weight: 700;
                    }
                
                    .header2 {
                        border-top-left-radius: 20px !important;
                        border-top-right-radius: 20px !important;
                        color: white;
                        font-size: 20px;
                        font-weight: 700;
                    }
                
                    .body2 {
                        border-bottom-left-radius: 20px !important;
                        border-bottom-right-radius: 20px !important;
                        color: white;
                        font-size: 50px;
                        font-weight: 700;
                    }
                `}
            </style>
            <div className="container con1 w-100">
                <div className="card card1 bg-warning text-center mt-2">
                    <div className="card-header header1">Total Laporan Masuk</div>
                    <div className="card-body body1">
                        <p>
                            {/* <%= semua.length %> */}
                        </p>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-between">
                <div className="card card2 bg-danger text-center mt-2" style={{width: '49%'}}>
                    <div className="card-header header2">Laporan Belum Dibalas</div>
                    <div className="card-body body2">
                        <p>
                            {/* <%= belum.length %> */}
                        </p>
                    </div>
                </div>
                <div className="card card2 bg-success text-center mt-2" style={{width: '49%'}}>
                    <div className="card-header header2">Laporan Sudah Dibalas</div>
                    <div className="card-body body2">
                        <p>
                            {/* <%= sudah.length %> */}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard