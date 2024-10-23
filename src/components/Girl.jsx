import React from 'react';
import './scss/Girl.css';
import girl from"../assets/girl2.png"

const CoachingSection = () => {
  return (
    <div className="coaching-section">
      <div className="coaching-content">
        <div className="coaching-info">
          <h2 className="coaching-title">Novelfield Academy's Personalized Coaching</h2>
          <p className="coaching-description">
            At Novelfield Academy, we believe that every student deserves personalized attention
            and support to reach their full potential. Our team of experienced educators and
            counselors are dedicated to guiding our students through their academic and
            personal journeys.
          </p>
          <ul className="coaching-features">
            <li>One-on-One Mentoring</li>
            <li>Mentor-Certified Advisors</li>
            <li>Collaborative Problem-Solving</li>
           
          </ul>
        </div>
        <div className="coaching-image">
          <img src={girl} alt="Novelfield Academy Coaching" />
        </div>
      </div>
    </div>
  );
};

export default CoachingSection;