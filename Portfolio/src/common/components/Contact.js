import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Contact</h2>
      <form action="https://formspree.io/f/xwkzjvpn" method="POST" className="max-w-xl mx-auto">
        <div className="mb-4">
          <label for="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label for="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label for="message" className="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea id="message" name="message" rows="5" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 rounded-md shadow-md hover:bg-orange-600 transition-colors duration-300">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
