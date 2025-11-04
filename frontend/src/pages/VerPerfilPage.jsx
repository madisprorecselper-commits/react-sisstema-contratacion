import React from "react";

export function VerPerfilPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">My Profile</h1>
        <button className="bg-yellow-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-yellow-100 transition">
          Download Resume
        </button>
      </div>


      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
            <p className="text-gray-700">John Doe</p>
            <p className="text-gray-500 text-sm">john.doe@email.com</p>
            <p className="text-gray-500 text-sm">(123) 456-7890</p>
          </div>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition">
            Edit
          </button>
        </div>


        <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold mb-2">Work Experience</h2>
            <p className="text-gray-700">
              Software Engineer at Tech Company <br />
              <span className="text-sm text-gray-500">(2020–Present)</span>
            </p>
            <p className="text-gray-700 mt-2">
              Web Developer at Creative Agency <br />
              <span className="text-sm text-gray-500">(2018–2020)</span>
            </p>
          </div>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition">
            Edit
          </button>
        </div>


        <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold mb-2">Education</h2>
            <p className="text-gray-700">
              B.S. in Computer Science, University of Example
            </p>
            <p className="text-sm text-gray-500">(2014–2018)</p>
          </div>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition">
            Edit
          </button>
        </div>


        <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold mb-2">Skills</h2>
            <p className="text-gray-700">
              React, JavaScript, HTML, CSS, Node.js, Python
            </p>
          </div>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition">
            Edit
          </button>
        </div>
      </div>


      <div className="bg-yellow-100 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center shadow-sm">
        <div>
          <h3 className="text-brown-700 font-semibold mb-1">
            Profile Incomplete!
          </h3>
          <p className="text-gray-600 text-sm">
            Usar operadores ternarios para verificar si el perfil esta terminado, si no, que aparezca este anuncio.
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-yellow-300 text-gray800 px-4 py-2 rounded-lg hover:bg-yellow-100 transition">
          Complete Profile
        </button>
      </div>
    </div>
    </>
  );
}
