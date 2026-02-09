
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.css";
import ThemeToggle from "./ThemeToggle.jsx";
import Logo from "../assets/file_0000000093e071f4bdae2a372af90100.png";

export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);


return (
<header className="header">
<div className="logo">

    {<img src={Logo} alt="Visionary Path Group Logo" className="logo-image" />}

</div>
<nav className={`nav ${menuOpen ? 'open' : ''}`}>
  {[
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ].map((link, index) => (
    <Link
      key={link.to}
      to={link.to}
      onClick={() => setMenuOpen(false)}
      style={{ "--i": index }}
    >
      {link.label}
    </Link>
  ))}
  <div className="menu-footer" style={{ "--i": 5 }}>
    <ThemeToggle />
  </div>
</nav>

<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
{menuOpen ? <FaTimes /> : <FaBars />}
</div>
</header>
);
}