import React from "react";
import { NavBar } from "./components/NavBar"; // Ajusta la ruta según tu estructura

export default function RegistroCurriculum() {
  return (
    <div className="bg-orange-900 min-h-screen">
      {/* NAVBAR */}
      <NavBar />

      {/* FORM CONTAINER */}
      <div className="container mx-auto mt-8 px-4">
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* FOTO */}
            <div className="mb-6 md:mb-0">
              <div className="w-24 h-24 bg-white border border-gray-400"></div>
            </div>

            {/* FORM */}
            <form className="flex-1 space-y-4">
              <input
                type="text"
                placeholder="Cuéntanos de ti"
                className="w-full px-4 py-2 rounded border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
              <input
                type="text"
                placeholder="Mi experiencia laboral"
                className="w-full px-4 py-2 rounded border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
              <input
                type="text"
                placeholder="Mis estudios"
                className="w-full px-4 py-2 rounded border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
              <input
                type="text"
                placeholder="Idiomas"
                className="w-full px-4 py-2 rounded border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-orange-700"
              />

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Adjuntar documentos"
                  className="flex-1 px-4 py-2 rounded border border-gray-300 
                             focus:outline-none focus:ring-2 focus:ring-orange-700"
                />
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded 
                             hover:bg-gray-600 text-sm"
                >
                  PDF
                </button>
              </div>

              <div className="text-center mt-6">
                <a
                  href="./MenuPrincipal.html"
                  className="bg-orange-900 text-white px-6 py-2 text-sm rounded 
                             hover:bg-orange-800"
                >
                  GUARDAR
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
