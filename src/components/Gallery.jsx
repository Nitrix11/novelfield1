import React from 'react';
import"./scss/Gallery.css";
import pic1 from"../assets/hero1.jpg"
import pic2 from"../assets/hero2.jpg"
import pic3 from"../assets/hero3.jpg"
import pic4 from"../assets/hero4.jpg"
import './scss/Gallery.css';
import image1 from '../assets/hero1.jpg';
import image2 from '../assets/hero2.jpg';
import image3 from '../assets/hero3.jpg';
import image4 from '../assets/hero4.jpg';
import image5 from '../assets/hero5.jpg';
import image6 from '../assets/hero6.jpg';
import image7 from '../assets/hero7.png';
import image8 from '../assets/hero8.jpg';
import image9 from '../assets/hero9.jpg';
import image10 from '../assets/hero10.jpg';
import image11 from '../assets/hero11.jpg';
import image12 from '../assets/hero12.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const GallerySection = () => {
  return (
    <div id='gallery' className="gallery-section">
      <h2 className="gallery-title">Explore Novelfield Academy</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-item gallery-item-${index + 1} gallery-animation-${
              index % 4
            }`}
          >
            <div className="gallery-overlay">
              <i className={`fas fa-search-plus gallery-zoom-icon gallery-zoom-icon-${index}`}></i>
            </div>
            <img src={image} alt={`Novefield Academy - ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;