// import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// // import DownloadApp from '../../assets/download.png'
// import externalLink from "../../assets/external-link.svg"
// import ScrollAnimation from "react-animate-on-scroll";
// import AhsanAnees from '../../assets/2.jpg'

// import React, { useState } from 'react';

// import Modal from '../Modal/Modal'; // Import the Modal component

import React, { useState, useEffect, useRef } from 'react';
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import OneAcademy from '../../assets/OneAcademy.png';
import Ajar from '../../assets/Ajar.png';
import AjarAdmin from '../../assets/AjarAdmin.png';
import AhsanMart from '../../assets/AhsanMart.png';
import AhsanMartAdmin from '../../assets/AhsanMartAdmin.png';
import BudgetApp from '../../assets/BudgetApp.png';
import EServices from '../../assets/EServices.png';
import LonicFlex from '../../assets/LonicFlex.png';
import TodoApp from '../../assets/TodoApp.png';
import QuizApp from '../../assets/QuizApp.png';
import AirBnb from '../../assets/AirBnb.png';

import Modal from '../Modal/Modal';

// Define TypeScript types
interface ProjectType {
  title: string;
  description: string;
  imageSrc: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

const projects: ProjectType[] = [
  {
    title: 'The One Academy',
    description: 'This project is a cross-platform Flutter web application (Android & iOS) designed for online course management and delivery. The application allows administrators to create structured educational content organized into courses, with each course containing modules, chapters, and lessons. Users can access and view course content after purchasing product-based subscriptions This setup ensures both content protection and smooth playback performance across all supported devices.',
    imageSrc: OneAcademy,
    techStack: ['React', 'Node/Express', 'AWS S3 Bucket', 'CloudFlare', 'Stripe', 'Flutter', 'RevenueCat', 'PostgreSQL'],
    githubLink: 'https://www.app.theone.academy/',
    liveLink: 'https://www.app.theone.academy/'
  },
  {
    title: 'E-Services',
    description: 'Hire is a versatile mobile application built with Flutter, backed by a robust Node.js + PostgreSQL backend. Designed as a modern services marketplace, Hire allows users to seamlessly register and switch roles between service providers (sellers) and customers (buyers). Users can offer a wide range of services or hire others, with flexible payment options including online payments and cash on delivery.',
    imageSrc: EServices,
    techStack: ['Fluter', 'Node/Express', 'Socket.io', 'PostgreSQL', 'Stripe', 'Google Maps API'],
    githubLink: 'https://www.app.theone.academy/',
    liveLink: 'https://www.app.theone.academy/'
  },
  {
    title: 'Ajar - Vehicle Rental Platform',
    description: 'Ajar is a comprehensive vehicle rental mobile application accompanied by a web-based admin panel. The platform empowers users to seamlessly register, list their vehicles as hosts, and allows renters to search, book, and pay for vehicles with flexible options such as delivery location, driver inclusion, and payment methods. The system supports real-time tracking, chat communication, and end-to-end booking management, making it a one-stop solution for vehicle rentals.',
    imageSrc: Ajar,
    techStack: ['Flutter', 'Node/Express', 'Socket.io', 'Stripe', 'PostgreSQL', 'GoogleMaps'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    title: 'Ajar - Vehicle Rental Platform (Admin Panel)',
    description: 'Ajar is a comprehensive vehicle rental mobile application accompanied by a web-based admin panel. The platform empowers users to seamlessly register, list their vehicles as hosts, and allows renters to search, book, and pay for vehicles with flexible options such as delivery location, driver inclusion, and payment methods. The system supports real-time tracking, chat communication, and end-to-end booking management, making it a one-stop solution for vehicle rentals.',
    imageSrc: AjarAdmin,
    techStack: ['React', 'Node/Express', 'Socket.io', 'Stripe', 'PostgreSQL', 'GoogleMaps'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    title: 'Ahsan Mart',
    description: 'Its an e-commerce platform where users can checkout the products and buy them and pay by card and also they can pay on delivery.',
    imageSrc: AhsanMart,
    techStack: ['React', 'Node/Express', 'Claudinary', 'email services', 'MongoDB'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    title: 'Ahsan Mart (Admin Panel)',
    description: 'Its an e-commerce platform where admin can add/update/delete products, manage users and manage inventory.',
    imageSrc: AhsanMartAdmin,
    techStack: ['React', 'Node/Express', 'Claudinary', 'email services', 'MongoDB'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    title: 'Budget Managing Web App',
    description: 'It is a web application where users can manage their monthly/yearly budgets.',
    imageSrc: BudgetApp,
    techStack: ['React', 'Node/Express', 'MongoDB', 'Netlify', 'AWS EC2'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    title: 'Lonic Flex',
    description: 'It is a web application where users can book offices from all around the world for their office meetings or offices.',
    imageSrc: LonicFlex,
    techStack: ['Nextjs', 'Node/Express', 'PostgreSQL', 'AWS EC2', 'AWS Route 53', 'Namecheap'],
    githubLink: 'lonicflex.uk',
    liveLink: 'lonicflex.uk'
  },
  {
    title: 'TodoApp',
    description: 'User can add/update/delete and view daily tasks and add deadlines and priorities.',
    imageSrc: TodoApp,
    techStack: ['Nextjs', 'Node/Express', 'PostgreSQL'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    title: 'AI Based Quiz App',
    description: 'It is a web application where users need to answer 15 questions and they get a result at the end. It was a client project so everything in there according to him.',
    imageSrc: QuizApp,
    techStack: ['HTML', 'CSS', 'Python/Django', 'MySQL'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    title: 'AirBnb',
    description: 'It is an AI based admin panel, where airbnb products scraped from airbnb official site and then on an AI agent it creates the products daily ranking.',
    imageSrc: AirBnb,
    techStack: ['React', 'Node', 'MySQL', 'Scrapy', 'Chartjs'],
    githubLink: 'http://13.57.246.26',
    liveLink: 'http://13.57.246.26'
  },
];

export function Project() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Set up IntersectionObserver to show tooltip
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTooltipVisible(true);
        } else {
          setTooltipVisible(false);
        }
      });
    }, { threshold: 0.5 });

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div
              className="project"
              ref={el => projectRefs.current[index] = el}
            >
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                  <title>Folder</title> 
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
                </svg>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Live Site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-image" onClick={() => openModal(project.imageSrc)}>
                  <img src={project.imageSrc} alt={project.title} />
                  {tooltipVisible && (
                    <div className="tooltip">
                      Click on the image to zoom in
                    </div>
                  )}
                </div>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techStack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      <Modal imageSrc={selectedImage} onClose={closeModal} />
    </Container>
  );
}
