import "./OurProcess.css";
import {
  FaSolarPanel,
  FaDraftingCompass,
  FaTools,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSolarPanel />,
    title: "Site Survey & Consultation",
    desc: "Understanding your site and energy requirements.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Custom System Design",
    desc: "Optimized solar system planning & layout.",
  },
  {
    icon: <FaTools />,
    title: "Installation & Execution",
    desc: "Safe and precise installation by experts.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Testing & Commissioning",
    desc: "Ensuring peak performance and safety.",
  },
  {
    icon: <FaHeadset />,
    title: "After-Sales Support",
    desc: "Reliable service & long-term maintenance.",
  },
];

function OurProcess() {
  return (
    <section className="process-section">
      <h2 className="process-heading">Our Work Process</h2>
      <p className="process-subtitle">
        Simple • Transparent • Reliable
      </p>

      <div className="process-timeline">
        {steps.map((step, index) => (
          <div className="process-item" key={index}>
            <div className="process-icon">{step.icon}</div>
            <div className="process-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default OurProcess;