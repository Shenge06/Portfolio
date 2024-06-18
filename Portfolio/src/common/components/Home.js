import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-4xl font-extrabold text-gray-800">Nkululeko Buthelezi</h1>
        <p className="text-2xl text-gray-600 mt-2">Back-End Software Developer (Johannesburg, South Africa)</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center mt-6">
        <div className="profile-image rounded-full shadow-md mb-4 md:mb-0"></div>
        <p className="text-gray-700">
          I'm always eager to learn and grow as a developer. <br />
          I'm excited to put my skills to the test on real-world projects <br />
          and collaborate effectively with front-end developers <br />
          to create the best possible user experience.
        </p>
        <ul className="skills-list flex flex-wrap mt-4">
          <li className="skill-item mr-4">
            <i className="fas fa-code text-blue-500 text-3xl"></i>
          </li>
          <li className="skill-item mr-4">
            <i className="fas fa-database text-purple-500 text-3xl"></i>
          </li>
          <li className="skill-item mr-4">
            <i className="fas fa-server text-green-500 text-3xl"></i>
          </li>
          <li className="skill-item">
            <i className="fab fa-docker text-orange-500 text-3xl"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
