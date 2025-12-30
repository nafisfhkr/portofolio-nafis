'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const row1 = [
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Dart", icon: "https://cdn.simpleicons.org/dart/0175C2" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
];

const row2 = [
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
];

export default function SkillsScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section 
      ref={containerRef}
      className="bg-black py-32 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white italic">
          Tools & <span className="text-gray-600">Technologies</span>
        </h2>
        <p className="text-gray-500 mt-4 text-sm uppercase tracking-widest font-bold">
          Scroll to explore my stack
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Baris 1 */}
        <motion.div style={{ x: x1 }} className="flex gap-8 whitespace-nowrap">
          {row1.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
          {/* Duplikasi untuk memperpanjang barisan agar tidak kosong di layar lebar */}
          {row1.map((skill, i) => (
            <SkillCard key={`row1-dup-${i}`} skill={skill} />
          ))}
        </motion.div>

        {/* Baris 2 */}
        <motion.div style={{ x: x2 }} className="flex gap-8 whitespace-nowrap">
          {row2.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
          {row2.map((skill, i) => (
            <SkillCard key={`row2-dup-${i}`} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Sub-komponen Card agar kode lebih bersih
function SkillCard({ skill }: { skill: any }) {
  return (
    <div className="flex items-center gap-5 bg-neutral-900/50 border border-white/10 px-10 py-5 rounded-2xl hover:bg-white transition-all duration-500 group cursor-default shadow-xl">
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-8 h-8 object-contain filter brightness-110 group-hover:brightness-100 transition-all" 
      />
      <span className="font-bold uppercase tracking-[0.2em] text-sm text-gray-400 group-hover:text-black transition-colors">
        {skill.name}
      </span>
    </div>
  );
}