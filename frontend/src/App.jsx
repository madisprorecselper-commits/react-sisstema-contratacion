
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegistroPage } from "./pages/RegistroPage"
import { MenuPrincipalPage } from "./pages/MenuPrincipalPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registro" element={<RegistroPage />} />
      <Route path="/menuPrincipal" element={<MenuPrincipalPage />} />
    </Routes>
  )

}

export default App;
