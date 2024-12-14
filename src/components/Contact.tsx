import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-sky-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">Contact Me</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/assets/jim-macur-headshot.jpeg"
              alt="Jim Macur"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-4xl font-bold text-gray-700 mb-6">Jim Macur</h3>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-center text-2xl">
                <FaPhone className="mr-4 text-blue-500" size={32} />
                <span className="font-medium">+1 (720) 563-1705</span>
              </div>
              <div className="flex items-center text-2xl">
                <FaEnvelope className="mr-4 text-blue-500" size={32} />
                <a href="mailto:jim.macur@gmail.com" className="font-medium hover:text-blue-500">
                  jim.macur@gmail.com
                </a>
              </div>
              <div className="flex items-center text-2xl">
                <FaLinkedin className="mr-4 text-blue-500" size={32} />
                <a
                  href="https://www.linkedin.com/in/jim-macur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-blue-500"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;