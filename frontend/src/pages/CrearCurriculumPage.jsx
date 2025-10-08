import React, { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar";

export function CrearCurriculumPage() {
  const [form, setForm] = useState({
    descripcion: "",
    experiencia: "",
    estudios: "",
    idiomas: "",
    documentos: ""
  });
  const [curriculum, setCurriculum] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("curriculum");
    if (saved) {
      setCurriculum(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurriculum(form);
    localStorage.setItem("curriculum", JSON.stringify(form));
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-8 px-4">
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* FOTO */}
            <div className="mb-6 md:mb-0">
              <div className="w-24 h-24 bg-white border border-gray-400"></div>
            </div>
            {/* FORM */}
            <form className="flex-1 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="descripcion"
                placeholder="Cuéntanos de ti"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
                value={form.descripcion}
                onChange={handleChange}
              />
              <input
                type="text"
                name="experiencia"
                placeholder="Mi experiencia laboral"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
                value={form.experiencia}
                onChange={handleChange}
              />
              <input
                type="text"
                name="estudios"
                placeholder="Mis estudios"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
                value={form.estudios}
                onChange={handleChange}
              />
              <input
                type="text"
                name="idiomas"
                placeholder="Idiomas"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
                value={form.idiomas}
                onChange={handleChange}
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  name="documentos"
                  placeholder="Adjuntar documentos"
                  className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
                  value={form.documentos}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 text-sm"
                >
                  PDF
                </button>
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-orange-900 text-white px-6 py-2 text-sm rounded hover:bg-orange-800"
                >
                  GUARDAR
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Card con la información */}
        {curriculum && (
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-lg font-bold mb-2">Mi Currículum</h3>
            <p><strong>Descripción:</strong> {curriculum.descripcion}</p>
            <p><strong>Experiencia:</strong> {curriculum.experiencia}</p>
            <p><strong>Estudios:</strong> {curriculum.estudios}</p>
            <p><strong>Idiomas:</strong> {curriculum.idiomas}</p>
            <p><strong>Documentos:</strong> {curriculum.documentos}</p>
          </div>
        )}
      </div>
    </>
  );
}