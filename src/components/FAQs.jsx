import "./pages.css";


import FaqHero from "./FaqHero";
// import AskQuestion from "./AskQuestion";
import FAQSection from "./FAQSection";
import ContactCards from "./ContactCards";

function FAQs() {
  return (
    <div className="page section">
      <FaqHero />
      {/* <AskQuestion /> */}
      <FAQSection />
      <ContactCards />
    </div>
  );
}

export default FAQs;
