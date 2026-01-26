import "./pages.css";

import ServicesHero from "./ServicesHero";
import ServicesSection from "./ServicesSection";
import IndustriesWeServe from "./IndustriesWeServe";
import WhyChooseUs from "./WhyChooseUs";
import ServiceDetails from "./ServiceDetails";
import CustomerReviews from "./CustomerReviews";
import ContactSection from "./ContactSection";
import ContactCards from "./ContactCards";


function Services() {
  return (
    <div className="page section">
      <ServicesHero />
      <ServiceDetails />
      <ServicesSection />
      <IndustriesWeServe />
      <WhyChooseUs />
      <CustomerReviews />
      <ContactSection />
      <ContactCards />
    </div>
  );
}

export default Services;
