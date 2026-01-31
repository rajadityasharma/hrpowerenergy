import { useState, useEffect } from "react";
import "./Home.css";
import WhySolar from "../components/WhySolar";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.png";
import AboutSection from "./AboutSection";
import ServiceDetails from "./ServiceDetails";
import WhyChooseUs from "./WhyChooseUs";
import EmpanelledMarquee from "./EmpanelledMarquee";
import DirectorMessage from "./DirectorMessage";
import CustomerReviews from "./CustomerReviews";
import ContactSection from "./ContactSection";
import ContactCards from "./ContactCards";
const slides = [
  {
    title: "Powering a Greener Tomorrow with Reliable and Sustainable Solar Energy Solutions",
    image: slide1,
  },
  {
    title: "Smart Solar Solutions Designed for Homes, Businesses, and a Cleaner Future",
    image: slide2,
  },
  {
    title: "Energy You Can Trust Backed by Innovation, Efficiency, and Long-Term Reliability",
    image: slide3,
  },
  {
    title: "Clean Renewable Energy Systems Empowering a Brighter and Sustainable Tomorrow",
    image: slide4,
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
       <ServiceDetails />
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