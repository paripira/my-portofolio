import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pastikan impor untuk AOS ada
import AOS from 'aos';
import 'aos/dist/aos.css';

// Impor Halaman dan Komponen Splash Screen
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Bagian ini adalah yang paling penting
  useEffect(() => {
    // Inisialisasi AOS di sini
    AOS.init({
      duration: 1000, // Durasi animasi
      once: false,     // Animasi hanya berjalan sekali
      offset: 200,      // Memicu animasi sedikit lebih awal
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); 

    return () => clearTimeout(timer);
  }, []); // Array kosong memastikan ini hanya berjalan sekali

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:projectId" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;