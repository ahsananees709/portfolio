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
import AhsanAnees from '../../assets/2.jpg';
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
              title: 'Serverless Voting Application for Programming Languages',
              description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
              imageSrc: AhsanAnees,
              techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
              githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
              liveLink: 'https://vote.vinayaksingh.com'
              },
              {
                title: 'Serverless Voting Application for Programming Languages',
                description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
                imageSrc: AhsanAnees,
                techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
                githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
                liveLink: 'https://vote.vinayaksingh.com'
              },
              {
                title: 'Serverless Voting Application for Programming Languages',
                description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
                imageSrc: AhsanAnees,
                techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
                githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
                liveLink: 'https://vote.vinayaksingh.com'
              },
              {
                title: 'Serverless Voting Application for Programming Languages',
                description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
                imageSrc: AhsanAnees,
                techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
                githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
                liveLink: 'https://vote.vinayaksingh.com'
              },
              {
                title: 'Serverless Voting Application for Programming Languages',
                description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
                imageSrc: AhsanAnees,
                techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
                githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
                liveLink: 'https://vote.vinayaksingh.com'
              },
              {
                title: 'Serverless Voting Application for Programming Languages',
                description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
                imageSrc: AhsanAnees,
                techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
                githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
                liveLink: 'https://vote.vinayaksingh.com'
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





// export function Project() {
//   const projects = [
//     {
//       title: 'Serverless Voting Application for Programming Languages',
//       description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
//       imageSrc: AhsanAnees,
//       techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
//       githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
//       liveLink: 'https://vote.vinayaksingh.com'
//       },
//       {
//         title: 'Serverless Voting Application for Programming Languages',
//         description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
//         imageSrc: AhsanAnees,
//         techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
//         githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
//         liveLink: 'https://vote.vinayaksingh.com'
//       },
//       {
//         title: 'Serverless Voting Application for Programming Languages',
//         description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
//         imageSrc: AhsanAnees,
//         techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
//         githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
//         liveLink: 'https://vote.vinayaksingh.com'
//       },
//       {
//         title: 'Serverless Voting Application for Programming Languages',
//         description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
//         imageSrc: AhsanAnees,
//         techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
//         githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
//         liveLink: 'https://vote.vinayaksingh.com'
//       },
//       {
//         title: 'Serverless Voting Application for Programming Languages',
//         description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
//         imageSrc: AhsanAnees,
//         techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
//         githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
//         liveLink: 'https://vote.vinayaksingh.com'
//       },
//       {
//         title: 'Serverless Voting Application for Programming Languages',
//         description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI.',
//         imageSrc: AhsanAnees,
//         techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
//         githubLink: 'https://github.com/CodeVinayak/Serverless-Voting-Application',
//         liveLink: 'https://vote.vinayaksingh.com'
//       },

//   ];

//   return (
//     <Container id="project">
//       <h2>My Projects</h2>
//       <div className="projects">
//         {projects.map((project, index) => (
//           <ScrollAnimation key={index} animateIn="flipInX">
//             <div className="project">
//               <header>
//                 <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
//                   <title>Folder</title> 
//                   <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
//                 </svg>
//                 <div className="project-links">
//                   <a href={project.githubLink} target="_blank" rel="noreferrer">
//                     <img src={githubIcon} alt="GitHub" />
//                   </a>
//                   <a href={project.liveLink} target="_blank" rel="noreferrer">
//                     <img src={externalLink} alt="Live Site" />
//                   </a>
//                 </div>
//               </header>
//               <div className="body">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//                 <div className="project-image">
//                   <img src={project.imageSrc} alt={project.title} />
//                 </div>
//               </div>
//               <footer>
//                 <ul className="tech-list">
//                   {project.techStack.map((tech, idx) => (
//                     <li key={idx}>{tech}</li>
//                   ))}
//                 </ul>
//               </footer>
//             </div>
//           </ScrollAnimation>
//         ))}
//       </div>
//     </Container>
//   );
// }
