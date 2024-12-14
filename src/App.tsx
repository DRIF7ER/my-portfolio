import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Projects />
      <Skills />
      <Education />
      <AboutMe />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
