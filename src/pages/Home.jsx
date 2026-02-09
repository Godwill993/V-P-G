import ScrollReveal from "../components/ScrollReveal";
import AnimatedStats from "../components/AnimatedStats";
import "../styles/home.css";
import Personalized from  "../assets/images/istockphoto-1314945563-2048x2048.jpg";
import Ing from  "../assets/images/tomatoes-1867744_640.jpg";
import Delivary from  "../assets/images/images.jpeg";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <main className="page">
        <ScrollReveal>
          <div className="hero-section">
            <section className="hero">
              <h1>Healthy Meals, Tailored for Your Life</h1>
              <p>
                Visionary Path Group delivers nutritious, carefully designed meals 
                for diabetics, pregnant women, and health-conscious individuals.
              </p>
              <div className="icon-link">
                <a href="#" className="social" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" className="social" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" className="social" aria-label="X"><FaXTwitter /></a>
              </div>
            </section>
          </div>
        </ScrollReveal>

        <section className="features container py-section">
          <ScrollReveal>
            <div className="section-title">
              <h2>Why Choose Us?</h2>
              <p className="text-muted">Experience the perfect blend of health, taste, and convenience.</p>
            </div>
            <div className="cards">
              <div className="card hover-lift">
                <img src={Personalized} alt="Personalized Meal Plans" />
                <h3>Personalized Meal Plans</h3>
                <p>Meals designed according to your unique health requirements and dietary preferences.</p>
              </div>
              <div className="card hover-lift">
                <img src={Ing} alt="Fresh Ingredients" />
                <h3>Fresh Ingredients</h3>
                <p>We source only the highest quality, fresh ingredients from local sustainable farms.</p>
              </div>
              <div className="card hover-lift">
                <img src={Delivary} alt="Weekly Delivery" />
                <h3>Weekly Delivery</h3>
                <p>Convenient, contact-free delivery right to your doorstep, keeping your health on track.</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <AnimatedStats />

        <section className="testimonials container py-section">
          <ScrollReveal>
            <div className="section-title">
              <h2>What Our Clients Say</h2>
            </div>
            <div className="cards">
              <div className="card glass">
                <p>“The diabetic meal plan helped me maintain my blood sugar levels perfectly without sacrificing flavor.”</p>
                <h4>- Lenz G.</h4>
              </div>
              <div className="card glass">
                <p>“Pregnancy meals were a lifesaver. Delicious, nutritious, and I didn't have to worry about a thing.”</p>
                <h4>- Alexis K.</h4>
              </div>
              <div className="card glass">
                <p>“VPG meals are exceptionally tasty and so convenient. It's the best investment in my health I've made!”</p>
                <h4>- Luke A.</h4>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="mission container py-section">
          <ScrollReveal>
            <div className="mission-content">
              <div className="section-title">
                <h2>Our Mission</h2>
              </div>
              <p className="lead">
                To improve lives through healthy eating by providing tailored
                meals and nutritional guidance for all individuals, fostering a healthier 
                community one meal at a time.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}
