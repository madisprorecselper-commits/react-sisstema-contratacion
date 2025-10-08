import { NavBar } from "../components/NavBar"
import { useNavigate, Link } from "react-router-dom"

export function MenuPrincipalPage() {
  return (
    <>
      <NavBar />

      <div className="container mx-auto mt-20 px-4">
        <div className="max-w-xl mx-auto bg-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            Bienvenido
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
               <Link
                to="/crearCurriculum"
                className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
              >
                Crear tu currículum
              </Link>
            
             <Link
                to="/vacanteDisponible"
                className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
              >
                Vacante Disponible
              </Link>
             <Link
                to="/"
                className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
              >
                Tu Perfil
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
