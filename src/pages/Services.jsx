import React, { useState } from "react";
import { FaConciergeBell, FaArrowRight } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import ServiceModal from "../components/ServiceModal";
import "../styles/services.css";
import ServicesHero from "../assets/images/visionary_services_hero.png";
import Disponible from "../assets/images/WhatsApp Image 2026-02-11 at 7.58.22 PM.jpeg";
import Picture6 from "../assets/images/IMG-20251219-WA0026.jpg";
import Personalized from "../assets/images/istockphoto-1314945563-2048x2048.jpg";

const servicesData = [
  {
    id: 1,
    title: "Personalized Meal Planning",
    description: "Customized meals to meet your health goals and dietary requirements.",
    details: "Our experts work with you to create a meal plan that fits your lifestyle, taste preferences, and health objectives. Whether you want to lose weight, build muscle, or manage a health condition, we've got you covered with nutritious and delicious options.",
    image: Personalized
  },
  {
    id: 2,
    title: "Dietary Consultation",
    description: "Expert advice to manage health conditions and nutritional needs.",
    details: "Get professional guidance from our certified nutritionists. We provide comprehensive consultations to help you understand your body's needs and how to optimize your health through better eating habits and targeted nutrition.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Suplements",
    description: "sells of cellular nutritive products like collagen, spirulina, etc.",
    details: "We offer a range of high-quality cellular nutrition products. From collagen to boost skin and joint health to spirulina for energy and detoxification, our supplements are carefully selected to support your overall wellness journey.",
    image: Disponible
  },
  {
    id: 4,
    title: "Weekly Meal Delivery",
    description: "Freshly prepared meals delivered conveniently to your doorstep.",
    details: "Enjoy healthy eating without the hassle. We deliver freshly prepared, chef-cooked meals to your home or office every week. Each meal is balanced, portion-controlled, and ready to enjoy when you are.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "Catering Services",
    description: "Healthy and tailored catering options for events and parties.",
    details: "Make your next event special with our nutritious catering services. We offer tailored menus that cater to various dietary needs, ensuring your guests enjoy delicious food that makes them feel great.",
    image: Picture6
  },
  {
    id: 6,
    title: "Cooking Workshops",
    description: "Learn to prepare nutritious meals with our expert chefs.",
    details: "Join our interactive workshops to master the art of healthy cooking. Our chefs teach you practical skills, time-saving tips, and flavorful recipes that you can easily replicate at home for yourself and your family.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    title: "Meal Subscription Plans",
    description: "Flexible subscription plans to ensure consistent healthy eating.",
    details: "Experience long-term wellness with our subscription models. Choose a plan that works for you and get regular deliveries of nutritious meals, taking the guesswork out of healthy living and ensuring consistency.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    title: "Nutrition Workshops",
    description: "Guidance on diet, wellness, and lifestyle improvements.",
    details: "Deepen your understanding of wellness with our educational workshops. We cover topics like label reading, stress management through food, and creating sustainable healthy habits for a better lifestyle.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 9,
    title: "Food Tasting Events",
    description: "Experience our meals and flavors before making a choice.",
    details: "Not sure where to start? Join one of our food tasting events to sample our signature dishes and ingredients. It's a great way to discover your favorites and learn more about our approach to nutrition and flavor.",
    image: Personalized
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <main className="page container py-section">
        <ScrollReveal>
          <section className="services-hero">
            <div className="hero-icon-container">
              <div className="hero-icon">
                <FaConciergeBell />
              </div>
            </div>
            <h1>Our Services</h1>
            <p>
              Visionary Path Group provides a wide range of services to meet your nutritional and culinary needs. We combine healthy meals with convenience and expertise.
            </p>
            <img src={ServicesHero} alt="Professional Chef Plating" />
          </section>
        </ScrollReveal>

        <section className="service-cards py-section">
          <ScrollReveal>
            <div className="section-title">
              <h2>What We Offer</h2>
            </div>
            <div className="cards">
              {servicesData.map((service) => (
                <div key={service.id} className="card hover-lift">
                  <img src={service.image} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div 
                    className="card-cta" 
                    onClick={() => openModal(service)}
                    role="button"
                    tabIndex={0}
                  >
                    Learn More <FaArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </main>

      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        service={selectedService} 
      />
    </>
  );
}