import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Impor gambar sertifikat Anda
import sertifikatML from '../assets/certificates/Machine_Learning.jpg';
import sertifikatBangkit from '../assets/certificates/Bangkit.jpg';
import sertifikatpython from '../assets/certificates/Using_Python_To_Interact.jpg';
import sertifikatCrashPython from '../assets/certificates/Crash_Course_on_Phyton.jpg';
import sertifikatAlgebra from '../assets/certificates/Algebra_for_Machine_Learning.jpg';

const certificates = [
  { image: sertifikatML, title: 'Machine Learning Certificate' },
  { image: sertifikatBangkit, title: 'Bangkit Academy Certificate' },
  { image: sertifikatpython, title: 'Using Python to Interact Certificate' },
  { image: sertifikatCrashPython, title: 'Crash Course on Python Certificate' },
  { image: sertifikatAlgebra, title: 'Algebra for Machine Learning Certificate' },
];

const techStack = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const getTabClass = (tabName) => {
    return activeTab === tabName ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400';
  };

  return (
    <>
      <div id="portfolio" className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" data-aos="fade-up">Portfolio Showcase</h2>
          <p className="text-center text-slate-400 mb-12" data-aos="fade-up" data-aos-delay="100">
            Explore my journey through projects, certifications, and technical expertise.
          </p>
          <div className="flex justify-center space-x-4 mb-12" data-aos="fade-up" data-aos-delay="200">
            <button onClick={() => setActiveTab('projects')} className={`font-bold py-2 px-6 rounded-lg transition-colors duration-300 ${getTabClass('projects')}`}>Projects</button>
            <button onClick={() => setActiveTab('certificates')} className={`font-bold py-2 px-6 rounded-lg transition-colors duration-300 ${getTabClass('certificates')}`}>Certificates</button>
            <button onClick={() => setActiveTab('techStack')} className={`font-bold py-2 px-6 rounded-lg transition-colors duration-300 ${getTabClass('techStack')}`}>Tech Stack</button>
          </div>

          <div key={activeTab} data-aos="fade-up" data-aos-delay="300">
            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div key={project.id} className="bg-slate-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                      <p className="text-slate-400 mb-4">{project.description}</p>
                      <Link to={`/project/${project.id}`} className="text-purple-400 hover:text-purple-300 font-semibold">Details →</Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'certificates' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {certificates.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-800 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleOpenLightbox(index)}
                  >
                    <img src={cert.image} alt={cert.title} className="w-full h-auto rounded-md"/>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'techStack' && (
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center justify-center bg-slate-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2"/>
                    <span className="font-semibold">{tech.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={certificates.map(cert => ({ src: cert.image }))}
        index={currentIndex}
      />
    </>
  );
};

export default Portfolio;