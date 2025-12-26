import { Outlet } from "react-router-dom";
import NavBarAdministrador  from "../components/NavBarAdministrador";

export default function LayoutAdmin() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      
      {/* Sidebar / Navbar Admin */}
      <NavBarAdministrador />

      {/* Contenido Admin */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
}
