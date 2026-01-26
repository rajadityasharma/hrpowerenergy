import { useState, useEffect } from "react";
import "./Home.css";
import WhySolar from "../components/WhySolar";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import AboutSection from "./AboutSection";
import Se from "./ServicesSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import EmpanelledMarquee from "./EmpanelledMarquee";
import DirectorMessage from "./DirectorMessage";
import CustomerReviews from "./CustomerReviews";
import ContactSection from "./ContactSection";
import ContactCards from "./ContactCards";
const slides = [
  {
    title: "Powering a Greener Tomorrow",
    desc: "Reliable and sustainable energy solutions for a better future.",
    image: slide1,
  },
  {
    title: "Smart Solar Solutions",
    desc: "Clean and affordable solar systems for homes and businesses.",
    image: slide2,
  },
  {
    title: "Energy You Can Trust",
    desc: "Innovation, efficiency, and long-term reliability.",
    image: slide3,
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Slider Section */}
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
                <p>{slide.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
       <WhySolar />
       <AboutSection />
       <ServicesSection />
       <WhyChooseUs />
       <EmpanelledMarquee />
       <DirectorMessage />
       <CustomerReviews />
       <ContactSection />
       < ContactCards />
    </main>
  );
}

export default Home;