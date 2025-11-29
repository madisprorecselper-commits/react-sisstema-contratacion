import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavBar } from "../components/NavBar"

export function RegistroPage() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    role : "usuario",
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

 const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
const response = await fetch(`https://react-sisstema-contratacion.onrender.com/registro`, {
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
    <div className="flex min-h-screen bg-gray-50 items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Crear una cuenta
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Completa tus datos para registrarte en el sistema
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre completo"
              value={formData.Nombre}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="Documento"
              placeholder="Documento de identidad"
              value={formData.Documento}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Correo electrónico"
              value={formData.Email}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="Telefono"
              placeholder="Teléfono"
              value={formData.Telefono}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="UserName"
              placeholder="Nombre de usuario"
              value={formData.UserName}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="password"
              name="PassWord"
              placeholder="Contraseña"
              value={formData.PassWord}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Registrarme
          </button>
        </form>

 
        <p className="text-center text-sm text-gray-500 mt-4">
          ¿Ya tienes una cuenta?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Inicia sesión aquí
          </span>
        </p>
      </div>
    </div>
  );
}