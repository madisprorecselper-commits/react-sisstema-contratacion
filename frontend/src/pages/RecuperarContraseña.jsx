import React from "react";

export default function RecuperarContrasena() {
  return (
    <div className="bg-orange-900 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-4">
            <img src="./img/MadeproDismapro.jpeg" alt="Logo 1" className="h-12" />
            <img src="./img/Logo.jpeg" alt="Logo 2" className="h-12" />
          </div>
          <ul className="hidden md:flex space-x-6 text-black text-sm">
            <li><a href="#" className="hover:underline">Misión</a></li>
            <li><a href="#" className="hover:underline">Visión</a></li>
            <li><a href="#" className="hover:underline">Nosotros</a></li>
            <li><a href="#" className="hover:underline">Trabaja con nosotros</a></li>
          </ul>
        </div>
      </nav>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            Recuperar Contraseña
          </h2>

          {/* Botones Correo / Teléfono */}
          <div className="flex justify-center flex-wrap gap-3 mb-6">
            <a
              href="./recuperarPorCorreo.html"
              className="bg-orange-900 text-white px-4 py-2 rounded text-sm cursor-default"
            >
              Correo
            </a>
            <a
              href="./recuperarPorTelefono.html"
              className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
            >
              Teléfono
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
