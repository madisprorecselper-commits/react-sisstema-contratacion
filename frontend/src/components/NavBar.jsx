import logoUno from "../assets/Logo.jpeg"
// import logoDos from "../assets/MadeproDismapro.jpeg"

export function NavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logoUno} alt="Logo 1" className="h-16" />
          {/* <img src={logoDos} alt="Logo 2" className="h-12" /> */}
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 text-black">
          <li><a href="#" className="hover:underline">Misión</a></li>
          <li><a href="#" className="hover:underline">Visión</a></li>
          <li><a href="#" className="hover:underline">Nosotros</a></li>
          <li><a href="#" className="hover:underline">Trabaja con nosotros</a></li>
        </ul>
      </div>
    </nav>
  )
}
