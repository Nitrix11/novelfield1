// src/CarouselBackground.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import pic1 from"../assets/Hero.png"
const images = [
    'url(../src/assets/Hero.png)',
    'url(../src/assets/hero1.jpg)',
    'url(../src/assets/hero2.jpg)',
    'url(../src/assets/hero3.jpg)',
    'url(../src/assets/hero4.jpg)',
    'url(../src/assets/hero5.jpg)',
    'url(../src/assets/hero6.jpg)',
 
];

const CarouselBackground = () => {
    const handleClick = () => {
        // Add your WhatsApp link or functionality here
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
    <div className='bg-[#000] '>
        <div className="carousel-background " style={{ backgroundImage: images[currentIndex] }}>

                <div id='text'>
        <h1 className='' >
        Learn From The <span><br /></span>Best High School
     </h1>
    
     <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing<span><br /></span> elit. Fugit sed ipsa quasi!</p>
     <div className=' buttonss'>
     <button className="whatsapp-button " onClick={handleClick}>
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