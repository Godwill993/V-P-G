import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/footer.css";


export default function Footer() {
return (
<footer className="footer">
<p className="footer-text">© 2025 Visionary Path Group – Healthy Living, Better Future</p>
<div className="socials">
<a href="#" className="social"><FaFacebook /></a>
<a href="#" className="social"><FaInstagram /></a>
<a href="#" className="social"><FaTwitter /></a>
</div>
</footer>
);
}