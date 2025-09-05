export function LoginPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-4">
            <img src="./img/MadeproDismapro.jpeg" alt="Logo 1" className="h-12" />
            <img src="./img/Logo.jpeg" alt="Logo 2" className="h-12" />
          </div>
          <ul className="hidden md:flex space-x-6 text-black">
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
            Iniciar Sesión
          </h2>

          {/* Botones Usuario / Admin */}
          <div className="flex justify-center flex-wrap gap-3 mb-6">
            <a 
            href="MenuPrincipal.html" 
            className="bg-orange-900 text-white px-4 py-2 rounded text-sm cursor-default">Usuario</a>
            <a 
            href="./menuPrincipalAdmin.html"
            className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"> Administrador</a>
          </div>

          {/* Formulario */}
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Usuario"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"/>
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"/>
            </div>
            <div className="text-center mb-4">
              <a
                href="./recuperarContraseña.html"
                className="text-orange-900 hover:underline text-sm">
                ¿Olvidó su contraseña?
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="./registro.html"
                className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800">
                Registrarse
              </a>
              <a
                href="#"
                className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
              >
                Iniciar Sesión
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

