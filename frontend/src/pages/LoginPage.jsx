import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import logoUno from "../assets/Logo.jpeg"
import logoDos from "../assets/MadeproDismapro.png"
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
    <>

      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {/*<div className="flex justify-center" >
            <img src={logoDos} alt="Logo 2" className="mx-auto max-w-sm h-60" /> 
          </div>*/} 
           
          <h1 className="text-center text-3xl font-black text-gray-800 mb-4">Welcome Back</h1>
          <h2 className="text-center text-xl font-light text-gray-500 mb-4">
            Iniciar Sesión
          </h2>
          
 
          {/* Botones de selección de rol */}
          <div className="flex justify-center mb-6">
  <div className="flex bg-gray-100 rounded-lg shadow-sm overflow-hidden">
    <button
      onClick={handleUserClick}
      className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
        role === "usuario"
          ? "bg-white text-yellow-400 shadow-inner"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      Usuario
    </button>

    <button
      onClick={handleAdminClick}
      className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
        role === "administrador"
          ? "bg-white text-yellow-400 shadow-inner"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      Administrador
    </button>
  </div>
</div>



          {/* Formulario */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h2 className="mb-4 text-gray-800 font-black">Email Adress</h2>
              <input
                type="text"
                placeholder="Usuario"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100"
              />
            </div>

            <div className="mb-4">
                <h2 className="mb-4 text-gray-800 font-bold">PassWord</h2>
              <input
                type="password"
                placeholder="Contraseña"
                value={PassWord}
                onChange={(e) => setPassWord(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100"
              />
            </div>

            {/* Validación de errores */}
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

            <div className="text-center mb-4">
              <button
                type="submit"
                className="bg-gray-800 w-sm text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-200 hover:text-gray-800 transition-colors duration-300"
              >
                Iniciar Sesión
              </button>
           
            </div>

            <div className="flex justify-center gap-4">
              <Link
                to="/registro"
                className="text-gray-500 hover:underline text-sm0"
              >
                Registrarse
              </Link>

                 <Link
                to="/recuperar"
                className="text-gray-800 hover:underline text-sm"
              >
                ¿Olvidó su contraseña?
              </Link>
              
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
