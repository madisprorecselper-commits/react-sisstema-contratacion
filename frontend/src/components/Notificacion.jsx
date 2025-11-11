import React, { useEffect, useState } from "react";

const Notificacion = () => {
  const [notificaciones, setNotificaciones] = useState([]);

  useEffect(() => {
    const dataGuardada = JSON.parse(localStorage.getItem("postulaciones")) || [];
    setNotificaciones(dataGuardada);
  }, []);

  const verCurriculum = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("No se encontró el currículum del postulante.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-black mb-4">
        📢 Notificaciones de Postulación
      </h2>

      {notificaciones.length === 0 ? (
        <p className="text-gray-600">
          No hay nuevas postulaciones por el momento.
        </p>
      ) : (
        notificaciones.map((item, index) => (
          <div
            key={index}
            className="bg-yellow-400 text-black p-4 rounded-2xl shadow-md mb-4 border-2 border-black hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold">
              Nueva postulación recibida
            </h3>
            <p>
              <strong>Nombre:</strong> {item.nombre}
            </p>
            <p>
              <strong>Correo:</strong> {item.correo}
            </p>
            <p>
              <strong>Fecha:</strong> {item.fecha}
            </p>
            <button
              onClick={() => verCurriculum(item.cvLink)}
              className="mt-2 bg-black text-yellow-400 px-4 py-2 rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              Ver Currículum
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Notificacion;
