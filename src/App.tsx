import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import ProjectDetails from './components/ProjectDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Welcome />
              <AboutMe />
              <Projects />
              <Skills />
              <Education />
              <Contact />
              <BackToTop />
            </>
          } />
          <Route path="/projects/:projectName" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
