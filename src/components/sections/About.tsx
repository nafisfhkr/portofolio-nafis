'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black pt-40 pb-32 px-6 lg:px-20 text-white">
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
              Saya adalah mahasiswa Teknik Informatika yang berfokus pada pengembangan perangkat lunak modern. 
              Dengan keahlian di bidang <span className="text-white font-medium italic">Software Engineering</span>, 
              saya berdedikasi untuk menciptakan solusi digital yang efisien dan memiliki pengalaman pengguna yang luar biasa.
            </p>
            
            <p className="mt-6 text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl">
              Fokus utama saya saat ini adalah mendalami arsitektur sistem dan teknologi web terbaru untuk membangun aplikasi yang skalabel.
            </p>
          </motion.div>
        </div>

       
        <div className="relative flex-1 lg:w-2/5 flex justify-center lg:justify-end">
          
          <div className="relative w-72 lg:w-80 group">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-8 -left-8 opacity-30 z-0"
            >
               <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                 <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                   <circle cx="2" cy="2" r="2" className="fill-white" />
                 </pattern>
                 <rect width="100" height="100" fill="url(#dots)" />
               </svg>
            </motion.div>

            <motion.div 
              className="absolute inset-0 bg-neutral-800 rounded-xl rotate-3 scale-[1.02] z-0"
              whileHover={{ rotate: 6, scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            <motion.div 
              className="relative z-10 rounded-xl overflow-hidden bg-gray-900 shadow-2xl border border-white/10"
              whileHover={{ y: -5 }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/fotonfs.png" 
                alt="Nafis Portrait"
                width={600} 
                height={800}
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-110"
                priority
              />
              
              {/* Gradient halus bawah */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </motion.div>

            <motion.div 
              className="absolute -bottom-3 -right-3 w-full h-full border border-white/20 rounded-xl -z-10"
              whileHover={{ x: 8, y: 8 }} 
            />

          </div>
        </div>

      </div>
    </section>
  );
}