import "./SideActions.css";

function SideActions() {
  return (
    <div className="side-actions">
      {/* WhatsApp */}
      <a
        href="https://wa.me/7878655054?text=Hello%20HR%20Power%20Energy.%20I%20am%20interested%20in%20your%20solar%20energy%20solutions.%20Please%20share%20details%20regarding%20pricing,%20subsidy,%20and%20installation%20process."
        target="_blank"
        rel="noopener noreferrer"
        className="action-btn whatsapp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Phone */}
      <a href="tel:+917878655054" className="action-btn phone">
        <i className="fa-solid fa-phone"></i>
      </a>

      {/* Email */}
      <a href="mailto:hrpowerbikaner@gmail.com" className="action-btn email">
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  );
}

export default SideActions;
