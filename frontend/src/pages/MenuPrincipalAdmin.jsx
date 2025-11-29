import { VacanteDisponiblePage } from "../pages/VacanteDisponiblePage"
import { AdminNavBar } from "../components/NavBarAdministrador"

export function MenuPrincipalAdmin() {
return (

 <div className="flex min-h-screen bg-gray-50 text-gray-800">

    <AdminNavBar/>

  <main className="flex-1 p-8">
    <VacanteDisponiblePage/>
      </main>         
   </div>
    

    
  );
}
