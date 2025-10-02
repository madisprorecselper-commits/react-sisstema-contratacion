import { useState } from "react"
import { NavBar } from "../components/NavBar"


export function LoginPage() {

  // Estado para identificar si se seleccionó Usuario o Administrador
  const [role, setRole] = useState(null)

  // Estado para inputs del formulario
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // Estado para manejar errores
  const [error, setError] = useState("")

  // Clases dinámicas de botones según selección
  const buttonUser = role === "usuario"
    ? "bg-blue-500 text-white px-4 py-2 rounded"
    : "bg-orange-900 text-white px-4 py-2 rounded"

  const buttonAdministrador = role === "administrador"
    ? "bg-blue-500 text-white px-4 py-2 rounded"
    : "bg-orange-900 text-white px-4 py-2 rounded"

  // Manejadores de clic en botones
  const handleUserClick = () => setRole("usuario")
  const handleAdminClick = () => setRole("administrador")

  // Manejo del submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validaciones básicas
    if (!username || !password || !role) {
      setError("Todos los campos son obligatorios (incluyendo seleccionar un rol).")
      return
    }

   
  }

  return (
    <>
      {/* Navbar */}
      <NavBar/>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            Iniciar Sesión
          </h2>

          {/* Botones Usuario / Admin */}
          <div className="flex justify-center flex-wrap gap-3 mb-6">
            <button className={buttonUser} onClick={handleUserClick}>
              Usuario
            </button>
            <button className={buttonAdministrador} onClick={handleAdminClick}>
              Administrador
            </button>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
            </div>

            {/* Validación de errores */}
            {error && (
              <p className="text-red-600 text-sm mb-4">{error}</p>
            )}

            <div className="text-center mb-4">
              <a
                href="./recuperarContraseña.html"
                className="text-orange-900 hover:underline text-sm"
              >
                ¿Olvidó su contraseña?
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="./registro.html"
                className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
              >
                Registrarse
              </a>
              <button
                type="submit"
                className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
              >
                Iniciar Sesión
              </button>
           </div> 
        </form>

        {/* Saludo de bienvenida */}
          {isLogged && <Welcomemessage name={username} />}
      </div>
    </div>
    </>
  )
}
