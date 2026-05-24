import { Briefcase, GraduationCap, Code2, Calendar, CheckCircle2 } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "PT. Mudapedia Digital Indonesia",
      period: "Feb 2026 - May 2026",
      desc: "Bekerja sebagai full-stack engineer. Mengembangkan UI responsif dan integrasi RESTful API menggunakan Next.js, TypeScript, Supabase, dan PostgreSQL.",
    },
    {
      title: "Data Scientist Trainee",
      company: "DBS Foundation Coding Camp",
      period: "Feb 2026 - Present",
      desc: "Pelatihan intensif Data Science. Membangun Capstone Project AI: platform smart-matching influencer dan optimasi budget untuk UMKM.",
    },
    {
      title: "Mobile Dev & Scrum Master",
      company: "Bantuin Mobile App",
      period: "Jan 2025 - Present",
      desc: "Memimpin tim Agile 5 orang dan mengembangkan frontend mobile menggunakan Flutter & Firebase.",
    },
    {
      title: "Algorithm Developer",
      company: "Farmer Credit System",
      period: "Dec 2025",
      desc: "Merancang model Hybrid AHP-KNN secara native menggunakan Python & NumPy untuk penilaian kredit petani.",
    },
  ];

  const education = [
    {
      school: "Politeknik Negeri Banyuwangi",
      degree: "D4 Teknologi Rekayasa Perangkat Lunak",
      period: "2023 - Present",
      desc: "Fokus pada Software Engineering dengan capaian IPK saat ini 3.72 / 4.00.",
    },
    {
      school: "SMAN 1 NGRONGGOT",
      degree: "MIPA (Natural Sciences)",
      period: "2020 - 2023",
      desc: "Pendidikan menengah atas dengan fokus pada ilmu pengetahuan alam.",
    },
  ];

  const skillCategories = [
    {
      name: "Data Science & ML",
      items: ["Python", "Pandas", "Scikit-Learn", "Streamlit"]
    },
    {
      name: "Full-Stack Web Development",
      items: ["Next.js", "TypeScript","node.js", "Laravel", "PostgreSQL","MongoDB", "Supabase", "MySQL"]
    },
    {
      name: "Mobile Development",
      items: ["Flutter", "Dart", "Firebase", "REST API"]
    }
  ];

  return (
    <section className="bg-black py-24 px-6 lg:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Kolom 1: Experience */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Briefcase size={22} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Experience</h2>
            </div>
            <div className="space-y-10 border-l border-white/10 pl-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-white transition-colors duration-500" />
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                    <Calendar size={12} /> {exp.period}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-gray-300 transition-colors leading-snug">{exp.title}</h3>
                  <p className="text-[11px] text-gray-500 mb-2 uppercase tracking-tighter font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 2: Education */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <GraduationCap size={22} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Education</h2>
            </div>
            <div className="space-y-10 border-l border-white/10 pl-6">
              {education.map((edu, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-white transition-colors duration-500" />
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                    <Calendar size={12} /> {edu.period}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-gray-300 transition-colors leading-snug">{edu.school}</h3>
                  <p className="text-[11px] text-gray-500 mb-2 uppercase tracking-tighter font-medium">{edu.degree}</p>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 3: Skills */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Code2 size={22} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Skills</h2>
            </div>
            
            <div className="space-y-6">
              {skillCategories.map((cat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">{cat.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-[13px] font-semibold text-gray-200 hover:border-white/30 transition-all">
                        <CheckCircle2 size={12} className="text-gray-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}