'use client';

import { motion } from "framer-motion";
import Lanyard from "../ui/Lanyard";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black pt-24 lg:pt-28 pb-16 lg:pb-24 px-6 lg:px-20 text-white">
      <div className="absolute top-24 right-10 opacity-5 select-none pointer-events-none">
        <h2 className="text-[10rem] lg:text-[15rem] font-black leading-none uppercase">About</h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        
        <div className="relative z-10 flex-1 lg:w-3/5">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-tight mb-6">
              About <span className="text-gray-500">Me</span>
            </h2>
            
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-3xl font-light">
  Saya adalah mahasiswa Teknik Informatika dengan fokus pada 
  <span className="text-white font-medium italic"> Machine Learning</span>, 
  <span className="text-white font-medium italic"> Data Science</span>, dan 
  <span className="text-white font-medium italic"> pengembangan backend modern</span>.
  Saya tertarik membangun sistem backend yang scalable serta solusi berbasis data
  untuk mendukung pengambilan keputusan.
</p>
            
            <p className="mt-6 text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl">
Saat ini, saya mendalami pengembangan REST API, arsitektur sistem backend, serta penerapan algoritma Machine Learning dan analisis data 
menggunakan Python dan teknologi web modern untuk membangun solusi digital yang efisien dan berdampak.            </p>
          </motion.div>
        </div>

       
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
