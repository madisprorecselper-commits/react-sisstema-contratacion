export function CardsJobsRecomend() {
  return (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
        <p className="text-gray-600 mb-4">Company A - Remote</p>
        <p className="text-gray-800">We are looking for a skilled frontend developer to join our team.</p>
        <button className="bg-yellow-200 rounded p-2 mt-8">Apply</button>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
        <p className="text-gray-600 mb-4">Company B - On-site</p>
        <p className="text-gray-800">Join us as a backend developer to build robust APIs and services.</p>
         <button className="bg-yellow-200 rounded p-2 mt-8">Apply</button>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_pYhMAhNRP9munXbXiD1dzI6O7AYTHp3Mw&s" alt="" className="rounded"/>
       <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
        <p className="text-gray-600 mb-4">Company C - Hybrid</p>
        <p className="text-gray-800">We need a versatile full stack developer to work on both frontend and backend.</p>
        </div>
         <button className="bg-yellow-200 rounded p-2 mt-8">Apply</button>
      </div>
    </div>
  );
}