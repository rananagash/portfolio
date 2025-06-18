import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const ProjectsSection = styled.section`
  padding: 100px 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${theme.colors.bgSecondary};
  border-radius: ${theme.borderRadius.medium};
  padding: 2rem;
  transition: ${theme.transitions.default};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: ${theme.borderRadius.small};
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.textPrimary};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background-color: rgba(100, 255, 218, 0.1);
  color: ${theme.colors.accent};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  color: ${theme.colors.accent};
  font-size: 1.2rem;
  transition: ${theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Air Quality ML Analysis",
      description: "Machine learning analysis of air quality data to predict pollution levels and identify environmental patterns using advanced ML algorithms and data visualization.",
      image: "/images/air-quality.jpg", // Add your image to images/air-quality.jpg
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      github: "https://github.com/rananagash/air-quality-ml",
      demo: null
    },
    {
      id: 2,
      title: "CelebrityBot Chatbot",
      description: "Chat with a celebrity! An N-gram model to mimic celebrity speech and highlight the risks of AI misinformation.",
      image: "/images/chatbot.png",
      tech: ["NumPy", "SciPy", "Python", "NLTK", "networkX", "Plotly", "TKinter GUI"],
      github: null,
      demo: null
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A responsive site showcasing my work, skills, and what I'm building next.",
      image: "/images/portfolio.png",
      tech: ["HTML", "CSS", "React", "TypeScript", "Styled Components"],
      github: "https://github.com/rananagash/portfolio",
      demo: null
    },
    {
      id: 4,
      title: "Text Adventure Game",
      description: "Navigate a branching story world in this Python-built interactive game with multiple endings and a simple inventory system.",
      image: "/images/adventure_game.png",
      tech: ["Python", "Linked Lists", "Object-Oriented Programming"],
      github: null,
      demo: null
    },
    {
      id: 5,
      title: "Social Connections Analysis",
      description: "Data science meets social life—exploring how friendships, social media, and loneliness connect using stats and regression.",
      image: "/images/scanalysis.png",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Statsmodels", "Bootstrapping", "Hypothesis Testing", "Multilinear Regression"],
      github: null,
      demo: null
    },
    {
      id: 6,
      title: "TTC Delays Analysis",
      description: "Uncovered patterns in Toronto subway delays and analyzed public reactions with custom Python tools and sentiment analysis.",
      image: "/images/ttcanalysis.jpg",
      tech: ["Python", "Data Analysis", "Sentiment Analysis"],
      github: null,
      demo: null
    }
  ];

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            fontSize: '2rem',
            marginBottom: '2rem',
            color: theme.colors.textPrimary
          }}
        >
          Projects
        </motion.h2>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImage>
                <img src={project.image} alt={`${project.title} Image`} />
              </ProjectImage>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </ProjectTech>
              {project.github && (
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </ProjectLink>
                </ProjectLinks>
              )}
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
};

export default Projects; 