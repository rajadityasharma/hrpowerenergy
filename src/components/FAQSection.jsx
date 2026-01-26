import { useState } from "react";
import "./FAQSection.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    q: "What is solar energy and how does it work?",
    a: "Solar energy is generated from sunlight using solar panels. These panels convert sunlight into electricity through photovoltaic cells, which can be used to power homes, offices, and industries."
  },
  {
    q: "Is solar power suitable for my home or business?",
    a: "Yes, solar power is suitable for residential, commercial, and industrial properties. A site survey helps determine system size and energy generation capacity."
  },
  {
    q: "How much can I save by installing solar panels?",
    a: "Savings depend on your electricity usage and system size. On average, users can reduce electricity bills by 60–90%."
  },
  {
    q: "What is the lifespan of a solar system?",
    a: "Solar panels typically last 25–30 years with minimal performance degradation when properly maintained."
  },
  {
    q: "Does solar work during cloudy days or at night?",
    a: "Solar panels work during cloudy days with reduced efficiency. At night, stored energy from batteries or grid power is used."
  },
  {
    q: "Are government subsidies available for solar installation?",
    a: "Yes, government subsidies are available for eligible rooftop solar installations. Our team assists with subsidy and documentation support."
  },
  {
    q: "How much maintenance does a solar system require?",
    a: "Solar systems require very low maintenance, mainly periodic cleaning and basic inspections."
  },
  {
    q: "How long does installation take?",
    a: "Most residential installations are completed within 7–10 days after approvals and site readiness."
  },
  {
    q: "Can solar panels increase property value?",
    a: "Yes, properties with solar installations often have higher resale value due to reduced electricity costs."
  },
  {
    q: "What happens if there is excess solar power?",
    a: "Excess power can be exported to the grid through net metering, helping reduce future electricity bills."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <p className="faq-sub">
        Everything you need to know about solar energy and our services
      </p>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h4>{item.q}</h4>
              <span>
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
