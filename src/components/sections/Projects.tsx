'use client';

import { ExternalLink, Github, Smartphone, Code, Cpu, Download, Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import VideoModal from "../Videomodal";

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    {
      id: "bantuin",
      title: "Bantuin Mobile App",
      category: "Mobile App (MVP Stage)",
      role: "Scrum Master & Flutter Developer",
      desc: "Aplikasi e-commerce penyedia jasa untuk perbaikan kendaraan dan barang elektronik.",
      tech: ["Flutter", "Firebase", "Agile/Scrum"],
      links: [
        { label: "Download APK", icon: <Download size={14} />, url: "https://drive.google.com/drive/folders/1O7amuxjMpg6or9LgcJz5A2iPEybjn60r?usp=sharing" },
        { label: "Watch Demo", icon: <Play size={14} />, url: 'Demo_Aplikasi_Bantuin_1_eowaz5' },
      ],
      isMobile: true,
      image: "/foto-bantuin.svg"
    },
    {
      id: "web-postkasir",
      title: "POS Web Application",
      category: "Full-stack Web Development",
      role: "Full-stack Developer",
      desc: "Sistem kasir berbasis web yang mencakup manajemen stok, transaksi, diskon, hingga laporan hutang-piutang.",
      tech: ["Laravel", "Blade", "MySQL", "Tailwind"],
      links: [
        { label: "GitHub", icon: <Github size={14} />, url: "https://github.com/nafisfhkr/web-postkasir" },
      ],
      isMobile: false,
      image: "/web kasir.webp"
    },
    {
      id: "credit-system",
      title: "Farmer Creditworthiness System",
      category: "Data Science / Algorithm",
      role: "Algorithm Developer",
      desc: "Sistem penilaian kelayakan kredit petani menggunakan model Hybrid AHP-KNN yang dibangun secara native tanpa library eksternal.",
      tech: ["Python", "NumPy", "Streamlit"],
      links: [
        { label: "Live Demo", icon: <ExternalLink size={14} />, url: "https://native-ahp-knn-implementation-yexhd83eertcjtqoc7q6kz.streamlit.app/" },
        { label: "GitHub", icon: <Github size={14} />, url: "https://github.com/nafisfhkr/native-ahp-knn-implementation" },
      ],
      isMobile: false,
      image: "/Prediksi modal petani.webp"
    },
    {
  id: "pos-api-laravel",
  title: "POS API (Laravel)",
  category: "Backend Development",
  role: "Backend Developer",
  desc: "POS API berbasis Laravel dengan autentikasi Sanctum, outlet-scoped routes, transaksi aman (DB transaction + row locking), stok konsisten, dan idempotency untuk pembayaran QRIS. Termasuk Postman Collection untuk demo.",
  tech: ["Laravel", "Sanctum", "MySQL", "Postman", "OpenAPI", "Swagger UI"],
  links: [
    {
      label: "API Docs",
      icon: <ExternalLink size={14} />,
      url: "https://nafisfhkr.github.io/pos-api-satutoko/",
    },
    {
      label: "Postman",
      icon: <ExternalLink size={14} />,
      url: "https://www.postman.com/naf5rudin/workspace/pos-api-satu-toko/collection/38083662-ccf664e2-8f84-4807-b004-653b6dce9388?action=share&creator=38083662", 
    },
    {
      label: "GitHub",
      icon: <Github size={14} />,
      url: "https://github.com/nafisfhkr/pos-api-satutoko",
    },
  ],
  isMobile: false,
  image: "/api-satutoko.webp",
}

  ];

  const handleWatchDemo = (videoId: string, title: string) => {
    const videoUrl = `https://res.cloudinary.com/dzysppoun/video/upload/${videoId}.mp4`;
    setSelectedVideo({ url: videoUrl, title: title });
  };

  return (
    <section className="bg-black py-24 px-6 lg:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter italic">Featured <span className="text-gray-600">Projects</span></h2>
          <p className="text-gray-500 mt-4 max-w-lg">Koleksi karya saya dalam pengembangan aplikasi mobile, sistem backend, dan algoritma cerdas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-500 cursor-pointer shadow-2xl"
            >
              {/* Preview Image (Rasio Landscape) */}
              <div className="relative w-full aspect-video bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:opacity-10"></div>
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    {project.isMobile ? <Smartphone size={48} className="text-gray-800" /> : <Code size={48} className="text-gray-800" />}
                  </div>
                )}
                
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[9px] uppercase font-black tracking-widest text-gray-300">{t}</span>
                  ))}
                </div>
              </div>

              {/* Content Card */}
<div className="p-8">
  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-2">
    {project.category}
  </p>

  {project.role && (
    <p className="text-xs text-gray-500 mb-2 font-medium">
      {project.role}
    </p>
  )}

  <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-300 transition-colors leading-tight">
    {project.title}
  </h3>

  <p className="text-sm text-gray-500 leading-relaxed mb-8 h-12 line-clamp-2 font-light italic">
    {project.desc}
  </p>



                {/* Tombol-tombol Tetap Ada di Card */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    link.label === "Watch Demo" ? (
                      <button
                        key={link.label}
                        onClick={(e) => {
                          e.stopPropagation(); // Mencegah modal detail terbuka
                          handleWatchDemo(link.url, project.title);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all z-30"
                      >
                        {link.icon} {link.label}
                      </button>
                    ) : (
                      <a 
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Mencegah modal detail terbuka
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all z-30"
                      >
                        {link.icon} {link.label}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL DETAIL PROJECT --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col lg:flex-row">
            
            {/* Tombol Close */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-[110] p-3 bg-black/50 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <X size={24} />
            </button>

            {/* Visual (Landscape) */}
            <div className="lg:w-3/5 relative h-[250px] lg:h-auto bg-gray-900">
              {selectedProject.image && (
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              )}
            </div>

            {/* Info Section */}
            <div className="lg:w-2/5 p-8 lg:p-12 overflow-y-auto bg-[#0a0a0a]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 mb-4 block">Project Detail</span>
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">{selectedProject.title}</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-black uppercase text-gray-600 mb-3 tracking-widest">Description</h4>
                  <p className="text-gray-400 leading-relaxed text-sm font-light">{selectedProject.desc}</p>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-gray-600 mb-3 tracking-widest">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string) => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-400 uppercase">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="flex flex-wrap gap-3 pt-10 mt-10 border-t border-white/5">
                {selectedProject.links.map((link: any) => (
                  <button 
                    key={link.label}
                    onClick={() => {
                      if (link.label === "Watch Demo") handleWatchDemo(link.url, selectedProject.title);
                      else window.open(link.url, '_blank');
                    }}
                    className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    {link.icon} {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Video */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
}