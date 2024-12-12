import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl">Welcome to My Portfolio</h2>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center bg-gray-200">
        <h2 className="text-4xl">Projects</h2>
      </section>
      <section id="skills" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl">Skills</h2>
      </section>
      <section id="experience" className="h-screen flex items-center justify-center bg-gray-200">
        <h2 className="text-4xl">Experience</h2>
      </section>
      <section id="contact" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl">Contact</h2>
      </section>
    </div>
  );
}

export default App;
