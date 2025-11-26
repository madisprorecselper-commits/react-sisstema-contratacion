import logoUno from "../assets/Logo.jpeg"
import { Link } from "react-router-dom";

export function AdminNavBar () {
    return (
               <>
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 p-4 border-b">
                           <img src={logoUno} alt="Logo 1" className="h-16" />
                 
                </div>
      
                <nav className="mt-4">
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/MenuPrincipalAdmin"
                        className="flex items-center gap-2 p-3 hover:bg-blue-50 rounded-lg font-medium text-brown-600 bg-yellow-100"
                      >
                         Anuncios
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/PostulacionesAdmin"
                        className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg"
                      >
                         Revisar Postulaciones
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/EditarYeliminar"
                        className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg"
                      >
                        Create / Edit / Delete
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