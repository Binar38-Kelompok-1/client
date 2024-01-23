import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserSidebar from "./components/user-sidebar";
import AdminSidebar from "./components/admin-sidebar";

import Login from './pages/login';
import LoginPetugas from './pages/login-petugas';
import Register from './pages/register';
import Error404 from './pages/404';

import UserIndex from './pages/user';
import Lapor from './pages/user/lapor';
import UserPassword from './pages/user/password';
import UserProfileEdit from './pages/user/profile-edit';
import UserProfile from './pages/user/profile';
import UserRiwayatDetail from './pages/user/riwayat-detail';
import UserRiwayat from './pages/user/riwayat';

import Dashboard from './pages/admin/dashboard';
import AdminIndex from './pages/admin';
import LaporanDetail from './pages/admin/laporan-detail';
import Laporan from './pages/admin/laporan';
import MasyarakatDetail from './pages/admin/masyarakat-detail';
import MasyarakatEdit from './pages/admin/masyarakat-edit';
import Masyarakat from './pages/admin/masyarakat';
import AdminPassword from './pages/admin/password';
import PetugasDetail from "./pages/admin/petugas-detail";
import PetugasRegister from './pages/admin/petugas-register';
import Petugas from './pages/admin/petugas';
import AdminProfileEdit from './pages/admin/profile-edit';
import AdminProfile from './pages/admin/profile';
import AdminRiwayatDetail from './pages/admin/riwayat-detail';
import AdminRiwayat from './pages/admin/riwayat';
import Selesai from './pages/admin/selesai';
import SelesaiDetail from './pages/admin/selesai-detail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/test-admin' element={<AdminSidebar body={AdminPassword}/>}/>
          <Route path='/test-user' element={<UserSidebar body={UserRiwayat}/>}/>
          <Route path='/test' element={<Register/>}/>

          <Route path='/' element={<Login/>}/>
          <Route path='/login-petugas' element={<LoginPetugas/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='/user/' element={<UserSidebar body={UserIndex}/>}/>
          <Route path='/user/profil' element={<UserSidebar body={UserProfile}/>}/>
          <Route path='/user/profil/edit' element={<UserSidebar body={UserProfileEdit}/>}/>
          <Route path='/user/profil/password' element={<UserSidebar body={UserPassword}/>}/>
          <Route path='/user/lapor' element={<UserSidebar body={Lapor}/>}/>
          <Route path='/user/riwayat' element={<UserSidebar body={UserRiwayat}/>}/>
          <Route path='/user/riwayat/:idLaporan' element={<UserSidebar body={UserRiwayatDetail}/>}/>

          <Route path='/admin/' element={<AdminSidebar body={AdminIndex}/>}/>
          <Route path='/admin/profil' element={<AdminSidebar body={AdminProfile}/>}/>
          <Route path='/admin/profil/edit' element={<AdminSidebar body={AdminProfileEdit}/>}/>
          <Route path='/admin/profil/password' element={<AdminSidebar body={AdminPassword}/>}/>
          <Route path='/admin/dasbor' element={<AdminSidebar body={Dashboard}/>}/>
          <Route path='/admin/masyarakat' element={<AdminSidebar body={Masyarakat}/>}/>
          <Route path='/admin/masyarakat/:idMasyarakat' element={<AdminSidebar body={MasyarakatDetail}/>}/>
          <Route path='/admin/masyarakat/:idMasyarakat/edit' element={<AdminSidebar body={MasyarakatEdit}/>}/>
          <Route path='/admin/petugas' element={<AdminSidebar body={Petugas}/>}/>
          <Route path='/admin/peugas/tambah' element={<AdminSidebar body={PetugasRegister}/>}/>
          <Route path='/admin/petugas/:idPetugas' element={<AdminSidebar body={PetugasDetail}/>}/>
          <Route path='/admin/laporan' element={<AdminSidebar body={Laporan}/>}/>
          <Route path='/admin/laporan/:idLaporan' element={<AdminSidebar body={LaporanDetail}/>}/>
          <Route path='/admin/selesai' element={<AdminSidebar body={Selesai}/>}/>
          <Route path='/admin/selesai/:idLaporan' element={<AdminSidebar body={SelesaiDetail}/>}/>
          <Route path='/admin/riwayat' element={<AdminSidebar body={AdminRiwayat}/>}/>
          <Route path='/admin/riwayat/:idLaporan' element={<AdminSidebar body={AdminRiwayatDetail}/>}/>

          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
