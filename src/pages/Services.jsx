import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import WhatsAppButton from "../components/WhatsAppButton";  
import "../styles/services.css";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

export default function Services() {
          const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // ⏱️ seconds loader stays visible

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Header />
       {showLoader && <Loader />}
      <main className="page">
        <ScrollReveal>
          <section className="services-hero">
            <h1>Our Services</h1>
            <p>
              Visionary Path Group provides a wide range of services to meet your nutritional and culinary needs. We combine healthy meals with convenience and expertise.
            </p>
            <img src="https://via.placeholder.com/800x400" alt="Healthy Service" />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="service-cards">
            <h2>What We Offer</h2>
            <div className="cards">
              <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Personalized Meal Planning" />
                <h3>Personalized Meal Planning</h3>
                <p>Customized meals to meet your health goals and dietary requirements.</p>
              </div>

              <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Dietary Consultation" />
                <h3>Dietary Consultation</h3>
                <p>Expert advice to manage health conditions and nutritional needs.</p>
              </div>

              <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Weekly Meal Delivery" />
                <h3>Weekly Meal Delivery</h3>
                <p>Freshly prepared meals delivered conveniently to your doorstep.</p>
              </div>

              <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Catering Services" />
                <h3>Catering Services</h3>
                <p>Healthy and tailored catering options for events and parties.</p>
              </div>

              <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Cooking Workshops" />
                <h3>Cooking Workshops</h3>
                <p>Learn to prepare nutritious meals with our expert chefs.</p>
              </div>

              <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Meal Subscription Plans" />
                <h3>Meal Subscription Plans</h3>
                <p>Flexible subscription plans to ensure consistent healthy eating.</p>
              </div>

              <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Nutrition Workshops" />
                <h3>Nutrition Workshops</h3>
                <p>Guidance on diet, wellness, and lifestyle improvements.</p>
              </div>

              <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Food Tasting Events" />
                <h3>Food Tasting Events</h3>
                <p>Experience our meals and flavors before making a choice.</p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
        <WhatsAppButton />
      <Footer />
    </>
  );
}