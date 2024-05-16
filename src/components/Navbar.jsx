import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="https//gnocchiz.github.io/portafolio/#/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="red-gradient_text">Luka R.</p>

        </NavLink>
        <nav className="flex text-lg gap-7 font-medium text-black">
            <NavLink to="/about">
            About me
            </NavLink>
            <NavLink to="/projects" >
            Projects
            </NavLink>
            <NavLink to="/contact">
            Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
