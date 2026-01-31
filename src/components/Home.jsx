import { useState, useEffect } from "react";
import "./Home.css";

import WhySolar from "../components/WhySolar";
import AboutSection from "./AboutSection";
import ServiceDetails from "./ServiceDetails";
import WhyChooseUs from "./WhyChooseUs";
import EmpanelledMarquee from "./EmpanelledMarquee";
import DirectorMessage from "./DirectorMessage";
import CustomerReviews from "./CustomerReviews";
import ContactSection from "./ContactSection";
import ContactCards from "./ContactCards";

import slide1 from "../assets/HR_Power_energy_slide1.jpg";
import slide2 from "../assets/HR_Power_energy_slide2.jpg";
import slide3 from "../assets/HR_Power_energy_slide3.jpg";
import slide4 from "../assets/HR_Power_energy_slide4.png";
import slide5 from "../assets/HR_Power_energy_slide5.png";
import slide6 from "../assets/HR_Power_energy_slide6.png";
import slide7 from "../assets/HR_Power_energy_slide7.png";
import slide8 from "../assets/HR_Power_energy_slide8.png";

const slides = [
  { title: "Powering a Greener Tomorrow with Reliable and Sustainable Solar Energy Solutions", image: slide1 },
  { title: "Smart Solar Solutions Designed for Homes, Businesses, and a Cleaner Future", image: slide2 },
  { title: "Energy You Can Trust Backed by Innovation, Efficiency, and Long-Term Reliability", image: slide3 },
  { title: "Clean Renewable Energy Systems Empowering a Brighter and Sustainable Tomorrow", image: slide4 },
  { title: "Clean Renewable Energy Systems Empowering a Brighter and Sustainable Tomorrow", image: slide5 },
  { title: "Clean Renewable Energy Systems Empowering a Brighter and Sustainable Tomorrow", image: slide6 },
  { title: "Clean Renewable Energy Systems Empowering a Brighter and Sustainable Tomorrow", image: slide7 },
  { title: "Clean Renewable Energy Systems Empowering a Brighter and Sustainable Tomorrow", image: slide8 },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <main>
      {/* HERO SLIDER */}
      <section className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <div className="content">
                <h1>{slide.title}</h1>
              </div>
            </div>
          </div>
        ))}

        {/* SLIDE NUMBER */}
        <div className="slide-count">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>

        {/* BOTTOM CONTROLS */}
        <div className="slider-controls">
          <button className="arrow" onClick={prevSlide}>❮</button>

          <span className="slide-number">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>

          <button className="arrow" onClick={nextSlide}>❯</button>
        </div>
      </section>

      <WhySolar />
      <AboutSection />
      <ServiceDetails />
      <WhyChooseUs />
      <EmpanelledMarquee />
      <DirectorMessage />
      <CustomerReviews />
      <ContactSection />
      <ContactCards />
    </main>
  );
}

export default Home;
