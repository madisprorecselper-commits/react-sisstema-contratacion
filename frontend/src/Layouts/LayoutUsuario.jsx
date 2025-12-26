import { Outlet } from "react-router-dom";
import  SideBarUser  from "../components/SideBarUser";

export default function LayoutUsuario() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      
      {/* Navbar Usuario */}
      <SideBarUser />

      {/* Contenido dinámico */}
      <main className="p-6">
        <Outlet />
      </main>

    </div>
  );
}
