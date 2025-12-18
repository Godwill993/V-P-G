import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import Loader from "../components/Loader";
import WhatsAppButton from "../components/WhatsAppButton";
import "../styles/home.css";
import { useEffect, useState } from "react";
import Personalized from  "../assets/images/istockphoto-1314945563-2048x2048.jpg"
import Ing from  "../assets/images/tomatoes-1867744_640.jpg"
import Delivary from  "../assets/images/images.jpeg"
import HeroImage from "../assets/images/food-and-drink-industry-7279389_1920.jpg"
import { FaFacebook, FaInstagram, FaTwitterX } from "react-icons/fa";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // ⏱️ seconds loader stays visible

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {showLoader && <Loader />}
      <main className="page">
        <ScrollReveal>
            <div className="hero-section">
                <div className="hero-imag">
                    {<img src={HeroImage} alt="Healthy Meal" />}
                </div>
                <section className="hero">
            <h1>Healthy Meals, Tailored for Your Life</h1>
            <p>
              Visionary Path Group delivers nutritious, carefully designed meals
              for diabetics, pregnant women, and health-conscious individuals.
            </p>
            <p>
              We focus on delivering fresh ingredients, expert nutritional
              guidance, and convenient weekly meal delivery.
            </p>
            <div className="icon-link">
                <a href="#" className="social"><FaFacebook /></a>  
                <a href="#" className="social"><FaInstagram /></a>
                <a href="#" className="social"><FaTwitterX /></a>
                     
            </div>
          </section>
            </div>
          
        </ScrollReveal>

        <ScrollReveal>
          <section className="features">
            <h2>Why Choose Us?</h2>
            <div className="cards">
              <div className="card">
                {<img
                src={Personalized}                alt="Personalized Meal Plans"
                />}
                <h3>Personalized Meal Plans</h3>
                <p>
                  Meals designed according to your health and dietary needs.
                </p>
              </div>
              <div className="card">
                {<img
                src={Ing}
                alt="Fresh Ingredients"
                />}
                <h3>Fresh Ingredients</h3>
                <p>We use only the freshest locally sourced ingredients.</p>
              </div>
              <div className="card">

                 {<img
                src={Delivary}
                alt="Weekly Delivery"
                />}
                <h3>Weekly Delivery</h3>
                <p>Convenient delivery right to your doorstep every week.</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="testimonials">
            <h2>Customer Testimonials</h2>
            <div className="cards">
              <div className="card">
                <p>
                  “The diabetic meal plan helped me maintain my blood sugar
                  perfectly.”
                </p>
                <h4>- Jane D.</h4>
              </div>
              <div className="card">
                <p>
                  “Pregnancy meals were delicious and nutritionally balanced.”
                </p>
                <h4>- Mary K.</h4>
              </div>
              <div className="card">
                <p>“Vegan meals are so tasty and convenient, love it!”</p>
                <h4>- Luke T.</h4>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mission">
            <h2>Our Mission</h2>
            <p>
              To improve lives through healthy eating by providing tailored
              meals and nutritional guidance for all individuals.
            </p>
          </section>
        </ScrollReveal>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
