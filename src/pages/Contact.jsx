import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/contact.css";
import PlaceHolder from "../assets/images/images.jpeg"

export default function Contact() {
  return (
    <>
      <main className="page">
        <ScrollReveal>
          <section className="contact-hero container">
            <h1>Contact Us</h1>
            <p>
              Have questions or want to learn more about our meal plans? We're here to help you on your visionary path to better health.
            </p>
            <img src={PlaceHolder} alt="Contact Visionary Path Group" />
          </section>
        </ScrollReveal>

        <section className="contact-info container py-section">
          <ScrollReveal>
            <div className="section-title">
              <h2>Connect with Us</h2>
            </div>
            <div className="cards">
              <div className="card glass hover-lift">
                <h3>Email Us</h3>
                <p>visionarypathgroup@gmail.com</p>
              </div>
              <div className="card glass hover-lift">
                <h3>Call Us</h3>
                <p>+237 653 717 245</p>
              </div>
              <div className="card glass hover-lift">
                <h3>Visit Us</h3>
                <p>Etoug-ebe, Yaoundé, Cameroon</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="contact-form-section container">
          <ScrollReveal>
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Your Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email Address" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="How can we help you?" rows="6" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}
