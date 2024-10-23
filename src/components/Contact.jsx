import React, { useState } from 'react';
import "./scss/Contact.css"

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <div  id="contact-container" className="contact-container mt-[150px] mb-[100px]">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-details">
                <p className='h1'>Novelfield</p>
                <p>Cell: 0739595125</p>
                <p>Email: novelfield@gmail.com</p>
                <p>Location:No 1 Trafford Close Avonlea, Harare</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-input"
                />
                <input
                    type="email"
                  
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="form-textarea"
                />
                <button type="submit" className="form-button">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;
