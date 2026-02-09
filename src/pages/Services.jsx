import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/services.css";

export default function Services() {
  return (
    <>
      <main className="page container py-section">
        <ScrollReveal>
          <section className="services-hero">
            <h1>Our Services</h1>
            <p>
              Visionary Path Group provides a wide range of services to meet your nutritional and culinary needs. We combine healthy meals with convenience and expertise.
            </p>
            <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200" alt="Healthy Meal Preparation" />
          </section>
        </ScrollReveal>

        <section className="service-cards py-section">
          <ScrollReveal>
            <div className="section-title">
              <h2>What We Offer</h2>
            </div>
            <div className="cards">
              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600" alt="Personalized Meal Planning" />
                <h3>Personalized Meal Planning</h3>
                <p>Customized meals to meet your health goals and dietary requirements.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" alt="Dietary Consultation" />
                <h3>Dietary Consultation</h3>
                <p>Expert advice to manage health conditions and nutritional needs.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&q=80&w=600" alt="Weekly Meal Delivery" />
                <h3>Weekly Meal Delivery</h3>
                <p>Freshly prepared meals delivered conveniently to your doorstep.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1523294587484-bc6cc8c95bb9?auto=format&fit=crop&q=80&w=600" alt="Catering Services" />
                <h3>Catering Services</h3>
                <p>Healthy and tailored catering options for events and parties.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600" alt="Cooking Workshops" />
                <h3>Cooking Workshops</h3>
                <p>Learn to prepare nutritious meals with our expert chefs.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600" alt="Meal Subscription Plans" />
                <h3>Meal Subscription Plans</h3>
                <p>Flexible subscription plans to ensure consistent healthy eating.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600" alt="Nutrition Workshops" />
                <h3>Nutrition Workshops</h3>
                <p>Guidance on diet, wellness, and lifestyle improvements.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1551218808-94e220e03163?auto=format&fit=crop&q=80&w=600" alt="Food Tasting Events" />
                <h3>Food Tasting Events</h3>
                <p>Experience our meals and flavors before making a choice.</p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}