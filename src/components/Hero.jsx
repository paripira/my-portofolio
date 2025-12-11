import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const Hero = () => {
    const [init, setInit] = useState(false);

    // Inisialisasi tsparticles engine hanya sekali
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles container loaded", container);
    };

    // Opsi partikel (tidak ada perubahan di sini)
    const options = useMemo(() => ({
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
            },
        },
        particles: {
            color: { value: "#ffffff" },
            links: {
                color: "#8b5cf6", // Warna ungu
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    }), []);

    if (init) {
        return (
            <div className="bg-slate-900 text-white min-h-screen flex items-center relative overflow-hidden">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                    className="absolute inset-0 z-0"
                />
                
                <div className="container mx-auto flex justify-center items-center px-4 relative z-10">
                    {/* --- PERUBAHAN DI DALAM BAGIAN INI --- */}
                    <div className="w-full text-center">
                        <h1 
                            className="text-5xl lg:text-7xl font-bold mb-2 text-purple-400" 
                            data-aos="fade-up" 
                            data-aos-delay="200"
                        >
                            Software Engineer
                        </h1>
                        
                        {/* Teks baru yang ditambahkan */}
                        <p 
                            className="text-2xl lg:text-3xl font-semibold text-slate-300 mb-4" 
                            data-aos="fade-up" 
                            data-aos-delay="300"
                        >
                            Computer Engineering
                        </p>
                        
                        <p 
                            className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto" 
                            data-aos="fade-up" 
                            data-aos-delay="400"
                        >
                            Creating innovative, functional, and user-friendly software and websites to provide comprehensive digital solutions.
                        </p>
                        
                        <div 
                            className="flex space-x-4 justify-center" 
                            data-aos="fade-up" 
                            data-aos-delay="600"
                        >
                            <a href="#portfolio" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Portfolio</a>
                            <a href="#contact" className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-2 px-4 rounded">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <></>; // Tampilkan kosong selagi engine loading
};

export default Hero;