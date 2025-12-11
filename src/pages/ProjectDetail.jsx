import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects'; // Impor data proyek

const ProjectDetail = () => {
  const { projectId } = useParams(); // Mengambil 'projectId' dari URL
  const project = projects.find(p => p.id === projectId);

  // Jika proyek tidak ditemukan
  if (!project) {
    return <div className="bg-slate-900 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <Link to="/" className="text-purple-400 hover:underline">← Back to Home</Link>
    </div>;
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
        <div className="container mx-auto">
            <Link to="/" className="text-purple-400 hover:underline mb-8 inline-block">← Back to Home</Link>
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <img src={project.image} alt={project.title} className="w-full max-w-4xl h-auto rounded-lg mb-8" />
            <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-4">About This Project</h2>
                <p className="text-slate-300 leading-relaxed">
                    {project.description}
                    {/* Tambahkan deskripsi yang lebih panjang di sini nanti */}
                </p>
            </div>
        </div>
    </div>
  );
};

export default ProjectDetail;