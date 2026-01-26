import "./pages.css";

import AboutSection from "./AboutSection";
import MissionVision from "./MissionVision";
import DirectorMessage from "./DirectorMessage";
import EmpanelledMarquee from "./EmpanelledMarquee";
import OurProcess from "./OurProcess";
import ContactCards from "./ContactCards";

function About() {
  return (
    <div className="page section">
      <AboutSection />
      <MissionVision />
      <DirectorMessage />
      <EmpanelledMarquee />
      <OurProcess />
      <ContactCards />
    </div>
  );
}

export default About;
