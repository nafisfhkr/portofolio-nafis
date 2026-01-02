'use client';

const skills = [
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Dart", icon: "https://cdn.simpleicons.org/dart/0175C2" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
];

export default function SkillsGrid() {
  return (
    <section className="bg-black py-24 px-6 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic text-white">
            Tools & <span className="text-gray-600">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg text-sm uppercase tracking-widest font-bold">
            Kumpulan teknologi yang saya gunakan untuk membangun solusi digital.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center justify-center gap-4 bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] hover:bg-white hover:border-white transition-all duration-500 cursor-default shadow-xl"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain filter brightness-110 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500" 
                />
              </div>
              <span className="font-bold uppercase tracking-[0.2em] text-[10px] text-gray-500 group-hover:text-black transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}