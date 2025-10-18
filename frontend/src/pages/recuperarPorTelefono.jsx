import React from "react";
import NavBar from "./NavBar";

const CodigoSMS = () => {
  return (
    <div className="bg-orange-900 min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            Verificación por SMS
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Ingrese el código recibido"
              className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
            <div className="text-center">
              <a
                href="./index.html"
                className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
              >
                Enviar Código a SMS
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CodigoSMS;
