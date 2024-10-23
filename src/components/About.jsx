import React from 'react';
import './scss/About.css'; // Import the CSS for styling


const AboutSection = () => {
  return (
    <div id="about">

    <div className="about-section">
      <h2 className="about-title">About Us</h2>
      <div className="content-container items-center mb-[70px]">
        <div className="video-container">
          <iframe
            title="Novefield High School Introduction"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100088852009269%2Fvideos%2F1093922905277087%2F&show_text=false&width=560&t=0" // Replace with your video URL
            frameBorder="0"
            allowFullScreen
            className="about-video"
          ></iframe>
        </div>
        <div className="text-container ">
          <p className="about-text pt-[30px]">
            Novelfield High School is dedicated to providing a comprehensive educational experience
            that empowers students to excel academically and grow personally. Our commitment to
            excellence is reflected in our innovative teaching methods, extracurricular activities,
            and supportive community.
          </p>
        </div>
      </div>
      <div className="additional-text">
        <p className="about-text">
          Novelfield Academy welcomes all parents and students. We are delighted to inform you 
          that we are an international institution dedicated to providing the best secondary 
          education for all learners. Novelfield Academy offers both boarding and day school 
          options, and we follow the Cambridge curriculum. 
        </p>
        <p className="about-text">
          We go beyond basic educational needs by providing co-curricular activities, grooming 
          and etiquette talks, as well as professional counseling and spiritual support for our 
          learners. Novelfield Academy is more than a school; it is a home for every student!
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
