  
  export default function SideBarUser () {
    return (
        <>
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

  
        <div className="p-4">
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-400 transition">
            Cerrar sesión
          </button>
        </div>
      </aside>
        
        
        </>
    )
  }
  
 