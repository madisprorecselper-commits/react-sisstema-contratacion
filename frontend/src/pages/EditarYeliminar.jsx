import React from "react";
import { useState } from "react";
import { AdminNavBar } from "../components/NavBarAdministrador"


export function EditarYeliminar() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    Description: "",

  })
  function handleChange (e) {
    e.preventDefault() 
      const { name, value } = e.target 
      setFormData({
        ...formData,
        [name]: value
      })
  }

   const API_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
const response = await fetch(`${API_URL}/vacantes`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

      const data = await response.json();

      if (data.success) {
        alert('Vacante Publicada');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al publicar la vacante');
    }
  }
  return (
    <div className="">
      {/* NAVBAR */}
    
     <div className="flex min-h-screen bg-gray-50 text-gray-800">
    
        <AdminNavBar/>
    
      <main className="flex-1 p-8">
             {/* Barra de búsqueda */}
      <div className="mt-6 mx-auto max-w-md bg-white rounded-full px-6 py-2 shadow">
        <input
          type="text"
          id="buscar"
          placeholder="Buscar nombre de vacante"
          className="w-full border-none outline-none bg-transparent placeholder-gray-500 text-sm"
        />
      </div>

      {/* Grid de vacantes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8 px-4">
        <div className="bg-white p-4 rounded-lg relative min-h-[120px] shadow-md">
          <p className="text-gray-800">Descripción de la vacante 2</p>
          <div className="absolute bottom-2 right-3 flex space-x-3 text-sm">
            <span className="text-blue-600 cursor-pointer hover:underline">
              Editar
            </span>
            <span className="text-red-600 cursor-pointer hover:underline">
              Eliminar
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setMostrarFormulario(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Crear Vacante
      </button>
       {mostrarFormulario && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <h2 className="font-bold mb-2">Nueva Vacante</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={formData.title}
              onChange={handleChange}
              className="p-2 border rounded"
            />

            <textarea
              name="Description"
              placeholder="Descripción"
              value={formData.Description}
              onChange={handleChange}
              className="p-2 border rounded"
            />

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Guardar Vacante
            </button>
          </form>
        </div>
      )}
          </main>         
       </div>
        
    


    </div>
  );
}
