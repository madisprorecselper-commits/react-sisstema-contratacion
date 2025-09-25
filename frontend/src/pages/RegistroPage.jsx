import { NavBar } from "../components/NavBar"

export function RegistroPage() {
  return (
    <>
      <NavBar />

      
        <div className="container mx-auto px-4 mt-20">
          <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
              Registro de Usuario
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombres completos"
                className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
              <input
                type="text"
                placeholder="Apellidos"
                className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
              <input
                type="date"
                placeholder="Fecha de nacimiento"
                className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
              <input
                type="text"
                placeholder="Número de teléfono"
                className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />

              <div className="text-center mt-4">
                <a
                  //href="./verificarContraseña.html"
                  className="bg-orange-900 text-white px-6 py-2 rounded text-sm hover:bg-orange-800"
                >
                  Continuar
                </a>
              </div>
            </form>
          </div>
        </div>
      
    </>
  )
}
