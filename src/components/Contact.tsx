import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-sky-100 py-16 px-6" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="contact-heading" className="text-4xl font-extrabold mb-12 text-center text-gray-800">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/assets/jim-macur-headshot.jpeg"
              alt="Jim Macur"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Contact Info Section */}
          <div className="text-gray-700 text-lg space-y-6" aria-labelledby="contact-info-heading">
            <h3 id="contact-info-heading" className="text-3xl font-bold mb-4 text-gray-800">
              Jim Macur
            </h3>

            <div className="flex items-center">
              <FaPhone className="mr-3 text-blue-500" size={24} aria-hidden="true" />
              <span className="font-medium" aria-label="Phone number">+1 (720) 563-1705</span>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-blue-500" size={24} aria-hidden="true" />
              <a
                href="mailto:jim.macur@gmail.com"
                className="font-medium hover:text-blue-500"
                aria-label="Email Jim Macur"
              >
                jim.macur@gmail.com
              </a>
            </div>

            <div className="flex items-center">
              <FaLinkedin className="mr-3 text-blue-500" size={24} aria-hidden="true" />
              <a
                href="https://www.linkedin.com/in/jim-macur"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-blue-500"
                aria-label="Jim Macur's LinkedIn profile"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;