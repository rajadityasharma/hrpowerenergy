import "./pages.css";


import BlogHero from "./BlogHero";
import GallerySection from "./GallerySection";
import ContactCards from "./ContactCards";
function ContactUs() {
  return (
    <div className="page section contact-info">
      <BlogHero />
      <GallerySection />
      <ContactCards />
    </div>
  );
}

export default ContactUs;
