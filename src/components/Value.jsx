import React from 'react';
import './scss/Value.css';

const ValueSection = () => {
  return (
    <div className="value-section">
      <h2 className="value-title">We Add Value to Novelfield Academy's Journey</h2>
      <div className="value-items">
        <div className="value-item">
          <i className="fas fa-video value-icon"></i>
          <h3 className="value-item-title">Online Classes</h3>
          <p className="value-item-description">
            Flexible online learning options to accommodate diverse schedules.
          </p>
        </div>
        <div className="value-item">
          <i className="fas fa-chalkboard-teacher value-icon"></i>
          <h3 className="value-item-title">Expert Trainers</h3>
          <p className="value-item-description">
            Experienced and knowledgeable faculty dedicated to student success.
          </p>
        </div>
        <div className="value-item">
          <i className="fas fa-user-graduate value-icon"></i>
          <h3 className="value-item-title">Easy to Use</h3>
          <p className="value-item-description">
            Intuitive and user-friendly platform for a seamless learning experience.
          </p>
        </div>
        <div className="value-item">
          <i className="fas fa-rocket value-icon"></i>
          <h3 className="value-item-title">Easy Registration</h3>
          <p className="value-item-description">
            Streamlined registration process to get you started quickly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;