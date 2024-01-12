const UserSidebar = (props) => {
    return (
        <>
            <style>
                {`
                    #wrapper {
                        overflow-x: hidden;
                    }
                
                    #sidebar-wrapper {
                        min-height: 100vh;
                        margin-left: -15rem;
                        transition: margin 0.25s ease-out;
                    }
                
                    #sidebar-wrapper .sidebar-heading {
                        padding: 0.875rem 1.25rem;
                        font-size: 1.2rem;
                    }
                
                    #sidebar-wrapper .list-group {
                        width: 15rem;
                    }
                
                    #page-content-wrapper {
                        min-width: 100vw;
                    }
                
                    body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
                        margin-left: 0;
                    }
                
                    @media (min-width: 768px) {
                        #sidebar-wrapper {
                            margin-left: 0;
                        }
                        #page-content-wrapper {
                            min-width: 0;
                            width: 100%;
                        }
                        body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
                            margin-left: -15rem;
                        }
                
                    }
                
                    .sidebar-heading {
                        background-color: #2E3691;
                        color: white;
                        text-align: center;
                        font-weight: 700;
                    }
                
                    .list-group-item {
                        font-size: 18px;
                        font-weight: 600;
                        color: black;
                    }
                
                    .list-group-item:hover {
                        background-color: #2E3691;
                        color: white;
                    }
                
                    .profil-item {
                        margin-top: 80px;
                        border-top: 1px solid lightgray !important;
                        border-bottom: 0,5px solid lightgray !important;
                    }
                
                    .lapor-item {
                        border-top: 0.5px solid lightgray !important;
                        border-bottom: 0,5px solid lightgray !important; 
                    }
                
                    .riwayat-item {
                        border-top: 0.5px solid lightgray !important;
                        border-bottom: 1px solid lightgray !important;
                    }
                
                    .logout-item {
                        margin-top: 100px;
                        border-top: 1px solid lightgray !important;
                        border-bottom: 1px solid lightgray !important;
                    }
                
                    .side-icon {
                        margin-left: 20px;
                        margin-right: 20px;
                    }
                
                    .profil-icon {
                        margin-right: 22px;
                    }
                
                    .lapor-icon {
                        margin-right: 22px;
                    }
                `}
            </style>

            <div className="d-flex" id="wrapper">
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom">
                    {/* <%= nama %> */}
                    Nama User
                </div>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action list-group-item p-3 profil-item" href="/user/profil"><i className="fa-solid fa-user side-icon profil-icon"></i> Profil</a>
                    <a className="list-group-item list-group-item-action list-group-item p-3 lapor-item" href="/user/lapor"><i className="fa-solid fa-flag side-icon lapor-icon"></i> Lapor</a>
                    <a className="list-group-item list-group-item-action list-group-item p-3 riwayat-item" href="/user/riwayat"><i className="fa-solid fa-clock-rotate-left side-icon riwayat-icon"></i> Riwayat</a>
                    <a className="list-group-item list-group-item-action list-group-item p-3 logout-item" href="/user/logout" onclick="return confirm('Apakah Anda Ingin Logout?')"><i className="fa-solid fa-right-from-bracket side-icon logout-icon"></i> Logout</a>
                </div>
            </div>
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <props.body/>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserSidebar