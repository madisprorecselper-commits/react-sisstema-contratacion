import { VacanteDisponiblePage } from "../pages/VacanteDisponiblePage"
import { NavBarAdministrador } from "../components/NavBarAdministrador"

export function MenuPrincipalAdmin() {
return (

 <div className="flex min-h-screen bg-gray-50 text-gray-800">

    <NavBarAdministrador/>

  <main className="flex-1 p-8">
    <VacanteDisponiblePage/>
      </main>         
   </div>
    

    
  );
}
