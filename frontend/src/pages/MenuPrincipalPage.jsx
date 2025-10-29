import logoUno from "../assets/Logo.jpeg"
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";

export function MenuPrincipalPage() {
  const userName = localStorage.getItem("userName") || "Usuario";

  return (
    <>

    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 p-4 border-b">
                     <img src={logoUno} alt="Logo 1" className="h-16" />
            <div>
              <h2 className="font-semibold">{userName}</h2>
            
            </div>
          </div>

          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-2 p-3 hover:bg-blue-50 rounded-lg font-medium text-brown-600 bg-yellow-100"
                >
                   Information
                </Link>
              </li>
              <li>
                <Link
                  to="/crearCurriculum"
                  className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg"
                >
                   Crea tu crea tu Curriculum
                </Link>
              </li>
              <li>
                <Link
                  to="/vacantesDisponibles"
                  className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg"
                >
                  Buscar Vacantes
                </Link>
              </li>
              <li>
                <Link
                  to="/perfil"
                  className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg"
                >
                  Ver Perfil
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Botón cerrar sesión */}
        <div className="p-4">
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-400 transition">
            Cerrar sesión
          </button>
        </div>
      </aside>
        
        <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">
          ¡Bienvenido de nuevo, {userName}!
        </h1>


        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 bg-gradient-to-r from-yellow-100 to-yellow-100 p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-2">
              Completa tu perfil para destacar ante reclutadores
            </h2>
            <Link
              to="perfil"
              className="inline-block bg-yellow-300 text-white px-4 py-2 rounded-lg hover:bg-orange-300 transition"
            >
              Completar Perfil
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Progreso del perfil</h3>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div
                className="bg-yellow-300 h-3 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">75% completado</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">Misión</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quaerat impedit doloremque et! Nesciunt vitae tenetur aperiam, quis sit adipisci, eius consectetur temporibus velit fugiat, hic asperiores voluptates eaque. Eius!
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">Visión</h3>
            <p className="text-gray-600 text-sm">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci eveniet a! Labore possimus recusandae laborum totam. Rerum porro fugiat voluptates est nesciunt? Corporis laudantium voluptatum voluptate totam eum.
            </p>
          </div>
        </div>

        
        <h2 className="text-xl font-bold mb-4">Trabajos Recomendados</h2>
        {/* Trabajos recomendados */}
      </main>
      </div>



    </>
  );
}
