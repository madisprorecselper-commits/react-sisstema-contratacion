import { NavBar } from "../components/NavBar";
import { WelcomeMessage } from "../components/WelcomeMessage";
import { Link } from "react-router-dom";

export function MenuPrincipalPage() {
  const userName = localStorage.getItem("userName") || "Usuario";

  return (
    <>
      <NavBar />

      <div className="container mx-auto mt-20 px-4">
        <div className="max-w-xl mx-auto bg-gray-200 rounded-lg shadow-md p-6">
          
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            Bienvenido{userName ? `, ${userName}` : ""}
          </h2>

          <WelcomeMessage name={userName} />

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link
              to="/crearCurriculum"
              className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
            >
              Crear tu currículum
            </Link>

            <Link
              to="/vacantesDisponibles"
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
  );
}
