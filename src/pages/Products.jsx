import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import WhatsAppButton from "../components/WhatsAppButton";  
import "../styles/products.css";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import Picture1 from "../assets/images/IMG-20251219-WA0014.jpg"
import Picture2 from "../assets/images/IMG-20251219-WA0015.jpg"
import Picture3 from "../assets/images/IMG-20251219-WA0016.jpg"
import Picture4 from "../assets/images/IMG-20251219-WA0017.jpg"
import Picture5 from "../assets/images/IMG-20251219-WA0018.jpg"
import Picture6 from "../assets/images/IMG-20251219-WA0026.jpg"
import Picture7 from "../assets/images/IMG-20251219-WA0027.jpg"
import Picture8 from "../assets/images/food-and-drink-industry-7279390_1280.jpg"


export default function Products() {
          const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // ⏱️ seconds loader stays visible

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Header />
       {showLoader && <Loader />}
      <main className="page">
        <ScrollReveal>
          <section className="products-hero">
            <h1>Our Products</h1>
            <p>
              Explore our wide range of healthy meals and nutrition packs, designed for specific dietary needs and delivered fresh to your doorstep.
            </p>
            <img src={Picture8} alt="Healthy Products" />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="product-cards">
            <h2>Our Product Range</h2>
            <div className="cards">
              <div className="card">
                {<img src={Picture1} alt="Diabetic Meals" />}
                <h3>Diabetic Meals</h3>
                <p>Balanced meals designed to regulate blood sugar and provide essential nutrients.</p>
              </div>

              <div className="card">
                {<img src={Picture2} alt="Pregnancy Nutrition Packs" />}
                <h3>Pregnancy Nutrition Packs</h3>
                <p>Specially designed meals to support the health of expecting mothers.</p>
              </div>

              <div className="card">
                {<img src={Picture3} alt="Vegan Options" />}
                <h3>Vegan Options</h3>
                <p>Plant-based meals crafted for flavor, nutrition, and wellness.</p>
              </div>

              <div className="card">
                <img src={Picture4} alt="Heart-Friendly Meals" />
                <h3>Heart-Friendly Meals</h3>
                <p>Low-sodium and heart-healthy meals designed for cardiovascular wellness.</p>
              </div>

              <div className="card">
                <img src={Picture5} alt="Gluten-Free Meals" />
                <h3>Gluten-Free Meals</h3>
                <p>Meals free from gluten for those with sensitivities or celiac disease.</p>
              </div>

              <div className="card">
                <img src={Picture6} alt="Keto-Friendly Meals" />
                <h3>Keto-Friendly Meals</h3>
                <p>Low-carb, high-protein meals perfect for ketogenic diets.</p>
              </div>

              <div className="card">
                <img src={Picture7} alt="Snack Packs" />
                <h3>Snack Packs</h3>
                <p>Healthy snacks to curb cravings without compromising your diet.</p>
              </div>

              <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Juices & Smoothies" />
                <h3>Juices & Smoothies</h3>
                <p>Freshly prepared beverages packed with nutrients and vitamins.</p>
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