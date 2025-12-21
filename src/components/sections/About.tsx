import Image from "next/image";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black pt-40 pb-32 px-6 lg:px-20 text-white">
      {/* Dekorasi Background: Teks Transparan */}
      <div className="absolute top-24 right-10 opacity-5 select-none pointer-events-none">
        <h2 className="text-[10rem] lg:text-[15rem] font-black leading-none uppercase">About</h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Kolom Kiri: Teks Pengenalan Saja */}
        <div className="relative z-10 flex-1">
          <div className="mb-8">
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-tight">
              About <span className="text-gray-500">Me</span>
            </h2>
          </div>

          <p className="text-gray-400 text-xl lg:text-2xl leading-relaxed max-w-2xl font-light">
            Saya adalah mahasiswa Teknik Informatika yang berfokus pada pengembangan perangkat lunak modern. 
            Dengan keahlian di bidang <span className="text-white font-medium italic">Software Engineering</span>, 
            saya berdedikasi untuk menciptakan solusi digital yang efisien dan memiliki pengalaman pengguna yang luar biasa.
          </p>
          
          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">
            Fokus utama saya saat ini adalah mendalami arsitektur sistem dan teknologi web terbaru untuk membangun aplikasi yang skalabel.
          </p>
        </div>

        {/* Kolom Kanan: Foto dengan Efek Monokrom */}
        <div className="relative flex-1 flex justify-center lg:justify-end">
          {/* Efek Cahaya Halus di Belakang Foto */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[450px] md:h-[450px] bg-white/5 rounded-full blur-[100px] -z-0"></div>
          
          <div className="relative z-10 w-full max-w-sm lg:max-w-md">
            <Image
              src="/fotoI.png" 
              alt="Nafis Portrait"
              width={800}
              height={1000}
              className="w-full h-auto drop-shadow-2xl transition-all duration-1000 ease-in-out grayscale hover:grayscale-0 scale-[0.98] hover:scale-100"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}