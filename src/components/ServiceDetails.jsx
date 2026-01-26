import "./ServiceDetails.css";
import solarImg from "../assets/service-solar.png";

export default function ServiceDetails() {
  return (
    <section className="service-details">
      <div className="service-details-wrapper">
        <img src={solarImg} alt="Solar Service" />

        <div className="service-details-content">
          <h2>Complete Solar EPC Solutions</h2>
          <p>
            HR Power Energy delivers turnkey solar EPC services —
            from design and engineering to installation and
            commissioning.
          </p>

          <ul>
            <li>✔ Residential Rooftop Solar</li>
            <li>✔ Commercial & Industrial Projects</li>
            <li>✔ On-Grid & Hybrid Systems</li>
            <li>✔ Net Metering Assistance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
