import { useState } from "react";
import "./GallerySection.css";

/* IMPORT IMAGES (ADD UNLIMITED) */
import img1 from "../assets/logo1.png";
import img2 from "../assets/logo2.png";
import img3 from "../assets/logo3.png";
import img4 from "../assets/logo4.png";
import img5 from "../assets/logo5.png";

const images = [img1, img2, img3, img4, img5];

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">Our Project Gallery</h2>
      <p className="gallery-sub">
        A glimpse of our solar installations and successful projects
      </p>

      {/* GALLERY GRID */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelectedImg(img)}
          >
            <img src={img} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImg && (
        <div className="gallery-modal" onClick={() => setSelectedImg(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImg} alt="Full View" />
        </div>
      )}
    </section>
  );
}
