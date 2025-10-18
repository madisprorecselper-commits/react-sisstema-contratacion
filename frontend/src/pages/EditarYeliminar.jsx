import React from "react";
import { NavBar } from "./components/NavBar"; // Ajusta la ruta según tu proyecto

export default function GestionVacante() {
  return (
    <div className="bg-orange-900 min-h-screen">
      {/* NAVBAR */}
      <NavBar />

      {/* Barra de búsqueda */}
      <div className="mt-6 mx-auto max-w-md bg-white rounded-full px-6 py-2 shadow">
        <input
          type="text"
          id="buscar"
          placeholder="Buscar nombre de vacante"
          className="w-full border-none outline-none bg-transparent placeholder-gray-500 text-sm"
        />
      </div>

      {/* Grid de vacantes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8 px-4">
        <div className="bg-white p-4 rounded-lg relative min-h-[120px] shadow-md">
          <p className="text-gray-800">Descripción de la vacante 2</p>
          <div className="absolute bottom-2 right-3 flex space-x-3 text-sm">
            <span className="text-blue-600 cursor-pointer hover:underline">
              Editar
            </span>
            <span className="text-red-600 cursor-pointer hover:underline">
              Eliminar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
