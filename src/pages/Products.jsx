import React, { useState, useEffect } from "react";
import { FaBoxOpen, FaWhatsapp, FaTimes } from "react-icons/fa";
import ProductsHero from "../assets/images/visionary_home_hero.png";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/products.css";
import Picture1 from "../assets/images/IMG-20251219-WA0014.jpg"
import Picture2 from "../assets/images/IMG-20251219-WA0015.jpg"
import Picture3 from "../assets/images/IMG-20251219-WA0016.jpg"
import Picture4 from "../assets/images/IMG-20251219-WA0017.jpg"
import Picture5 from "../assets/images/IMG-20251219-WA0018.jpg"
import Picture6 from "../assets/images/IMG-20251219-WA0026.jpg"
import Picture7 from "../assets/images/IMG-20251219-WA0027.jpg"
import Picture8 from "../assets/images/food-and-drink-industry-7279390_1280.jpg"

export default function Products() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 6000); // 6 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="page container">
        <section className="products-hero">
          <ScrollReveal>
            <div className="hero-icon-container">
              <div className="hero-icon">
                <FaBoxOpen />
              </div>
            </div>
            <h1>Our Products</h1>
            <p>
              Explore our wide range of healthy meals and nutrition packs, designed for specific dietary needs and delivered fresh to your doorstep.
            </p>
            <img src={ProductsHero} alt="Premium Healthy Product Selection" />
          </ScrollReveal>
        </section>

        <section className="product-cards py-section">
          <ScrollReveal>
            <div className="section-title">
              <h2>Our Product Range</h2>
            </div>
          </ScrollReveal>
          <div className="cards">
            {[
              { img: Picture1, title: "Diabetic Meals", desc: "Balanced meals designed to regulate blood sugar and provide essential nutrients." },
              { img: Picture2, title: "Pregnancy Nutrition Packs", desc: "Specially designed meals to support the health of expecting mothers." },
              { img: Picture3, title: "Vegan Options", desc: "Plant-based meals crafted for flavor, nutrition, and wellness." },
              { img: Picture4, title: "Heart-Friendly Meals", desc: "Low-sodium and heart-healthy meals designed for cardiovascular wellness." },
              { img: Picture5, title: "Gluten-Free Meals", desc: "Meals free from gluten for those with sensitivities or celiac disease." },
              { img: Picture6, title: "Keto-Friendly Meals", desc: "Low-carb, high-protein meals perfect for ketogenic diets." },
              { img: Picture7, title: "Snack Packs", desc: "Healthy snacks to curb cravings without compromising your diet." },
              { img: "https://images.unsplash.com/photo-1622484211148-716598e04144?auto=format&fit=crop&q=80&w=600", title: "Juices & Smoothies", desc: "Freshly prepared beverages packed with nutrients and vitamins." },
              { img: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80&w=600", title: "Muscle Gain Packs", desc: "High-protein, calorie-rich meals designed to support muscle growth and recovery." },
              { img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=600", title: "Post-Surgery Recovery", desc: "Nutritious, easy-to-digest meals specifically curated to support the healing process." },
              { img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600", title: "Organic Salad Bowls", desc: "Fresh, fiber-rich plant-based options made with locally sourced organic ingredients." },
              { img: "https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=80&w=600", title: "Detox Juice Cleanses", desc: "Cold-pressed, nutrient-dense juices designed to refresh and revitalize your body." },
              { img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600", title: "Family Dinner Bundles", desc: "Healthy, wholesome bulk meals perfect for sharing with the entire family at home." },
              { img: "https://images.unsplash.com/photo-1540333503348-845ad3858139?auto=format&fit=crop&q=80&w=600", title: "Office Lunch Boxes", desc: "Conveniently packed, balanced midday meals specifically for a busy workday." },
            ].map((product, index) => (
              <ScrollReveal key={index}>
                <div className="card hover-lift">
                  <img src={product.img} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      {/* WhatsApp Pop-up Message */}
      {showPopup && (
        <div className="product-popup">
          <div className="popup-content">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              <FaTimes />
            </button>
            <div className="popup-body">
              <FaWhatsapp className="popup-icon" />
              <p>Click the WhatsApp button below if you want any of our services.</p>
            </div>
            <div className="popup-arrow"></div>
          </div>
        </div>
      )}
    </>
  );
}