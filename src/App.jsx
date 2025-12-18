import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./App.css";


export default function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/products" element={<Products />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Router>
);
}