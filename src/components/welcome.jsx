import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaUsers } from 'react-icons/fa'; // Import icons
import '../components/scss/welcome.css'; // Import the CSS for styling

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <h1 className="welcome-title">Welcome to Novelfield High School!</h1>
      <p className="welcome-text">
        At Novelfield High School, we are dedicated to fostering a nurturing and dynamic
        learning environment where students can thrive academically, socially, and personally.
      </p>

      <div className="card-container">
        <div className="card">
          <FaGraduationCap size={50} color="#3498db" />
          <h3>Academic Excellence</h3>
          <p>We strive for the highest standards in education and learning.</p>
        </div>
        <div className="card">
          <FaChalkboardTeacher size={50} color="#3498db" />
          <h3>Dedicated Faculty</h3>
          <p>Our teachers are committed to your success and growth.</p>
        </div>
        <div className="card">
          <FaUsers size={50} color="#3498db" />
          <h3>Community Spirit</h3>
          <p>We foster a strong community that supports and uplifts each other.</p>
        </div>
      </div>

      <p className="welcome-text">
        Our committed faculty and staff work tirelessly to inspire and empower each student
        to reach their full potential.
      </p>
      <p className="welcome-text">
        Join us in our mission to shape future leaders and lifelong learners. Welcome to
        the Novelfield family!
      </p>
      <button className="welcome-button">Learn More</button>
    </div>
  );
};

export default WelcomeSection;