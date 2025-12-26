import logoUno from "../assets/Logo.jpeg"
import { Link } from "react-router-dom";
import React, { useState } from 'react';


export default function NavBarAdministrador () {
  const [openMenu, setOpenMenu] = useState(false)
    return (
               <>
            {/* Sidebar */}

   <button 
  className="md:hidden text-2xl"
  onClick={() => setOpenMenu(!openMenu)}
>
  ☰
</button>



      
            <div className={`${openMenu ? "block" : "hidden"} md:flex`}> 
            <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 p-4 border-b">
                           <img src={logoUno} alt="Logo 1" className="h-16" />
                 
                </div>

      
                <nav className="mt-4">
                  <ul className="space-y-2">
                     <li>
                      <Link
                        to="Dashboard"
                        className="flex items-center gap-2 p-3 hover:bg-blue-50 rounded-lg font-medium text-brown-600 bg-yellow-100"
                      >
                         Información General
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="PostulacionesAdmin"
                        className="flex items-center gap-2 p-3 hover:bg-blue-50 rounded-lg text-brown-600"
                      >
                         Revisar Postulaciones
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="vacantes"
                        className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg"
                      >
                         Vacantes Disponibles
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="EditarYeliminar"
                        className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg"
                      >
                        Administración
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="perfil"
                        className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg"
                      >
                        Mi Perfil
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
            </div>
               
    </>
    
    )


}