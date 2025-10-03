import { NavBar } from "../components/NavBar"
import { WelcomeMessage } from "../pages/WelcomeMessage";
export function MenuPrincipalPage() {
  return (
    <>
      <NavBar />

      <div className="container mx-auto mt-20 px-4">
        <div className="max-w-xl mx-auto bg-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            
            Bienvenido
        
          </h2>
          
             <WelcomeMessage name={userName} />

          <div className="flex flex-wrap justify-center gap-4">
            <a
              //href="./crearCurricilum.html"
              className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
            >
              Crear tu currículum
            </a>
            <a
              //href="./vacantesDisponibles.html"
              className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
            >
              Vacante Disponible
            </a>
            <a
              //href="#"
              className="bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800"
            >
              Tu perfil
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
