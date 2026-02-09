import React from "react";
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
  return (
    <>
      <main className="page container">
        <ScrollReveal>
          <section className="products-hero">
            <h1>Our Products</h1>
            <p>
              Explore our wide range of healthy meals and nutrition packs, designed for specific dietary needs and delivered fresh to your doorstep.
            </p>
            <img src={Picture8} alt="Healthy Products Showcase" />
          </section>
        </ScrollReveal>

        <section className="product-cards py-section">
          <ScrollReveal>
            <div className="section-title">
              <h2>Our Product Range</h2>
            </div>
            <div className="cards">
              <div className="card hover-lift">
                <img src={Picture1} alt="Diabetic Meals" />
                <h3>Diabetic Meals</h3>
                <p>Balanced meals designed to regulate blood sugar and provide essential nutrients.</p>
              </div>

              <div className="card hover-lift">
                <img src={Picture2} alt="Pregnancy Nutrition Packs" />
                <h3>Pregnancy Nutrition Packs</h3>
                <p>Specially designed meals to support the health of expecting mothers.</p>
              </div>

              <div className="card hover-lift">
                <img src={Picture3} alt="Vegan Options" />
                <h3>Vegan Options</h3>
                <p>Plant-based meals crafted for flavor, nutrition, and wellness.</p>
              </div>

              <div className="card hover-lift">
                <img src={Picture4} alt="Heart-Friendly Meals" />
                <h3>Heart-Friendly Meals</h3>
                <p>Low-sodium and heart-healthy meals designed for cardiovascular wellness.</p>
              </div>

              <div className="card hover-lift">
                <img src={Picture5} alt="Gluten-Free Meals" />
                <h3>Gluten-Free Meals</h3>
                <p>Meals free from gluten for those with sensitivities or celiac disease.</p>
              </div>

              <div className="card hover-lift">
                <img src={Picture6} alt="Keto-Friendly Meals" />
                <h3>Keto-Friendly Meals</h3>
                <p>Low-carb, high-protein meals perfect for ketogenic diets.</p>
              </div>

              <div className="card hover-lift">
                <img src={Picture7} alt="Snack Packs" />
                <h3>Snack Packs</h3>
                <p>Healthy snacks to curb cravings without compromising your diet.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1622484211148-716598e04144?auto=format&fit=crop&q=80&w=600" alt="Juices & Smoothies" />
                <h3>Juices & Smoothies</h3>
                <p>Freshly prepared beverages packed with nutrients and vitamins.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80&w=600" alt="Muscle Gain Packs" />
                <h3>Muscle Gain Packs</h3>
                <p>High-protein, calorie-rich meals designed to support muscle growth and recovery.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=600" alt="Post-Surgery Recovery" />
                <h3>Post-Surgery Recovery</h3>
                <p>Nutritious, easy-to-digest meals specifically curated to support the healing process.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" alt="Organic Salad Bowls" />
                <h3>Organic Salad Bowls</h3>
                <p>Fresh, fiber-rich plant-based options made with locally sourced organic ingredients.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=80&w=600" alt="Detox Juice Cleanses" />
                <h3>Detox Juice Cleanses</h3>
                <p>Cold-pressed, nutrient-dense juices designed to refresh and revitalize your body.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" alt="Family Dinner Bundles" />
                <h3>Family Dinner Bundles</h3>
                <p>Healthy, wholesome bulk meals perfect for sharing with the entire family at home.</p>
              </div>

              <div className="card hover-lift">
                <img src="https://images.unsplash.com/photo-1540333503348-845ad3858139?auto=format&fit=crop&q=80&w=600" alt="Office Lunch Boxes" />
                <h3>Office Lunch Boxes</h3>
                <p>Conveniently packed, balanced midday meals specifically for a busy workday.</p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}