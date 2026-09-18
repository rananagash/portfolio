import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Playground from './components/Playground';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import About from './components/About';
import Contact from './components/Contact';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <a className="sr-only" href="#main">Skip to content</a>
    <Navbar />
    <main id="main"><Hero /><Projects /><Experience /><Leadership /><Playground /><About /><Contact /></main>
  </ThemeProvider>
);
export default App;
