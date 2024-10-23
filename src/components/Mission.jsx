import React from 'react';
import { FaLightbulb, FaRocket } from 'react-icons/fa';
import './scss/Mission.css';

const MissionSection = () => {
  return (
    <div className="mission-section">
      <div className="mission-content">
        <div className="mission-text">
          <h2 className="mission-title">Novelfield Academy's Mission</h2>
          <p className="mission-description">
            Novelfield Academy is dedicated to providing a comprehensive educational
            experience that empowers students to excel academically and grow personally.
            Our commitment to excellence is reflected in our innovative teaching methods,
            extracurricular activities, and supportive community.
          </p>
        </div>
        <div className="mission-icons">
          <div className="icon-container">
            <FaLightbulb size={50} color="#3498db" className="icon-animation" />
            <p className="icon-text">Innovative Teaching</p>
          </div>
          <div className="icon-container">
            <FaRocket size={50} color="#3498db" className="icon-animation" />
            <p className="icon-text">Enriching Activities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;