import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SideActions from "./components/SideActions";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import FAQs from "./components/FAQs";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <SideActions />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
