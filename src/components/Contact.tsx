import React, { useRef } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        alert('Your message has been sent successfully!');
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className=" bg-emerald-100 py-16 px-6" role="region" aria-labelledby="contact-heading">
      <div className="container-standard max-w-6xl mx-auto">
        <h2 id="contact-heading" className=" text-4xl font-extrabold mb-12 text-center text-gray-800">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Contact Info Section on the Left */}
          <div className="flex-shrink-0 w-full md:w-[45%] flex flex-col items-center text-center">
            <img
              src="/assets/Self Portrait Edit.jpg"
              alt="Charles Banks"
              className="w-48 h-48 object-cover rounded-full shadow-lg mb-6"
            />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Charles Banks</h3>

            <div className="text-gray-700 text-lg space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-3 text-blue-500" size={24} aria-hidden="true" />
                <a
                  href="mailto:charlesbanks238@gmail.com"
                  className="font-medium hover:text-blue-500"
                  aria-label="Email Charles banks"
                >
                  charlesbanks238@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start">
                <FaLinkedin className="mr-3 text-blue-500" size={24} aria-hidden="true" />
                <a
                  href="https://www.linkedin.com/in/charles-t-banks-jr-6b982b152/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-blue-500"
                  aria-label="Charles Banks' LinkedIn profile"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form on the Right */}
          <div className="flex-1 w-full md:w-[45%]">
            <form
              ref={formRef}
              action="https://formspree.io/f/mbljenez"
              method="POST"
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;