import LiquidEther from '../ui/LiquidEther';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center lg:justify-start lg:px-20 bg-[#060010]">
      
      {/* --- BACKGROUND LIQUID ETHER --- */}
      <div className="absolute inset-0 z-10">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-20 text-center lg:text-left px-6">
        
        {/* Judul Nama */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-none">
          M NAFIS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Fakhrudin
          </span>
        </h1>

        {/* Deskripsi */}
        <p className="mt-6 text-sm md:text-base lg:text-lg font-light tracking-[0.3em] text-gray-400 uppercase">
          Software Engineering Student & Tech Enthusiast
        </p>

        {/* Tombol Aksi (Resume) */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="/Resume.pdf"
            download
            className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-gray-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            RESUME
          </a>
        </div>
      </div>

      {/* --- SOCIAL ICONS --- */}
      <div className="absolute bottom-10 left-10 z-20 hidden lg:flex gap-6 text-white/40 text-sm tracking-widest font-medium">
        <a 
          href="https://github.com/nafisfhkr" 
          className="hover:text-white hover:scale-110 transition-all duration-300"
        >
          GITHUB
        </a>
        <a 
          href="https://www.linkedin.com/in/m-nafis-fakhrudin-653293339/" 
          className="hover:text-white hover:scale-110 transition-all duration-300"
        >
          LINKEDIN
        </a>
        <a 
          href="https://www.instagram.com/_nafisfakhru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
          className="hover:text-white hover:scale-110 transition-all duration-300"
        >
          INSTAGRAM
        </a>
      </div>
    </section>
  );
}