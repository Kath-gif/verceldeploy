// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contacts-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out!</p>
      <div className="social-media-icons">
        <a href="https://www.facebook.com/katrina.patisar?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/cathrinapatisar/profilecard/?igsh=MWJ1dGpuZG5uOG12bA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://github.com/Kath-gif" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
      <div className="email-container">
        <p>Email me at:</p>
        <a href="patisarcathrina@gmail.com" className="email-link">
          patisarcathrina@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
