export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center lg:justify-start lg:px-20">
      {/* 1. Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/bg-hero.mp4" type="video/mp4" />
      </video>

      {/* 2. Overlay Gelap & Gradient */}
      <div className="absolute inset-0 z-10 bg-black/50 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>

      {/* 3. Konten Teks */}
      <div className="relative z-20 text-center lg:text-left px-6">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-none">
          M NAFIS <br />
          <span className="text-gray-300">Fakhrudin</span>
        </h1>
        
        <p className="mt-4 text-sm md:text-base lg:text-lg font-light tracking-[0.3em] text-gray-400 uppercase">
          Software Engineering Student
        </p>

        {/* Tombol Aksi */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
          <button className="rounded-full border border-white/50 bg-white/10 px-10 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black">
            RESUME
          </button>
          <button className="rounded-full border border-white/50 bg-white/10 px-10 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black">
            CONTACT ME
          </button>
        </div>
      </div>

      {/* 4. Social Icons (Samping) */}
      <div className="absolute bottom-10 left-10 z-20 hidden lg:flex gap-6 text-white/60 text-sm tracking-widest">
        <a href="#" className="hover:text-white transition">GITHUB</a>
        <a href="#" className="hover:text-white transition">LINKEDIN</a>
        <a href="#" className="hover:text-white transition">INSTAGRAM</a>
      </div>
    </section>
  );
}