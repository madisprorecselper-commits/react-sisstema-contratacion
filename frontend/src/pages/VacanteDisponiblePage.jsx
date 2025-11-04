import { NavBar } from "../components/NavBar";

export function VacanteDisponiblePage() {
  return (
 <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold">Explore Our Openings</h1>

        <div className="space-x-4">
          <button className="text-gray-600 hover:text-gray-800">About Us</button>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-100">
            LogIN
          </button>
          <button className="bg-yellow-300 text-brown-800 px-4 py-1 rounded hover:bg-yellow-200">
            Register
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto mt-10 px-6">
        <input
          type="text"
          placeholder="Search for jobs"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-100 focus:outline-none"
        />
      </div>


      <div className="max-w-4xl mx-auto mt-6 flex flex-wrap gap-2 px-6">
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium cursor-pointer">
          Administración
        </span>
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium cursor-pointer">
          Carga
        </span>
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto mt-8 space-y-4 px-6">
        {/* Job 1 */}
        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Mantenimiento de planta
            </h3>
            <p className="text-gray-500 text-sm">Madeprro&Dismapro — Bogotá DC</p>
            <p className="text-gray-600 mt-2 text-sm">
              Join our dynamic team to build next-generation software solutions.
              We’re looking for a passionate engineer with experience in React and Node.js
              to help us innovate and scale our products.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                Presencial
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                Remote
              </span>
            </div>
          </div>

          <button className="bg-yellow-300 text-gray-800 px-5 py-2 rounded-lg mt-4 md:mt-0 hover:bg-yellow-200">
            Apply 
          </button>
        </div>


      </div>


      <div className="flex justify-center mt-10 mb-10 space-x-2">
        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
          &lt;
        </button>
        <button className="px-3 py-1 bg-yellow-300 text-gray-800 rounded">1</button>
        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
          3
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
          &gt;
        </button>
      </div>
    </div>
  );
}
