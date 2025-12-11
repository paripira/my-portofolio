import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

function Home() {
  // Hapus semua logika useState dan useEffect dari sini

  // Langsung return konten utama
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <footer className="bg-gray-900 text-center p-4">
        <p className="text-slate-400">© 2025 Fakhri. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;