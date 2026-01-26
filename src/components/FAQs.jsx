import "./pages.css";


import FaqHero from "./FaqHero";
import FAQSection from "./FAQSection";
import ContactCards from "./ContactCards";

function FAQs() {
  return (
    <div className="page section">
      <FaqHero />
      <FAQSection />
      <ContactCards />
    </div>
  );
}

export default FAQs;
