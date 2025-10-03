import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { NavBar } from "../components/NavBar"

export function LoginPage() {
  const [role, setRole] = useState(null) // Usuario o Administrador
  const [UserName, setUserName] = useState("")
  const [PassWord, setPassWord] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  // Estilos dinámicos de botones
  const buttonUser =
    role === "usuario"
      ? "bg-blue-500 text-white px-4 py-2 rounded"
      : "bg-orange-900 text-white px-4 py-2 rounded"

  const buttonAdministrador =
    role === "administrador"
      ? "bg-blue-500 text-white px-4 py-2 rounded"
      : "bg-orange-900 text-white px-4 py-2 rounded"

  const handleUserClick = () => setRole("usuario")
  const handleAdminClick = () => setRole("administrador")

  // Enviar login
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validaciones
    if (!UserName || !PassWord || !role) {
      setError("Todos los campos son obligatorios (incluyendo rol).")
      return
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ UserName, PassWord, role }),
      })

      const data = await response.json()

      if (response.ok) {
        alert("Login correcto! Redirigiendo a RegistroPage...")

        localStorage.setItem("userName", UserName)        
        navigate("/menuPrincipal") 

      
      } else {
        setError(data.message || "Usuario o contraseña incorrectos.")
      }
    } catch (err) {
      console.error(err)
      setError("Error de conexión con el servidor.")
    }
  }

  return (
    <>
      {/* Navbar */}
      <NavBar />

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
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Contraseña"
                value={PassWord}
                onChange={(e) => setPassWord(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
            </div>

            {/* Validación de errores */}
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

            <div className="text-center mb-4">
              <Link
                to="/recuperar"
                className="text-orange-900 hover:underline text-sm"
              >
                ¿Olvidó su contraseña?
              </Link>
            </div>

            <div className="flex justify-center gap-4">
              <Link
                to="/registro"
                className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
              >
                Registrarse
              </Link>
              <button
                type="submit"
                className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}