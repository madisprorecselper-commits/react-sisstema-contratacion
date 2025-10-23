import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegistroPage } from "./pages/RegistroPage";
import { MenuPrincipalPage } from "./pages/MenuPrincipalPage";
import { MenuPrincipalAdmin } from "./pages/MenuPrincipalAdmin";
import { CrearCurriculumPage } from "./pages/CrearCurriculumPage";
import { VacanteDisponiblePage } from "./pages/VacanteDisponiblePage";
import { PostulacionesAdmin } from "./pages/PostulacionesAdmin";
import { EditarYeliminar } from "./pages/EditarYeliminar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registro" element={<RegistroPage />} />
      <Route path="/menuPrincipal" element={<MenuPrincipalPage />} />
      <Route path="/menuPrincipalAdmin" element={<MenuPrincipalAdmin/>} />
      <Route path="/crearCurriculum" element={<CrearCurriculumPage />} />
      <Route path="/vacantesDisponibles" element={<VacanteDisponiblePage />} />
      <Route path="/PostulacionesAdmin" element={<PostulacionesAdmin />} />
      <Route path="/EditarYeliminar" element={<EditarYeliminar />} />
    
    </Routes>
  );
}

export default App;