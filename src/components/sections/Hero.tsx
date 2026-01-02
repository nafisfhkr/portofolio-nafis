import Galaxy from "../ui/Galaxy";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center lg:justify-start lg:px-20">
      {/* 1. Galaxy Background */}
      <div className="absolute inset-0 z-0 bg-[#060010]">
        <Galaxy />
      </div>

      {/* 2. Overlay Gelap & Gradient */}
      <div className="absolute inset-0 z-10 bg-black/60 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

      {/* 3. Konten Teks */}
      <div className="relative z-20 text-center lg:text-left px-6">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-none">
          M NAFIS <br />
          <span className="text-gray-300">Fakhrudin</span>
        </h1>

        <p className="mt-4 text-sm md:text-base lg:text-lg font-light tracking-[0.3em] text-gray-400 uppercase">
          Software Engineering Student & Tech Enthusiast
        </p>

        {/* Tombol Aksi */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-10 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
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

      {/* 4. Social Icons  */}
      <div className="absolute bottom-10 left-10 z-20 hidden lg:flex gap-6 text-white/60 text-sm tracking-widest">
        <a href="https://github.com/nafisfhkr" className="hover:text-white transition">GITHUB</a>
        <a href="https://www.linkedin.com/in/m-nafis-fakhrudin-653293339/" className="hover:text-white transition">LINKEDIN</a>
        <a href="https://www.instagram.com/_nafisfakhru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-white transition">INSTAGRAM</a>
      </div>
    </section>
  );
}
