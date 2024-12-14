import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Projects />
      <Skills />
      <Education />
      <AboutMe />
      <section id="contact" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl">Contact</h2>
      </section>
    </div>
  );
}

export default App;
