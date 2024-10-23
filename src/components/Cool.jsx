import React, { useEffect, useRef } from 'react';
import logo from"../assets/logo.png"
import Zimsec from"../assets/zimsec.jpg"


const LogoSection = () => {
  const logos = [
   logo,
    Zimsec,

  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let startPosition =-10; // Start position in vw
    const speed = 0.2; // Adjust speed here (lower is slower)

    const moveSlider = () => {
      // Update position
      startPosition += speed; 
      
      // Reset position when logos move out of view
      if (startPosition > 100) {
        startPosition = -100; // Reset to start from the left
      }

      slider.style.transform = `translateX(${startPosition}vw)`; // Move the slider
      requestAnimationFrame(moveSlider); // Continue the animation
    };
    moveSlider(); // Start moving
  }, []);

  return (
    <div className="relative h-72 bg-gradient-to-r from-[#006eff] to-[#001424] overflow-hidden mb-[60px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-gray-800 z-10">
        Novelfield Academy
      </div>
      <div
        ref={sliderRef}
        className="absolute top-1/2 flex transition-transform duration-300"
      >
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="w-24 mx-5" />
        ))}
      </div>
    </div>
  );
};

export default LogoSection;