import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      
      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        a > img {
          width: 3.0rem; /* Reduced from 5.0rem for better mobile display */
        }
      }
      
      h3 {
        margin-bottom: 2rem;
        font-size: 2rem; /* Added for better readability */
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        line-height: 1.6; /* Added for better readability */
        font-size: 1.6rem; /* Added for better readability */
        
        a {
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          
          &:hover {
            color: var(--green);
          }
        }
      }

      .project-image {
        text-align: center;
        margin-top: 10px;
        position: relative;
        
        img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .tooltip {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          padding: 5px 10px;
          border-radius: 3px;
          font-size: 1.2rem;
          z-index: 10;
        }
      }

      footer {
        margin-top: auto;
        
        .tech-list {
          display: flex;
          flex-wrap: wrap; /* Allow tech items to wrap on small screens */
          align-items: center;
          gap: 1rem; /* Reduced from 2rem for better mobile display */
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  /* Tablet view */
  @media (max-width: 960px) {
    margin-top: 10rem;
    
    h2 {
      font-size: 3.5rem;
    }
    
    .projects {
      grid-template-columns: 1fr 1fr;
      
      .project {
        padding: 1.5rem;
        
        header {
          margin-bottom: 2.5rem;
          
          a > img {
            width: 2.5rem;
          }
        }
        
        h3 {
          font-size: 1.8rem;
        }
        
        p {
          font-size: 1.4rem;
        }
      }
    }
  }

  /* Mobile view */
  @media (max-width: 740px) {
    margin-top: 8rem;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    
    .projects {
      grid-template-columns: 1fr;
      padding: 0 1.5rem; /* Added side padding for better spacing */
      
      .project {
        padding: 1.5rem;
        width: 100%; /* Ensure full width */
        box-sizing: border-box; /* Include padding in width calculation */
        
        header {
          margin-bottom: 2rem;
          
          a > img {
            width: 2.2rem;
          }
        }
        
        h3 {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
        }
        
        p {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          letter-spacing: normal; /* Better readability on mobile */
        }
        
        footer {
          .tech-list {
            font-size: 1.2rem;
            gap: 0.8rem;
          }
        }
      }
    }
  }

  /* Small mobile devices */
  @media (max-width: 480px) {
    margin-top: 6rem;
    
    h2 {
      font-size: 2.5rem;
    }
    
    .projects {
      .project {
        padding: 1.2rem;
        
        h3 {
          font-size: 1.4rem;
        }
        
        p {
          font-size: 1.2rem;
        }
        
        .project-image {
          .tooltip {
            font-size: 1rem;
          }
        }
        
        footer {
          .tech-list {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`;

export const ProjectDetailContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #444;

    h2 {
      font-size: 2.5rem;
      margin: 0;
    }

    .project-links {
      display: flex;
      gap: 1rem;

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--green);
        text-decoration: none;
        padding: 0.5rem 1rem;
        border: 1px solid var(--green);
        border-radius: 4px;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--green);
          color: #000;
        }
      }
    }
  }

  .project-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }

  .project-gallery {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;

    .gallery-item {
      position: relative;
      cursor: pointer;
      overflow: hidden;
      border-radius: 8px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }

      img {
        width: 100%;
        height: auto;
        display: block;
      }

      .image-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 0.5rem;
        font-size: 0.9rem;
        text-align: center;
      }
    }
  }

  .project-details {
    flex: 1;
    padding: 0 1rem;

    h3 {
      font-size: 1.8rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: var(--green);
    }

    h4 {
      font-size: 1.4rem;
      margin: 1.5rem 0 0.5rem;
    }

    .detailed-description, .features-list {
      padding-left: 1.5rem;
      line-height: 1.6;

      li {
        margin-bottom: 0.5rem;
      }
    }

    .challenges-solutions {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      ul {
        padding-left: 1.5rem;
        line-height: 1.6;
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .tech-item {
        background-color: #333;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.9rem;
      }
    }
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--green);
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(35, 206, 107, 0.1);
  }
`;