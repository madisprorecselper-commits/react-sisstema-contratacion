import React from "react";
import { NavBar } from "../components/NavBar";

export default function MisionVision() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Misión y Visión
        </h1>

        <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Nuestra Misión
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Brindar a los trabajadores y empleadores una plataforma confiable y eficiente 
            que facilite los procesos de contratación, fomentando la transparencia, la 
            equidad y el crecimiento profesional a través del uso de herramientas tecnológicas.
          </p>
        </div>

        <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Nuestra Visión
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ser el sistema de contratación líder que transforme la manera en que las 
            personas y las empresas se conectan, promoviendo un entorno laboral más justo, 
            inclusivo y digitalmente accesible.
          </p>
        </div>
      </div>
    </>
  );
}
