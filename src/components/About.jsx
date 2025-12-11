import profilePic from '../assets/about-image.jpeg';

const About = () => {
  return (
    <div id="about" className="bg-slate-900 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Animasi untuk Judul */}
        <h2 
          className="text-4xl font-bold text-center mb-12" 
          data-aos="fade-up"
        >
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Animasi untuk Blok Teks Kiri */}
          <div 
            className="md:w-1/2" 
            data-aos="fade-right" 
            data-aos-delay="200"
          >
            <h3 className="text-3xl font-bold mb-4">
                Hello, I'm <span className="text-purple-400">Fakhri Aprianza</span></h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Since I was first introduced to the world of technology, I’ve always been fascinated by how lines of code and devices can connect to create something meaningful.
              I continuously develop my skills in software development, web creation, and the Internet of Things (IoT).
              I’m also open to exploring the implementation of Artificial Intelligence (AI) as part of my journey to build smarter, more efficient, and impactful digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#cv" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Download CV
              </a>
              <a href="#portfolio" className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-2 px-4 rounded">
                View Projects
              </a>
            </div>
          </div>

          <div 
            className="md:w-1/2 flex justify-center" 
            data-aos="fade-left" 
            data-aos-delay="400"
          >
            <img src={profilePic} alt="Fakhri" className="w-64 h-64 rounded-full object-cover" />
          </div>
        </div>

        <div className="mt-20 flex justify-around text-center">
          <div className="p-4" data-aos="fade-up" data-aos-delay="600">
            <h4 className="text-4xl font-bold text-purple-400">10+</h4>
            <p className="text-slate-400">Total Projects</p>
          </div>
          <div className="p-4" data-aos="fade-up" data-aos-delay="700">
            <h4 className="text-4xl font-bold text-purple-400">5+</h4>
            <p className="text-slate-400">Certificates</p>
          </div>
          <div className="p-4" data-aos="fade-up" data-aos-delay="800">
            <h4 className="text-4xl font-bold text-purple-400">3+</h4>
            <p className="text-slate-400">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;