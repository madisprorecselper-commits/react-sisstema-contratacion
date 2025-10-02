import React from "react";
import NavBar from "./NavBar";

const BuscarVacante = () => {
  return (
    <div className="bg-orange-900 min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Barra de búsqueda */}
      <div className="container mx-auto mt-6 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-full px-6 py-2 shadow-md">
          <input
            id="buscar"
            type="text"
            placeholder="Cargo o palabra clave"
            className="w-full bg-transparent outline-none placeholder-gray-500 text-sm"
          />
        </div>
      </div>

      {/* Lista de vacantes */}
      <div className="container mx-auto mt-10 px-4 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta de Vacante */}
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h6 className="text-lg font-semibold">
              Vacante 1 - Operario de planta
            </h6>
            <p className="text-sm text-gray-600 mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <a
              href="#"
              className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded mt-4 inline-block hover:bg-yellow-400"
            >
              POSTULARME
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h6 className="text-lg font-semibold">
              Vacante 2 - Técnico de producción
            </h6>
            <p className="text-sm text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit...
            </p>
            <a
              href="#"
              className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded mt-4 inline-block hover:bg-yellow-400"
            >
              POSTULARME
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h6 className="text-lg font-semibold">
              Vacante 3 - Auxiliar logístico
            </h6>
            <p className="text-sm text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit...
            </p>
            <a
              href="#"
              className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded mt-4 inline-block hover:bg-yellow-400"
            >
              POSTULARME
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h6 className="text-lg font-semibold">
              Vacante 4 - Diseñador industrial
            </h6>
            <p className="text-sm text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <a
              href="#"
              className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded mt-4 inline-block hover:bg-yellow-400"
            >
              POSTULARME
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h6 className="text-lg font-semibold">
              Vacante 5 - Asistente administrativo
            </h6>
            <p className="text-sm text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <a
              href="#"
              className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded mt-4 inline-block hover:bg-yellow-400"
            >
              POSTULARME
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h6 className="text-lg font-semibold">
              Vacante 6 - Supervisor de calidad
            </h6>
            <p className="text-sm text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <a
              href="#"
              className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded mt-4 inline-block hover:bg-yellow-400"
            >
              POSTULARME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscarVacante;
