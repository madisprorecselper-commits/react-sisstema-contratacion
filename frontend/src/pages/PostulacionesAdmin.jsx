import React from "react";  
import { AdminNavBar } from "../components/NavBarAdministrador"

export function PostulacionesAdmin() {
  return (
    <div className="">
 

  <div className="flex min-h-screen bg-gray-50 text-gray-800">
 
     <AdminNavBar/>
 
   <main className="flex-1 p-8">
          {/* Barra de búsqueda */}
      <div className="max-w-4xl mx-auto mt-10 px-6">
        <input
          type="text"
          placeholder="Search for jobs"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-100 focus:outline-none"
        />
      </div>


        {/* Job 1 */}
     <div className="mt-8 bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Mantenimiento de planta
            </h3>
           
            <p className="text-gray-500 text-sm">Madeprro&Dismapro — Bogotá DC</p>
            <p className="mt-4 text-gray-500 text-sm">JUAN RODRIGUEZ</p>
            <p className="text-gray-600 mt-2 text-sm">
              Join our dynamic team to build next-generation software solutions.
              We’re looking for a passionate engineer with experience in React and Node.js
              to help us innovate and scale our products.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                ACCEPT
              </span>
              <span className="px-3 py-1 bg-red-200 text-red-700 rounded-full text-xs font-medium">
                DELETE
              </span>
            </div>
          </div>


        </div>
         <div className="mt-8 bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Mantenimiento de planta
            </h3>
           
            <p className="text-gray-500 text-sm">Madeprro&Dismapro — Bogotá DC</p>
            <p className="mt-4 text-gray-500 text-sm">JUAN RODRIGUEZ</p>
            <p className="text-gray-600 mt-2 text-sm">
              Join our dynamic team to build next-generation software solutions.
              We’re looking for a passionate engineer with experience in React and Node.js
              to help us innovate and scale our products.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                ACCEPT
              </span>
              <span className="px-3 py-1 bg-red-200 text-red-700 rounded-full text-xs font-medium">
                DELETE
              </span>
            </div>
          </div>

        </div>
       </main>         
       
    </div>
     

      
    </div>
  );
}
