import React from "react";
import { NavBar } from "./components/NavBar";

export default function CodigoVerificacion() {
  return (
    <div className="bg-orange-900 min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Formulario */}
      <div className="container mx-auto px-4 mt-10">
        <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            Código de Verificación
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="******"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </form>

          <div className="text-center mt-6">
            <a
              href="/index.html"
              className="bg-orange-900 text-white px-4 py-2 rounded hover:bg-orange-800 text-sm"
            >
              Continuar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
