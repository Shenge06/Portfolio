import React from 'react';
import './About.css';
import CV from '../../assets/documents/Nkululeko_Buthelezi_CV.pdf';
import profileImage from '../../assets/images/nkululeko_buthelezi.jpg';

const About = () => {
  return (
    <section id="about" className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img src={profileImage} alt="Nkululeko Buthelezi" className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-md mb-4 md:mb-0 md:mr-6 border-4 border-gray-300" />
        <div>
          <p className="text-gray-700">
            I am a Graduate from HyperionDev's Software Engineering bootcamp,<br />
            with a strong focus on Back-end development.<br />
            I have experience in Python application development, database interaction, and web application creation using Django, <br />
            demonstrating my proficiency in back-end development and software engineering.
          </p>
          <a href={CV} download="Nkululeko Buthelezi CV" className="download-cv">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 19l6-6v-11h-8zM16 13h-4v-2h4z" fill="#ff7f50"></path>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
