import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import logoSvg from "../assets/svg.png"
import { WelcomeMessage } from "../components/WelcomeMessage"

export function LoginPage() {
  const [role, setRole] = useState(null)
  const [UserName, setUserName] = useState("")
  const [PassWord, setPassWord] = useState("")
  const [error, setError] = useState("")
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate()

  const handleUserClick = () => setRole("usuario")
  const handleAdminClick = () => setRole("administrador")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!role || !UserName || !PassWord) {
      setError("Todos los campos son obligatorios (incluyendo el rol).")
      return
    }

    try {
      const response = await fetch(`https://react-sisstema-contratacion.onrender.com/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, UserName, PassWord }),
      })

      const data = await response.json()

      if (response.ok) {
        if (role === "usuario") {
          localStorage.setItem("userName", UserName)
          setIsLogged(true)
          setTimeout(() => navigate("/usuario"), 2500)
        } else {
          localStorage.setItem("adminName", UserName)
          navigate("/admin")
        }
      } else {
        setError(data.message || "Asegurate de escoger bien tu rol y credenciales.")
      }
    } catch (err) {
      console.error(err)
      setError("Error de conexión con el servidor.")
    }
  }

  if (isLogged) return <WelcomeMessage name={UserName} />

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-yellow-50 via-white to-gray-100">

      {/* COLUMNA IZQUIERDA - FORM */}
      <div className="flex items-center justify-center w-full md:w-1/2 px-4 py-10 md:py-0">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm sm:max-w-md border border-gray-100">

          <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-2">
            ¡Bienvenido de nuevo!
          </h1>
          <h2 className="text-center text-gray-500 mb-6 font-medium">
            Iniciar Sesión
          </h2>

          {/* Selector de rol */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-xl shadow-inner overflow-hidden">
              <button
                onClick={handleUserClick}
                className={`px-6 py-2 text-sm font-semibold transition-colors ${
                  role === "usuario"
                    ? "bg-yellow-300 text-gray-800 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Usuario
              </button>

              <button
                onClick={handleAdminClick}
                className={`px-6 py-2 text-sm font-semibold transition-colors ${
                  role === "administrador"
                    ? "bg-yellow-300 text-gray-800 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Administrador
              </button>
            </div>
          </div>

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Nombre de usuario
              </label>
              <input
                type="text"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Tu usuario"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Contraseña
              </label>
              <input type="password" value={PassWord}
                onChange={(e) => setPassWord(e.target.value)}
                placeholder="Tu contraseña"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none"
              />
            </div>

            {error && <p className="text-red-600 text-sm text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-300 hover:text-gray-800 
              text-white py-2 rounded-lg font-semibold transition-colors shadow-md"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* ENLACES */}
          <div className="mt-6 flex justify-between text-sm text-gray-600">
            <Link to="/registro" className="hover:text-yellow-500 hover:underline">
              Crear cuenta
            </Link>
            <Link to="/recuperar" className="hover:text-yellow-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-gradient-to-l from-yellow-200 to-yellow-100 
                     items-center justify-center px-10">

        <div className="text-center flex flex-col items-center justify-center">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-3">
            Sistema de Contratación
          </h2>

          <p className="text-gray-700 text-base md:text-lg lg:text-xl max-w-md mb-6">
            Accede al sistema de contratación y sé parte del crecimiento de nuestra organización.
          </p>

          <img src={logoSvg} alt="LogoMadepro"
            className="mx-auto w-56 md:w-72 lg:w-80 h-auto"
          />
        </div>

      </div>
    </div>
  )
}
