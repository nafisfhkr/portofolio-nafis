'use client';

import { useState } from "react";
import { Mail, Send, MapPin, Loader2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="bg-black py-24 px-6 lg:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* BAGIAN KIRI: Informasi Kontak */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter italic mb-8">
              Get in <span className="text-gray-600">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md font-light leading-relaxed">
              Punya ide menarik atau ingin berkolaborasi? Saya selalu terbuka untuk diskusi mengenai pengembangan software atau machine learning.
            </p>

            <div className="space-y-10">
              {/* Info Email */}
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Email Me</p>
                  <p className="text-lg font-bold">nafisfakhru@email.com</p>
                </div>
              </div>

              {/* Info Lokasi */}
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Location</p>
                  <p className="text-lg font-bold">East Java, Indonesian</p>
                </div>
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN: Formulir Kontak */}
          <div className="bg-white/[0.02] border border-white/10 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Name</label>
                  <input 
                    name="name" 
                    placeholder="Nafis Fakhrudin" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white transition-all text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="cth:nafis@example.com" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white transition-all text-sm" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Subject</label>
                <input 
                  name="subject" 
                  placeholder="Inquiry for Project" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white transition-all text-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Message</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white text-black font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={18} />}
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Notifikasi Status */}
              {status === "success" && (
                <p className="text-green-500 text-center font-bold animate-pulse text-sm">
                  Pesan berhasil dikirim! Terima kasih.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-bold text-sm">
                  Gagal mengirim pesan. Silakan coba lagi.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}