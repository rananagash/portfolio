import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              {/* Add other components here */}
            </main>
          } />
          <Route path="/blog" element={<div>Blog Page Coming Soon</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App; 