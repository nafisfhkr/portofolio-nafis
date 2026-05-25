'use client';

import Lanyard from "../ui/Lanyard";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black pt-20 lg:pt-28 pb-16 lg:pb-24 px-6 lg:px-20 text-white">
     

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* TEXT SECTION */}
        <div className="relative z-10 flex-1 lg:w-3/5">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-tight mb-6">
              About <span className="text-gray-500">Me</span>
            </h2>
            
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-3xl font-light">
              Saya adalah mahasiswa tingkat akhir Teknik Informatika (GPA: 3.72/4.00) sekaligus 
              <span className="text-white font-medium italic"> Software Engineer Intern</span> 
            </p>
            
            <p className="mt-6 text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl">
              Fokus saya terbagi menjadi dua pilar utama: membangun aplikasi berskala produksi menggunakan Next.js, TypeScript, dan Flutter, serta menganalisis dan mengolah data melalui Python dan algoritma Machine Learning. Saya percaya bahwa arsitektur kode yang baik sama pentingnya dengan algoritma yang cerdas.
            </p>

            <p className="mt-6 text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl">
              Di luar coding, saya memiliki pengalaman memimpin tim sebagai Scrum Master dan bangga meraih penghargaan <span className="text-white font-medium">Juara 2 Cipta Inovasi (Kategori Inovasi Unik)</span> di tingkat Nasional pada ajang KMIPN VII 2025.
            </p>

            {/* Highlight Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10 max-w-lg">
              <div className="bg-[#0a0a0a] p-6 border border-white/10 rounded-2xl hover:border-white/30 transition-colors">
                <h3 className="text-3xl font-black text-white mb-1">3.72</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Current GPA</p>
              </div>
              <div className="bg-[#0a0a0a] p-6 border border-white/10 rounded-2xl hover:border-white/30 transition-colors">
                <h3 className="text-3xl font-black text-white mb-1">2nd</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Unique Innovation (KMIPN)</p>
              </div>
            </div>

          </div>
        </div>

        {/* LANYARD SECTION */}
        <div className="relative flex-1 lg:w-2/5 flex justify-center lg:justify-end overflow-visible">
          <div className="relative w-full max-w-[520px] lg:max-w-[560px] h-[70vh] sm:h-[75vh] lg:h-[80vh] min-h-[420px] lg:min-h-[520px] overflow-visible">
            <div className="w-full h-full">
              <Lanyard
                position={[0, 0, 15]}    
                gravity={[0, -40, 0]}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}