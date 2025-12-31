'use client';

import { Github, Linkedin, Instagram, ArrowUp, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: Branding */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
              M NAFIS <span className="text-gray-600">FAKHRUDIN</span>
            </h2>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed">
              Informatics Engineering Student & Software Developer. Berfokus pada pembangunan solusi digital yang berdampak melalui Mobile, Web, dan AI Engineering.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={scrollToTop} className="hover:text-gray-400 transition-colors">Home</button></li>
              <li><Link href="#about" className="hover:text-gray-400 transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-gray-400 transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-gray-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Socials */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/nafisfhkr" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/m-nafis-fakhrudin-653293339/" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/_nafisfakhru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white/5 mb-8" />

        <div className="flex flex-col md:row items-center justify-between gap-6">
          <p className="text-[10px] font-medium text-gray-600 uppercase tracking-widest">
            © {currentYear} All Rights Reserved. Built with <span className="text-white">Next.js</span> & <span className="text-white">Tailwind</span>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            Back to top 
            <div className="p-2 bg-white/5 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}