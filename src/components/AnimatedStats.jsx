import React from "react";
import { FaUtensils, FaUsers, FaTruck, FaAward } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import "../styles/animatedStats.css";

const stats = [
  {
    icon: <FaUtensils />,
    value: "50k+",
    label: "Meals Delivered",
    color: "#10b981",
  },
  {
    icon: <FaUsers />,
    value: "12k+",
    label: "Happy Clients",
    color: "#3b82f6",
  },
  {
    icon: <FaTruck />,
    value: "24/7",
    label: "Fast Delivery",
    color: "#f59e0b",
  },
  {
    icon: <FaAward />,
    value: "15+",
    label: "Awards Won",
    color: "#8b5cf6",
  },
];

export default function AnimatedStats() {
  return (
    <section className="stats-section container py-section">
      <ScrollReveal>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ "--accent-color": stat.color }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
