import React from "react";
import NavBar from "./NavBar";

const VerificarContrasena = () => {
  return (
    <div className="bg-orange-900 min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Formulario */}
      <div className="container mx-auto px-4 mt-10">
        <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
            Verificar Contraseña
          </h2>

          <form className="space-y-4">
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full bg-white p-2 rounded border border-gray-300 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Verificar Contraseña"
              className="w-full bg-white p-2 rounded border border-gray-300 focus:outline-none"
            />
          </form>

          <div className="text-center mt-6">
            <a
              href="./codigoDeVerificacion.html"
              className="bg-orange-900 text-white px-6 py-2 rounded text-sm hover:bg-orange-800"
            >
              Continuar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificarContrasena;
