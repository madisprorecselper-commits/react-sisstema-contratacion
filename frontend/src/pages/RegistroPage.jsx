import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavBar } from "../components/NavBar"

export function RegistroPage() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    UserName: "",
    PassWord: "",
    Nombre: "",
    Documento: "",
    Email: "",
    Telefono: ""
  })

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert('Registro exitoso YA PUEDES INICIAR SESIÓN!');
        navigate('/'); 
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            Registro de Usuario
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre completo"
              value={formData.Nombre}
              onChange={handleChange}
              className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
            <input
              type="text"
              name="Documento"
              placeholder="Documento"
              value={formData.Documento}
              onChange={handleChange}
              className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
            <input
              type="email"
              name="Email"
              placeholder="Correo electrónico"
              value={formData.Email}
              onChange={handleChange}
              className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
            <input
              type="text"
              name="Telefono"
              placeholder="Número de teléfono"
              value={formData.Telefono}
              onChange={handleChange}
              className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
            <input
              type="text"
              name="UserName"
              placeholder="Nombre de usuario"
              value={formData.UserName}
              onChange={handleChange}
              className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
            <input
              type="password"
              name="PassWord"
              placeholder="Contraseña"
              value={formData.PassWord}
              onChange={handleChange}
              className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />

            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-orange-900 text-white px-6 py-2 rounded text-sm hover:bg-orange-800"
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
