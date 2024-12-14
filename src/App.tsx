import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Projects />
      <Skills />
      <Education />
      <section id="aboutMe" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl">About Me</h2>
      </section>
      <section id="contact" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl">Contact</h2>
      </section>
    </div>
  );
}

export default App;
