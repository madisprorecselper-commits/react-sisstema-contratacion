import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import logoUno from "../assets/Logo.jpeg"
import logoDos from "../assets/MadeproDismapro.png"
import logoSvg from "../assets/svg.png"
import { WelcomeMessage } from "../components/WelcomeMessage"

export function LoginPage() {
  const [role, setRole] = useState(null) // "usuario" o "administrador"
  const [UserName, setUserName] = useState("")
  const [PassWord, setPassWord] = useState("")
  const [error, setError] = useState("")
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate()

  const handleUserClick = () => setRole("usuario")
  const handleAdminClick = () => setRole("administrador")

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Validaciones básicas
    if (!role || !UserName || !PassWord) {
      setError("Todos los campos son obligatorios (incluyendo el rol).")
      return
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, UserName, PassWord }),
      })

      const data = await response.json()

      if (response.ok) {
        // Si el login fue exitoso
        if (role === "usuario") {
          localStorage.setItem("userName", UserName)
          setIsLogged(true)
          setTimeout(() => navigate("/menuPrincipal"), 2500)
        } else if (role === "administrador") {
          localStorage.setItem("adminName", UserName)
          navigate("/menuPrincipalAdmin")
        }
      } else {
        setError(data.message || "Asegurate de escoger bien tu rol y credenciales.")
      }
    } catch (err) {
      console.error(err)
      setError("Error de conexión con el servidor.")
    }
  }

  // Si está logueado, muestra el mensaje de bienvenida
  if (isLogged) {
    return <WelcomeMessage name={UserName} />
  }

 return (
  <div className="flex min-h-screen bg-gradient-to-r from-yellow-50 via-white to-gray-100">

    <div className="flex items-center justify-center w-full md:w-1/2 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-2">
          ¡Bienvenido de nuevo!
        </h1>
        <h2 className="text-center text-gray-500 mb-6 font-medium">
          Iniciar Sesión
        </h2>

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

        {/* Formulario */}
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
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none transition"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={PassWord}
              onChange={(e) => setPassWord(e.target.value)}
              placeholder="Tu contraseña"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none transition"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 hover:text-gray-800 text-white py-2 rounded-lg font-semibold transition-colors duration-300 shadow-md"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 flex justify-between text-sm text-gray-600">
          <Link
            to="/registro"
            className="hover:text-yellow-500 hover:underline transition-colors"
          >
            Crear cuenta
          </Link>
          <Link
            to="/recuperar"
            className="hover:text-yellow-500 hover:underline transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>


    <div className="hidden md:flex w-1/2 bg-gradient-to-l from-yellow-200 to-yellow-100 items-center justify-center">
      <div className="text-center px-10 flex flex-col items-center justify-center">


  <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
    Sistema de Contratación
  </h2>

  
  <p className="text-gray-700 text-lg max-w-md">
    Accede al sistema de contratación y sé parte del crecimiento de nuestra organización.
  </p>

    <img src={logoSvg}alt="LogoMadepro" className="mx-auto w-80 h-auto mb-4"
  />

</div>

    </div>
  </div>
);
}