"use client";

import { Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

type SectionId = 'home' | 'about' | 'resume' | 'projects'| 'contact';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const scrollToSection = (id: SectionId): void => {
  setActiveSection(id);
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 80; 
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

  // Deteksi section aktif saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['home', 'about', 'resume', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger sekali saat mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const navItems: { id: SectionId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-6 lg:px-20 flex justify-between items-center bg-transparent backdrop-blur-sm">
      {/* Menu Navigasi Kiri */}
      <ul className="flex gap-8 text-[11px] font-medium tracking-[0.2em] text-white uppercase">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer pb-1 transition-all duration-300 ${
                activeSection === item.id
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "hover:text-cyan-300 hover:border-b hover:border-cyan-300/50"
              }`}
              aria-label={`Scroll to ${item.label} section`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Info Kontak Kanan */}
      <div className="hidden md:flex items-center gap-2 text-[11px] tracking-widest text-white uppercase font-light">
        <Smartphone size={14} className="text-white" />
        <span>087-86227-5587</span>
      </div>
    </nav>
  );
}