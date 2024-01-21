const AdminSidebar = (props) => {
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
                    font-weight: 500;
                    color: black;
                }
            
                .list-group-item:hover {
                    background-color: #2E3691;
                    color: white;
                }
            
                .profil-item {
                    margin-top: 20px;
                    border-top: 1px solid lightgray !important;
                    border-bottom: 0,5px solid lightgray !important;
                }
            
                .dasbor-item {
                    border-top: 0.5px solid lightgray !important;
                    border-bottom: 0,5px solid lightgray !important; 
                }
            
                .riwayat-item {
                    border-top: 0,5px solid lightgray !important;
                    border-bottom: 1px solid lightgray !important;
                }
            
                .logout-item {
                    margin-top: 50px;
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
            
                .dasbor-icon {
                    margin-right: 19px;
                }
    
                .masyarakat-icon {
                    margin-right: 15px;
                }
            `}
      </style>

      <div className="d-flex" id="wrapper">
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom">
            {/* <%= nama %> */}
            Nama Admin
          </div>
          <div className="list-group list-group-flush">
            <a
              className="list-group-item list-group-item-action list-group-item p-3 profil-item"
              href="/admin/profil"
            >
              <i className="fa-solid fa-user side-icon profil-icon"></i> Profil
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item p-3 lapor-item"
              href="/admin/dasbor"
            >
              <i className="fa-solid fa-table-columns side-icon dasbor-icon"></i>{" "}
              Dasbor
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item p-3 masyarakat-item"
              href="/admin/masyarakat"
            >
              <i className="fa-solid fa-users side-icon masyarakat-icon"></i>{" "}
              Masyarakat
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item p-3 petugas-item"
              href="/admin/petugas"
            >
              <i className="fa-solid fa-user-tie side-icon petugas-icon"></i>{" "}
              Petugas
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item p-3 belum-item"
              href="/admin/laporan"
            >
              <i className="fa-solid fa-circle-exclamation side-icon belum-icon"></i>{" "}
              Belum Dibalas
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item p-3 selesai-item"
              href="/admin/selesai"
            >
              <i className="fa-solid fa-circle-check side-icon selesai-icon"></i>{" "}
              Sudah Dibalas
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item p-3 riwayat-item"
              href="/admin/riwayat"
            >
              <i className="fa-solid fa-clock-rotate-left side-icon riwayat-icon"></i>{" "}
              Riwayat
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item p-3 logout-item"
              href="/admin/logout"
              onClick="return confirm('Apakah Anda Ingin Logout?')"
            >
              <i className="fa-solid fa-right-from-bracket side-icon logout-icon"></i>{" "}
              Logout
            </a>
          </div>
        </div>
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <props.body />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
