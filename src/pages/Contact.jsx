import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/contact.css";
import WhatsAppButton from "../components/WhatsAppButton";  
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

export default function Contact() {
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
          <section className="contact-hero">
            <h1>Contact Us</h1>
            <p>
              Have questions or want to learn more about our meal plans? Reach out to us!
            </p>
            <img src="https://via.placeholder.com/800x400" alt="Contact Us" />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="contact-info">
            <h2>Our Contact Details</h2>
            <div className="cards">
              <div className="card">
                <h3>Email</h3>
                <p>info@vpg.com</p>
              </div>
              <div className="card">
                <h3>Phone</h3>
                <p>+237 XXX XXX </p>
              </div>
              <div className="card">
                <h3>Address</h3>
                <p>123 Healthy Street, Yaoundé, Cameroon</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </section>
        </ScrollReveal>
      </main>
        <WhatsAppButton />
      <Footer />
    </>
  );
}
