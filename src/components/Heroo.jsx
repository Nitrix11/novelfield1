// src/CarouselBackground.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import pic1 from "../assets/Hero.png";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";

const images = [
    pic1,
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
];

const CarouselBackground = () => {
    const handleClick = () => {
        // Open WhatsApp chat
        window.open('https://wa.me/+263772331530', '_blank');
    };
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-[#000]'>
            <div className="carousel-background" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
                <div id='text'>
                    <h1>
                        Learn From The <span><br /></span>Best High School
                    </h1>
                    <p>
                    Empowering students to achieve excellence <span><br /></span>through innovative learning 
                    </p>
                    <div className='buttonss'>
                        <button className="whatsapp-button" onClick={handleClick}>
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <span> WhatsApp</span>
                        </button>
                        <button className='button'>
                            <a href="#about">About Us</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselBackground;