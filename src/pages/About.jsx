import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/about.css";
import WhatsAppButton from "../components/WhatsAppButton";  
import { useEffect, useState } from "react";

export default function About() {
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
          <section className="about-hero">
            <h1>About Visionary Path Group</h1>
            <p>
              Visionary Path Group was founded with the mission to improve lives through healthy, tailored meals. Our goal is to make nutritious eating accessible, convenient, and delicious.
            </p>
            <img src="https://via.placeholder.com/800x400" alt="VPG Team" />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="team">
            <h2>Our Team</h2>
            <div className="cards">
              <div className="card">
                <img src="https://via.placeholder.com/300x300" alt="Nutritionist" />
                <h3>Jane Doe</h3>
                <p>Certified Nutritionist – Expert in diabetes and pregnancy diets.</p>
              </div>
              <div className="card">
                <img src="https://via.placeholder.com/300x300" alt="Chef" />
                <h3>John Smith</h3>
                <p>Head Chef – Focused on healthy, tasty meal preparation.</p>
              </div>
              <div className="card">
                <img src="https://via.placeholder.com/300x300" alt="Wellness Expert" />
                <h3>Mary Johnson</h3>
                <p>Wellness Consultant – Ensuring meals support holistic health.</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mission">
            <h2>Our Mission</h2>
            <p>
              To provide health-conscious, tailored meals that promote wellness and convenience for individuals with specific dietary needs. We strive to educate, nourish, and inspire healthy lifestyles.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="vision-values">
            <h2>Our Vision & Values</h2>
            <div className="cards">
              <div className="card">
                <h3>Vision</h3>
                <p>To be the leading provider of personalized nutrition solutions for all.</p>
              </div>
              <div className="card">
                <h3>Values</h3>
                <ul>
                  <li>Health First</li>
                  <li>Quality Ingredients</li>
                  <li>Customer Focus</li>
                  <li>Innovation</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="impact">
            <h2>Our Impact</h2>
            <p>
              Over the years, we have served hundreds of clients, providing meals that help manage chronic conditions, support pregnancy health, and promote overall wellness. Our commitment to quality, nutrition, and customer satisfaction is unwavering.
            </p>
            <img src="https://via.placeholder.com/800x400" alt="Healthy Meals Served" />
          </section>
        </ScrollReveal>
      </main>
        <WhatsAppButton />
      <Footer />
    </>
  );
}