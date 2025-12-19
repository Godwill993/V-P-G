import "../styles/footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-container">
        {/* BRAND / ABOUT */}
        <div className="footer-section">
          <h2 className="footer-logo">ViPaGr</h2>
          <p>
            ViPaGr is a modern restaurant offering delicious meals, quality
            service, and an unforgettable dining experience. We blend tradition
            with innovation to serve meals you’ll always remember.
          </p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact</li>
            <li>Reservations</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Dine-In Experience</li>
            <li>Online Ordering</li>
            <li>Home Delivery</li>
            <li>Catering Services</li>
            <li>Event Hosting</li>
            <li>Private Dining</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-section">
          <h3>Contact Info</h3>

          <div className="footer-contact">
            <FaMapMarkerAlt />
            <span>Douala, Cameroon</span>
          </div>

          <div className="footer-contact">
            <FaPhoneAlt />
            <span>+237 6XX XXX XXX</span>
          </div>

          <div className="footer-contact">
            <FaEnvelope />
            <span>contact@vipagr.com</span>
          </div>

          <div className="footer-contact">
            <FaClock />
            <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>
            Subscribe to get updates on new meals, promotions, and special
            events.
          </p>

          <form className="footer-form">
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ViPaGr Restaurant. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
