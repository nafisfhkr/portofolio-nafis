import { ExternalLink, Github, Smartphone, Code, Cpu, Download, Play } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: "bantuin",
      title: "Bantuin Mobile App",
      category: "Mobile App (MVP Stage)",
      role: "Scrum Master & Flutter Developer",
      desc: "Aplikasi bantuan sosial dengan fitur autentikasi user dan database real-time menggunakan Firestore.",
      tech: ["Flutter", "Firebase", "Agile/Scrum"],
      links: [
        { label: "Download APK", icon: <Download size={16} />, url: "#" }, // Ganti dengan link Google Drive/Firebase
        { label: "Watch Demo", icon: <Play size={16} />, url: "#" },
        { label: "GitHub", icon: <Github size={16} />, url: "#" },
      ],
      isMobile: true,
      image: "/foto-bantuin.svg"
    },
    {
      id: "credit-system",
      title: "Farmer Creditworthiness System",
      category: "Data Science / Algorithm",
      role: "Algorithm Developer",
      desc: "Sistem penilaian kelayakan kredit petani menggunakan model Hybrid AHP-KNN yang dibangun secara native tanpa library eksternal.",
      tech: ["Python", "NumPy", "Streamlit"],
      links: [
        { label: "Live Demo", icon: <ExternalLink size={16} />, url: "#" },
        { label: "GitHub", icon: <Github size={16} />, url: "#" },
      ],
      isMobile: false,
      image: "/project-algorithm.jpg"
    },
    {
      id: "laravel-api",
      title: "Laravel REST API Portfolio",
      category: "Backend Development",
      role: "Backend Developer",
      desc: "Kumpulan API backend yang aman dengan sistem autentikasi token-based menggunakan Laravel Passport.",
      tech: ["Laravel", "Passport", "MySQL", "Postman"],
      links: [
        { label: "API Docs", icon: <ExternalLink size={16} />, url: "#" }, // Bisa link ke Postman Public Documentation
        { label: "GitHub", icon: <Github size={16} />, url: "#" },
      ],
      isMobile: false,
      image: "/project-api.jpg"
    }
  ];

  return (
    <section className="bg-black py-24 px-6 lg:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">Featured <span className="text-gray-500">Projects</span></h2>
          <p className="text-gray-500 mt-4 max-w-lg">Koleksi karya terbaik dalam pengembangan aplikasi mobile, sistem backend, dan algoritma cerdas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500">
              
              {/* Preview Image / Placeholder */}
<div className="relative h-48 bg-gray-900 flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
  
  {/* LOGIKA BARU: Tampilkan Gambar jika ada, jika tidak tampilkan Ikon */}
  {project.image ? (
    <Image 
      src={project.image} 
      alt={project.title}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
    />
  ) : (
    project.isMobile ? <Smartphone size={48} className="text-gray-800" /> : <Code size={48} className="text-gray-800" />
  )}
  
  {/* Tech Badges */}
  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
    {project.tech.map((t) => (
      <span key={t} className="px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-[10px] uppercase font-bold tracking-widest">{t}</span>
    ))}
  </div>
</div>

              {/* Content */}
              <div className="p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 h-12 line-clamp-2">
                  {project.desc}
                </p>

                {/* Role Info */}
                <div className="flex items-center gap-2 mb-8 p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="p-1.5 bg-gray-800 rounded-lg">
                    {project.isMobile ? <Cpu size={14} /> : <Code size={14} />}
                  </div>
                  <span className="text-[11px] font-medium text-gray-300">{project.role}</span>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a 
                      key={link.label}
                      href={link.url}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}