import { NavBar } from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from 'axios';

export function VacanteDisponiblePage() {
  const [items, setItems] = useState([])
   const [mostrarFormulario, setMostrarFormulario] = useState(null);
  const [formData, setFormData] = useState({
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
  id_vacante: null
});

function handleChange(e) {
  const { name, value } = e.target;

  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
}

   const API_URL = import.meta.env.VITE_API_URL;
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      try {
  const response = await fetch(`${API_URL}/postulacion`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
        const data = await response.json();
  
        if (data.success) {
          alert('SOLICITUD APROBADA');
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('ERROR DE SOLICITUD');
      }
    }
  


useEffect(() => {
  axios.get(`${API_URL}/vacantes`)
    .then(response => {
      setItems(response.data);
    })
    .catch(error => {
      console.error("Error data", error);
    });
}, []);
  return (
    
 <div className="min-h-screen bg-gray-50 text-gray-800">


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
        
        {/* Job 2 */}
        {items.map(item => (
        <div 
         key={item.id}
        className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.ubication_Factory}</p>
            <p className="text-gray-600 mt-2 text-sm">
              {item.Description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                 {item.Remoto_Presencial}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                Remote
              </span>
            </div>
          </div>

<button 
onClick={() => {
  setMostrarFormulario(item.id);
  setFormData(prev => ({
    ...prev,
    id_vacante: item.id
  }));
}}

  className="bg-yellow-300 text-gray-800 px-5 py-2 rounded-lg mt-4 md:mt-0 hover:bg-yellow-200"
>
  Apply 
</button>

           {mostrarFormulario === item.id && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <h2 className="font-bold mb-2">ENVIAR SOLICITUD</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
           <input
  type="text"
  name="nombre"
  placeholder="nombre"
  value={formData.nombre}
  onChange={handleChange}
  className="p-2 border rounded"
/>

<input
  type="email"
  name="email"
  placeholder="email"
  value={formData.email}
  onChange={handleChange}
  className="p-2 border rounded"
/>

<input
  type="text"
  name="telefono"
  placeholder="telefono"
  value={formData.telefono}
  onChange={handleChange}
  className="p-2 border rounded"
/>

<textarea
  name="mensaje"
  placeholder="Nombre de la vacante a la que se quiere postular"
  value={formData.mensaje}
  onChange={handleChange}
  className="p-2 border rounded"
/>


            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              ¡POSTULARME!
            </button>
          </form>
        </div>
           )}
        </div>

  ))}
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
