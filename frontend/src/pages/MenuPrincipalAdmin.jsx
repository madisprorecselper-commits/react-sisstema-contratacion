import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar"

export function MenuPrincipalAdmin() {
  return (
    <div>
      {/* NAVBAR */}
      <NavBar />

      {/* MAIN CONTENT */}
      <div className="container mx-auto mt-20 px-4">
        <div className="max-w-xl mx-auto bg-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            Bienvenido
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/PostulacionesAdmin"
              className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
            >
              Revisar Postulaciones
            </Link>
            <Link
              to="/EditarYeliminar"
              className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
            >
              Editar o Eliminar Vacantes
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
