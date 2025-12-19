import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

export default function WhatsAppButton({
  phone = "237653717245",
  message = "Hello Visionary Path Group, I’d like to make an enquiry.",
}) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Chat with Visionary Path Group on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
