import React, { useState } from "react";
import { Link } from "react-router-dom";


export function CrearCurriculumPage() {
  const steps = [
    "Personal Info",
    "Experience",
    "Education",
    "Skills",
    "Resume",
    "Review",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const progress = Math.round(((currentStep + 1) / steps.length) * 100);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-gradient-to-b from-gray-200 to-gray-400 rounded-full" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Upload a Profile Picture
                  </h3>
                  <p className="text-sm text-gray-500">
                    This helps recruiters recognize you.
                  </p>
                </div>
              </div>
              <button className="mt-4 md:mt-0 bg-yellow-300 text-brown-800 px-4 py-2 rounded-md hover:bg-yellow-50 transition">
                Upload
              </button>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="(123) 456-7890"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="San Francisco, CA"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                />
              </div>
            </form>
          </>
        );

      case 1:
        return (
          <form className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Experience
            </h3>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Acme Inc."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Role / Position
              </label>
              <input
                type="text"
                placeholder="Software Engineer"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-200"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Start Date
                </label>
                <input
                  type="month"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  End Date
                </label>
                <input
                  type="month"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-200"
                />
              </div>
            </div>
          </form>
        );

      case 2:
        return (
          <form className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Education
            </h3>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Institution Name
              </label>
              <input
                type="text"
                placeholder="Harvard University"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Degree / Program
              </label>
              <input
                type="text"
                placeholder="Bachelor of Science in Computer Science"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-200"
              />
            </div>
          </form>
        );

      case 3:
        return (
          <form className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
            <p className="text-sm text-gray-500">
              List your top skills separated by commas.
            </p>
            <textarea
              rows={4}
              placeholder="JavaScript, React, Node.js, MySQL"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-200"
            ></textarea>
          </form>
        );

      case 4:
        return (
          <form className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Resume</h3>
            <p className="text-sm text-gray-500 mb-2">
              Upload your updated résumé in PDF format.
            </p>
            <input
              type="file"
              accept=".pdf"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-200"
            />
          </form>
        );

      case 5:
        return (
          <div className="text-center py-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Review & Submit
            </h3>
            <p className="text-gray-600 mb-6">
              Please review your information before submitting your profile.
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition">
              Submit Profile
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm hidden md:flex flex-col py-6">
        <h2 className="text-lg font-bold px-6 mb-4">Profile Steps</h2>
        <nav className="flex flex-col space-y-1">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`text-left px-6 py-2 rounded-md font-medium ${
                i === currentStep
                  ? "bg-yellow-100 text-brown-700 border-blue-500"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              {step}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 px-6 md:px-12 py-10">
        <h1 className="text-3xl font-bold mb-2">Create Your Profile</h1>
        <p className="text-gray-600 mb-6">
          Complete the following sections to build your professional profile.
        </p>

        {/* Progress Bar */}
        <div className="mb-10">
          <p className="text-sm font-medium mb-1">Profile Completion</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-yellow-300 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">{progress}%</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          {renderForm()}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-10">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-6 py-2 rounded-md font-semibold border ${
                currentStep === 0
                  ? "text-gray-400 border-gray-300 cursor-not-allowed"
                  : "text-gray-700 border-gray-400 hover:bg-gray-100"
              }`}
            >
              ← Back
            </button>

            {currentStep < steps.length - 1 && (
              <button
                onClick={handleNext}
                className="bg-yellow-300 text-brown-700 px-6 py-2 rounded-md font-semibold hover:bg-yellow-100 transition"
              >
                Save & Continue →
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
