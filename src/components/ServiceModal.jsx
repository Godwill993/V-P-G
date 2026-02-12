import React from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";
import "../styles/ServiceModal.css";

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  const whatsappNumber = "237653717245";
  const whatsappMessage = `Hello Visionary Path Group, I'm interested in learning more about your ${service.title} service.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>
        
        <img src={service.image} alt={service.title} className="modal-image" />
        
        <div className="modal-body">
          <h2>{service.title}</h2>
          <p>{service.details || service.description}</p>
          
          <div className="modal-actions">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-btn"
            >
              <FaWhatsapp /> Enquire via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
