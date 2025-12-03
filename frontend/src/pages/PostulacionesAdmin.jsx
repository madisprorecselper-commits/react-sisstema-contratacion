import React from "react"; 
import { AdminNavBar } from "../components/NavBarAdministrador"
import { useState, useEffect } from "react"; 
import axios from 'axios';

export function PostulacionesAdmin() { 
  const [items, setItems] = useState([])

const API_URL = import.meta.env.VITE_API_URL;

useEffect(() => {
  axios.get(`${API_URL}/obtenerPostulaciones`)
    .then(response => setItems(response.data))
    .catch(error => console.error("Error data", error));
}, []);


  return ( 
    <div className="">
      <div className="flex min-h-screen bg-gray-50 text-gray-800">
        <AdminNavBar/>

        <main className="flex-1 p-8">

          {/* Barra de búsqueda */}
          <div className="max-w-4xl mx-auto mt-10 px-6">
            <input 
              type="text" 
              placeholder="Buscar Aplicantes" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-100 focus:outline-none" 
            />
          </div>

          <div className="max-w-4xl mx-auto mt-8 space-y-4 px-6">

            {/* Job Cards */}
            {items.map(item => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.id_vacante}
                  </h3>

                  <p className="text-gray-500 text-sm">NOMBRE: {item.nombre}</p>

                  <p className="text-gray-600 mt-2 text-sm">
                   CORREO: {item.email}
                  </p>

                  
                  <p className="text-gray-600 mt-2 text-sm">
                       TELÉFONO {item.telefono}
                  </p>

                   <p className="text-gray-600 mt-2 text-sm">
                   CORREO: {item.mensaje}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                     ACCEPT
                    </span>

                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    DELETE
                    </span>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </main>
      </div>
    </div>
  ); 
}
