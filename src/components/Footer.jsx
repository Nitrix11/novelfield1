// src/Footer.js
import "./scss/footer.css";

function Footer() {
    return (
        <>
            <footer style={{ backgroundColor: "#3498db", color: "#fff", padding: "20px" }}>
                <hr />
                <div className="main">
                    <div className="about">
                        <h2>About Us</h2>
                        <p className="flex items-center justify-center w-[60%] pb-[30px]"> 
                          
                            Novelfield Academy is dedicated to fostering a love for learning and academic excellence. Our experienced educators provide a supportive environment that nurtures creativity and critical thinking.
                        </p>
                    </div>
                    <div className="quick-links">
                        <h2>Quick Links</h2>
                        <p><a href="#home">Home</a></p>
                        <p><a href="#about">About Us</a></p>
                        <p><a href="#admissions">Gallery</a></p>
                        <p><a href="#contact">Contact</a></p>
                    </div>
                    <div className="contact">
                        <h2>Contact Us</h2>
                        <p>Email: <a href="mailto:info@novelfieldacademy.com">info@novelfieldacademy.com</a></p>
                        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                        <p>Address: 123 Learning Lane, Knowledge City, Country</p>
                    </div>
                    <div className="follow-us">
                        <h2>Follow Us</h2>
                        <p>
                            <a href="#facebook">Facebook</a> | 
                            <a href="#twitter"> Twitter</a> | 
                            <a href="#instagram"> Instagram</a> | 
                            <a href="#linkedin"> LinkedIn</a>
                        </p>
                    </div>
                </div>
                <div className="hr">
                    <hr />
                </div>
                <h3 className="text-center">
                    © 2024 Novelfield Academy. All rights reserved.
                </h3>
                <p className="text-center">
                    <a href="#privacy" style={{ color: "#fff" }}>Privacy Policy</a> | 
                    <a href="#terms" style={{ color: "#fff" }}> Terms of Service</a>
                </p>
            </footer>
        </>
    );
}

export default Footer;