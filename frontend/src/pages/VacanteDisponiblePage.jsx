import { NavBar } from "../components/NavBar";

export function VacanteDisponiblePage() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-8 px-4">
        <div className="max-w-xl mx-auto bg-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            Vacantes Disponibles
          </h2>
          <ul className="space-y-4">
            <li className="bg-white rounded shadow p-4">
              <h3 className="font-bold">Desarrollador Frontend</h3>
              <p>Requisitos: React, CSS, JavaScript</p>
              <button className="mt-2 bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800">
                Postularme
              </button>
            </li>
            <li className="bg-white rounded shadow p-4">
              <h3 className="font-bold">Analista QA</h3>
              <p>Requisitos: Pruebas manuales, automatización</p>
              <button className="mt-2 bg-orange-900 text-white px-4 py-2 rounded text-sm hover:bg-orange-800">
                Postularme
              </button>
            </li>
            {/* Puedes agregar más vacantes aquí */}
          </ul>
        </div>
      </div>
    </>
  );
}
