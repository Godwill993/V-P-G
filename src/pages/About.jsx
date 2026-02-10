import React from "react";
import { FaUsers } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/about.css";
import AboutHero from "../assets/images/visionary_about_hero.png";
import Nutritionalist from "../assets/images/visionary_nutritionalist.png";
import ChefHeadshot from "../assets/images/visionary_chef_headshot.png";

const Consultant = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";

export default function About() {
  return (
    <>
      <main className="page container">
        <ScrollReveal>
          <section className="about-hero">
            <div className="hero-icon-container">
              <div className="hero-icon">
                <FaUsers />
              </div>
            </div>
            <h1>About Visionary Path Group</h1>
            <p>
              Visionary Path Group was founded with the mission to improve lives through healthy, tailored meals. Our goal is to make nutritious eating accessible, convenient, and delicious.
            </p>
            <img src={AboutHero} alt="Premium Healthy Ingredients" /> 
          </section>
        </ScrollReveal>

        <section className="team container py-section">
          <ScrollReveal>
            <div className="section-title">
              <h2>Our Experts</h2>
            </div>
            <div className="cards">
              <div className="card hover-lift">
                <img src={Nutritionalist} alt="LENZ Godwill" />
                <h3>LENZ Godwill</h3>
                <p>Certified Nutritionist - Expert in diabetes and pregnancy diets.</p>
              </div>
              <div className="card hover-lift">
                <img src={ChefHeadshot} alt="John Jacob" />
                <h3>John Jacob</h3>
                <p>Head Chef - Focused on healthy, tasty meal preparation.</p>
              </div>
              <div className="card hover-lift">
                <img src={Consultant} alt="Mary Boy" />
                <h3>Mary Boy</h3>
                <p>Wellness Consultant - Ensuring meals support holistic health.</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="vision-values container py-section">
          <ScrollReveal>
            <div className="section-title">
              <h2>Our Vision & Values</h2>
            </div>
            <div className="cards">
              <div className="card glass">
                <h3>Our Vision</h3>
                <p>To be the leading provider of personalized nutrition solutions, empowering individuals to take control of their health through the power of food.</p>
              </div>
              <div className="card glass">
                <h3>Core Values</h3>
                <ul>
                  <li>Health & Wellness First</li>
                  <li>Premium Quality Ingredients</li>
                  <li>Customer-Centric Approach</li>
                  <li>Continuous Innovation</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="impact container py-section">
          <ScrollReveal>
            <div className="section-title">
              <h2>Our Impact</h2>
            </div>
            <p>
              Over the years, we have served hundreds of clients, providing meals that help manage chronic conditions, support pregnancy health, and promote overall wellness.
            </p>
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200" alt="Vibrant Healthy Meal Table" />
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}