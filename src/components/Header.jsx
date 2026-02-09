
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
<Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
<Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
<Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
<Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
<Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
<ThemeToggle />
</nav>

<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
{menuOpen ? <FaTimes /> : <FaBars />}
</div>
</header>
);
}