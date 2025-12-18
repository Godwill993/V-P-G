import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import Loader from "../components/Loader";
import WhatsAppButton from "../components/WhatsAppButton";  
import "../styles/home.css";
import { useEffect, useState } from "react";




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
<section className="hero">
<h1>Healthy Meals, Tailored for Your Life</h1>
<p>
Visionary Path Group delivers nutritious, carefully designed meals for diabetics, pregnant women, and health-conscious individuals.
</p>
<p>
We focus on delivering fresh ingredients, expert nutritional guidance, and convenient weekly meal delivery.
</p>
</section>
</ScrollReveal>


<ScrollReveal>
<section className="features">
<h2>Why Choose Us?</h2>
<div className="cards">
<div className="card">
<img src="https://via.placeholder.com/300x200" alt="Personalized Meal" />
<h3>Personalized Meal Plans</h3>
<p>Meals designed according to your health and dietary needs.</p>
</div>
<div className="card">
<img src="https://via.placeholder.com/300x200" alt="Fresh Ingredients" />
<h3>Fresh Ingredients</h3>
<p>We use only the freshest locally sourced ingredients.</p>
</div>
<div className="card">
<img src="https://via.placeholder.com/300x200" alt="Delivery" />
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
<p>“The diabetic meal plan helped me maintain my blood sugar perfectly.”</p>
<h4>- Jane D.</h4>
</div>
<div className="card">
<p>“Pregnancy meals were delicious and nutritionally balanced.”</p>
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
To improve lives through healthy eating by providing tailored meals and nutritional guidance for all individuals.
</p>
</section>
</ScrollReveal>
</main>
<WhatsAppButton />
<Footer />
</>
);
}