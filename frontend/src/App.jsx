
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegistroPage } from "./pages/RegistroPage"
import { MenuPrincipalPage } from "./pages/MenuPrincipalPage"
import { CrearCurriculumPage } from "./pages/CrearCurriculumPage"
import { VacanteDisponiblePage } from "./pages/VacanteDisponiblePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registro" element={<RegistroPage />} />
      <Route path="/menuPrincipal" element={<MenuPrincipalPage />} />
      <Route path="/crearCurriculum" element={<CrearCurriculumPage />} />
      <Route path="/vacanteDisponible" element={<VacanteDisponiblePage />} />
    </Routes>
  )

}

export default App;
