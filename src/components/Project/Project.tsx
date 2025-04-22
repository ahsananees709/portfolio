import React, { useState, useEffect, useRef } from 'react';
import { Container, ProjectDetailContainer, BackButton } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
// import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Modal from '../Modal/Modal';

// Import all project images
import OneAcademy from '../../assets/OneAcademy.png';
import OneAcademy2 from '../../assets/OneAcademy2.png';
import Ajar from '../../assets/Ajar.png';
import Ajar2 from '../../assets/Ajar2.png';
import Ajar3 from '../../assets/Ajar3.png';
import Ajar4 from '../../assets/Ajar4.png';
import AjarAdmin from '../../assets/AjarAdmin.png';
import AjarAdmin2 from '../../assets/AjarAdmin2.png';
import AjarAdmin3 from '../../assets/AjarAdmin3.png';
import AhsanMart from '../../assets/AhsanMart.png';
import AhsanMart2 from '../../assets/AhsanMart2.png';
import AhsanMart3 from '../../assets/AhsanMart3.png';
import AhsanMartAdmin from '../../assets/AhsanMartAdmin.png';
import BudgetApp from '../../assets/BudgetApp.png';
import BudgetApp2 from '../../assets/BudgetApp2.png';
import EServices from '../../assets/EServices.png';
import EServices2 from '../../assets/EServices2.png';
import EServices3 from '../../assets/EServices3.png';
import EServices4 from '../../assets/EServices4.png';
import EServices5 from '../../assets/EServices5.png';
import LonicFlex from '../../assets/LonicFlex.png';
import TodoApp from '../../assets/TodoApp.png';
import QuizApp from '../../assets/QuizApp.png';
import AirBnb from '../../assets/AirBnb.png';

// Define TypeScript types
interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectType {
  id: string;
  title: string;
  description: string;
  detailedDescription: string[];
  imageSrc: string;
  images: ProjectImage[];
  techStack: string[];
  githubLink: string;
  liveLink: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
}

const projects: ProjectType[] = [
  {
    id: 'one-academy',
    title: 'The One Academy',
    description: 'Cross-platform Flutter web application for online course management.',
    detailedDescription: [
      'Designed for Android & iOS with web admin panel',
      'Structured educational content with courses, modules, chapters, and lessons',
      'Product-based subscription model for content access',
      'Content protection and smooth playback performance'
    ],
    imageSrc: OneAcademy,
    images: [
      { src: OneAcademy, alt: '' },
      { src: OneAcademy2, alt: '' }
    ],
    techStack: ['React', 'Node/Express', 'AWS S3 Bucket', 'CloudFlare', 'Stripe', 'Flutter', 'RevenueCat', 'PostgreSQL'],
    githubLink: 'https://www.app.theone.academy/',
    liveLink: 'https://www.app.theone.academy/',
    features: [
      'User authentication and authorization',
      'Course progression tracking',
      'Video streaming with DRM protection',
      'Payment integration with Stripe',
      'Cross-platform compatibility'
    ],
    challenges: [
      'Implementing secure video streaming',
      'Handling large file uploads',
      'Maintaining consistent UI across platforms'
    ],
    solutions: [
      'Used AWS S3 with CloudFront for content delivery',
      'Implemented chunked uploads for large files',
      'Created a shared component library'
    ]
  },
  {
    id: 'e-services',
    title: 'E-Services',
    description: 'Versatile Flutter app for service hiring and role-based user experience.',
    detailedDescription: [
      'Users can register as customers or service providers',
      'Switch roles within the same account',
      'Supports online payments and cash on delivery',
      'Real-time service booking experience'
    ],
    imageSrc: EServices,
    images: [
      { src: EServices, alt: '' },
      { src: EServices2, alt: '' },
      { src: EServices3, alt: '' },
      { src: EServices4, alt: '' },
      { src: EServices5, alt: '' }
    ],
    techStack: ['Flutter', 'Node/Express', 'Socket.io', 'PostgreSQL', 'Stripe', 'Google Maps API'],
    githubLink: 'https://www.app.theone.academy/',
    liveLink: 'https://www.app.theone.academy/'
  },
  {
    id: 'ajar-platform',
    title: 'Ajar - Vehicle Rental Platform',
    description: 'Mobile and web-based platform for vehicle rental management.',
    detailedDescription: [
      'Hosts can list vehicles for rent with location and pricing',
      'Renters can browse, book, and pay for vehicles',
      'Supports real-time chat and tracking',
      'Admin panel included for backend management',
      'User Authentication – Secure sign-up/login for renters and hosts.',
      'Vehicle Listing – Hosts can register cars with detailed information and availability.',
      'Advanced Filtering – Renters can filter vehicles by type, location, availability, with/without driver, and more.',
      'Booking System – Renters can reserve vehicles for specific dates and locations.',
      'In-App Chat Module – Secure communication between hosts and renters using Socket.io.',
      'Payment Gateway – Integrated Stripe for online payments, with support for Cash on Delivery.',
      'Admin Panel – Admins can view/manage users, bookings, vehicles, payments, and platform analytics via a powerful web dashboard.'

    ],
    imageSrc: Ajar,
    images: [
      { src: Ajar, alt: '' },
      { src: Ajar2, alt: '' },
      { src: Ajar3, alt: '' },
      { src: Ajar4, alt: '' }
    ],
    techStack: ['Flutter', 'Node/Express', 'Socket.io', 'Stripe', 'PostgreSQL', 'GoogleMaps'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    id: 'ajar-admin',
    title: 'Ajar - Vehicle Rental Platform (Admin Panel)',
    description: 'Admin panel to manage the Ajar rental system.',
    detailedDescription: [
      'View and manage users, listings, and bookings',
      'Integrated with the Ajar mobile app backend',
      'Supports user verification and payment tracking'
    ],
    imageSrc: AjarAdmin,
    images: [
      { src: AjarAdmin, alt: '' },
      { src: AjarAdmin2, alt: '' },
      { src: AjarAdmin3, alt: '' }
    ],
    techStack: ['React', 'Node/Express', 'Socket.io', 'Stripe', 'PostgreSQL', 'GoogleMaps'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    id: 'ahsan-mart',
    title: 'Ahsan Mart',
    description: 'Full-featured e-commerce web app with multiple payment options.',
    detailedDescription: [
      'Browse and purchase products',
      'Supports card and cash on delivery payments',
      'Responsive layout and fast checkout flow',
      'Product and user management',
      'View and track orders',
      'Manage inventory and product uploads'
    ],
    imageSrc: AhsanMart,
    images: [
      { src: AhsanMart, alt: '' },
      { src: AhsanMart2, alt: '' },
      { src: AhsanMart3, alt: '' },
      { src: AhsanMartAdmin, alt: '' }
    ],
    techStack: ['React', 'Node/Express', 'Claudinary', 'email services', 'MongoDB'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    id: 'budget-app',
    title: 'Budget Managing Web App',
    description: 'Track monthly/yearly budgets through an intuitive UI.',
    detailedDescription: [
      'JWT Authentication',
      'User authentication and budget categories',
      'Graphs and charts for spending overview',
      'Hosted on Netlify'
    ],
    imageSrc: BudgetApp,
    images: [
      { src: BudgetApp, alt: '' },
      { src: BudgetApp2, alt: '' }
    ],
    techStack: ['React', 'Node/Express', 'MongoDB', 'Netlify', 'AWS EC2'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    id: 'lonic-flex',
    title: 'Lonic Flex',
    description: 'Global office space booking web application.',
    detailedDescription: [
      'Users can search and book office spaces worldwide',
      'Supports user registration and role management',
      'Integrated with domain and hosting on AWS'
    ],
    imageSrc: LonicFlex,
    images: [
      { src: LonicFlex, alt: 'Office booking UI' }
    ],
    techStack: ['Nextjs', 'Node/Express', 'PostgreSQL', 'AWS EC2', 'AWS Route 53', 'Namecheap'],
    githubLink: 'http://lonicflex.uk',
    liveLink: 'http://lonicflex.uk'
  },
  {
    id: 'todo-app',
    title: 'TodoApp',
    description: 'Daily task manager with priority and deadline features.',
    detailedDescription: [
      'Add/update/delete daily tasks',
      'Set priorities and reminders',
      'Simple and fast UI'
    ],
    imageSrc: TodoApp,
    images: [
      { src: TodoApp, alt: 'Todo UI' }
    ],
    techStack: ['Nextjs', 'Node/Express', 'PostgreSQL'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    id: 'quiz-app',
    title: 'AI Based Quiz App',
    description: 'Interactive quiz app with result evaluation.',
    detailedDescription: [
      'Answer 15 questions',
      'AI-driven scoring',
      'Client-specific implementation'
    ],
    imageSrc: QuizApp,
    images: [
      { src: QuizApp, alt: 'Quiz screen' }
    ],
    techStack: ['HTML', 'CSS', 'Python/Django', 'MySQL'],
    githubLink: 'https://github.com/ahsananees709',
    liveLink: 'https://github.com/ahsananees709'
  },
  {
    id: 'airbnb-ai',
    title: 'AirBnb',
    description: 'AI-powered admin dashboard for analyzing AirBnB listings.',
    detailedDescription: [
      'Scrapes listings daily from Airbnb',
      'Ranks listings with an AI agent',
      'Displays insights with visual charts'
    ],
    imageSrc: AirBnb,
    images: [
      { src: AirBnb, alt: 'Ranking dashboard' }
    ],
    techStack: ['React', 'Node', 'MySQL', 'Scrapy', 'Chartjs'],
    githubLink: 'http://13.57.246.26',
    liveLink: 'http://13.57.246.26'
  }
];


export function Project() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const openProjectDetail = (project: ProjectType) => {
    setSelectedProject(project);
    window.history.pushState({ projectId: project.id }, '', `#${project.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (!event.state) {
        closeProjectDetail();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check URL on initial load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const project = projects.find(p => p.id === hash);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, []);

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

  if (selectedProject) {
    return (
      <ProjectDetailContainer>
        <BackButton onClick={closeProjectDetail}>
          Back to Projects
        </BackButton>
        
        <div className="project-header">
          <h2>{selectedProject.title}</h2>
          <div className="project-links">
            <a href={selectedProject.githubLink} target="_blank" rel="noreferrer">
               GitHub
            </a>
            <a href={selectedProject.liveLink} target="_blank" rel="noreferrer">
               Live Demo
            </a>
          </div>
        </div>

        <div className="project-content">
          <div className="project-gallery">
            {selectedProject.images.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => openModal(image.src)}>
                <img src={image.src} alt={image.alt} />
                <div className="image-caption">{image.alt}</div>
              </div>
            ))}
          </div>

          <div className="project-details">
            <h3>Project Overview</h3>
            <ul className="detailed-description">
              {selectedProject.detailedDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {selectedProject.features && (
              <>
                <h3>Key Features</h3>
                <ul className="features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {selectedProject.challenges && selectedProject.solutions && (
              <>
                <h3>Challenges & Solutions</h3>
                <div className="challenges-solutions">
                  <div className="challenges">
                    <h4>Challenges</h4>
                    <ul>
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="solutions">
                    <h4>Solutions</h4>
                    <ul>
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}

            <h3>Technologies Used</h3>
            <div className="tech-stack">
              {selectedProject.techStack.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <Modal imageSrc={selectedImage} onClose={closeModal} />
      </ProjectDetailContainer>
    );
  }

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div
              className="project"
              ref={el => projectRefs.current[index] = el}
              onClick={() => openProjectDetail(project)}
            >
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                  <title>Folder</title> 
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
                </svg>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
                    <img src={externalLink} alt="Live Site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-image" onClick={(e) => {
                  e.stopPropagation();
                  openModal(project.imageSrc);
                }}>
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