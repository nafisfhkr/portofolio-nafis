import { Smartphone } from "lucide-react"; 

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-6 lg:px-20 flex justify-between items-center bg-transparent">
      {/* Menu Navigasi Kiri */}
      <ul className="flex gap-8 text-[11px] font-medium tracking-[0.2em] text-white uppercase">
        <li className="cursor-pointer text-cyan-400 border-b border-cyan-400 pb-1">Home</li>
        <li className="cursor-pointer hover:text-gray-400 transition">About</li>
        <li className="cursor-pointer hover:text-gray-400 transition">Resume</li>
        <li className="cursor-pointer hover:text-gray-400 transition">Portfolio</li>
      </ul>

      {/* Info Kontak Kanan */}
      <div className="hidden md:flex items-center gap-2 text-[11px] tracking-widest text-white uppercase font-light">
        <Smartphone size={14} className="text-white" />
        <span>774-555-3021</span>
      </div>
    </nav>
  );
}