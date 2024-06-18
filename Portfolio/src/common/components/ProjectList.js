import React from 'react';
import './ProjectList.css';
import taxCalculatorImg from '../../assets/images/taxcalculator.jpg';
import taskManagerImg from '../../assets/images/task-manager.jpg';
import bookstoreManagerImg from '../../assets/images/bookstoremanager.jpg';
import restApiImg from '../../assets/images/restapi.jpg';
import webScrapingImg from '../../assets/images/webscraping.jpg';
import fullstackImg from '../../assets/images/fullstack.jpg';

const ProjectList = () => {
  const projects = [
    {
      title: "Capstone Project I: Simple Python Programs",
      description: "Tax calculator and number manipulator.",
      imgSrc: taxCalculatorImg,
      link: "https://github.com/Shenge06/tax_calculator"
    },
    {
      title: "Capstone Project II: Functions and OOP",
      description: "Task Manager program creation.",
      imgSrc: taskManagerImg,
      link: "https://github.com/Shenge06/Task-Manager"
    },
    {
      title: "Capstone Project III: OOP",
      description: "Managing and displaying data from a bookstore inventory.",
      imgSrc: bookstoreManagerImg,
      link: "https://github.com/Shenge06/Bookstore"
    },
    {
      title: "Capstone Project IV: RESTful APIs",
      description: "Creating a RESTful API with Flask.",
      imgSrc: restApiImg,
      link: "https://github.com/Shenge06/RESTful-API"
    },
    {
      title: "Capstone Project V: Web Scraping",
      description: "Web scraping with Beautiful Soup.",
      imgSrc: webScrapingImg,
      link: "https://github.com/Shenge06/Web-Scraping"
    },
    {
      title: "Capstone Project VI: Full-Stack Development",
      description: "Full-stack development with Django.",
      imgSrc: fullstackImg,
      link: "https://github.com/Shenge06/Full-Stack-Development"
    }
  ];

  return (
    <section id="work" className="container mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="image-box">
              <img src={project.imgSrc} alt={`Project Image ${index + 1}`} />
              <a href={project.link} className="text-orange-400 hover:text-orange-300 transition-colors duration-300">Github Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
