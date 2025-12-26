import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { RegistroPage } from "./pages/RegistroPage";

import LayoutUsuario from "./Layouts/LayoutUsuario";
import LayoutAdmin from "./Layouts/LayoutAdmin";
import cardsFastInformation from "./components/CardsFastInformation"

import { MenuPrincipalPage } from "./pages/MenuPrincipalPage";

import { DashboardAdmin } from "./pages/DashboarhdAdmin"
import { CrearCurriculumPage } from "./pages/CrearCurriculumPage";
import { VacanteDisponiblePage } from "./pages/VacanteDisponiblePage";
import { PostulacionesAdmin } from "./pages/PostulacionesAdmin";
import { EditarYeliminar } from "./pages/EditarYeliminar";
import { AnexarPerfil } from "./pages/AnexarPerfil";

function App() {
  return (
    <Routes>

      {/* LOGIN */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/registro" element={<RegistroPage />} />

      {/* USUARIO */}
      <Route path="/usuario" element={<LayoutUsuario />}>
        <Route index element={<MenuPrincipalPage />} />
        <Route path="crear-cv" element={<CrearCurriculumPage />} />
        <Route path="vacantes" element={<VacanteDisponiblePage />} />
        <Route path="perfil" element={<AnexarPerfil />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<DashboardAdmin />} />
        <Route path="Dashboard" element={<DashboardAdmin />} />
       <Route path="PostulacionesAdmin" element={<PostulacionesAdmin />} />
        <Route path="EditarYeliminar" element={<EditarYeliminar />} />
        <Route path="vacantes" element={<VacanteDisponiblePage />} />
        <Route path="perfil" element={<AnexarPerfil />} />
      </Route>

    </Routes>
  );
}

export default App;
