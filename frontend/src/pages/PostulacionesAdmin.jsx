import React from "react";
import { NavBar } from "./NavBar"; // Ajusta la ruta según tu estructura

export default function VerVacante() {
  return (
    <div className="bg-orange-900 min-h-screen">
      {/* Encabezado */}
      <NavBar />

      {/* Barra de búsqueda */}
      <div className="w-full max-w-xl mx-auto mt-6 bg-white rounded-full px-6 py-2 shadow">
        <input
          type="text"
          placeholder="Buscar nombre de vacante"
          className="w-full outline-none bg-transparent placeholder-gray-500 text-sm"
        />
      </div>

      {/* Contenido principal */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
        {/* Lista de Vacantes */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg shadow w-60 text-center text-gray-800">
            Vacante 1
          </div>
          <div className="bg-white p-4 rounded-lg shadow w-60 text-center text-gray-800">
            Vacante 2
          </div>
          <div className="bg-white p-4 rounded-lg shadow w-60 text-center text-gray-800">
            Vacante 3
          </div>
        </div>

        {/* Detalle de Vacante */}
        <div className="bg-white p-6 rounded-lg shadow w-full max-w-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Nombre de la Vacante
          </h2>
          <a className="bg-orange-900 text-white px-4 py-2 rounded inline-block mb-4 text-sm hover:bg-orange-800">
            Información
          </a>
          <p className="mb-4 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            velit sed mauris fringilla aliquet.
          </p>
          <div className="flex flex-col gap-3">
            <a className="bg-red-600 text-white px-4 py-2 rounded text-center text-sm hover:bg-red-700">
              Eliminar Postulación
            </a>
            <a className="bg-orange-900 text-white px-4 py-2 rounded text-center text-sm hover:bg-orange-800">
              Publicar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
