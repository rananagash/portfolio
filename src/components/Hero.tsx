import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Subtitle = styled.p`
  color: ${theme.colors.accent};
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
`;

const Name = styled.span`
  display: inline-block;
`;

const Role = styled.span`
  display: block;
  font-size: 1.5rem;
  color: ${theme.colors.textSecondary};
  margin-top: 0.5rem;
`;

const Description = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid ${theme.colors.accent};
  color: ${theme.colors.accent};
  text-decoration: none;
  font-weight: 600;
  border-radius: ${theme.borderRadius.small};
  transition: ${theme.transitions.default};

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const TypingCursor = styled.span`
  display: inline-block;
  position: relative;
  color: ${theme.colors.accent};
  animation: blink 0.8s infinite;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <div className="container">
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Subtitle>Hi, my name is</Subtitle>
          </motion.div>
          <Title>
            <Name>
              Rana Naga<TypingCursor>sh</TypingCursor>
            </Name>
            <Role>CS Student at UofT</Role>
          </Title>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Description>
              I'm a passionate Computer Science student with a strong interest in software development and problem-solving.
              Currently pursuing my degree at the University of Toronto, I'm constantly learning and building projects to expand my skills.
            </Description>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CTAButton href="#projects">
              Check out my work
            </CTAButton>
          </motion.div>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

export default Hero; 