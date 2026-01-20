'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  // State baru untuk mengontrol gelembung sapaan
  const [showWelcome, setShowWelcome] = useState(false);

  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'Halo! Saya asisten virtual Nafis. Ada yang bisa saya bantu tentang portofolio ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Efek untuk memunculkan gelembung setelah 1.5 detik (biar tidak kaget pas load)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  // Fungsi saat tombol chat / gelembung diklik
  const handleOpenChat = () => {
    setIsOpen(true);
    setShowWelcome(false); // Hilangkan gelembung sapaan
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      
      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Maaf, koneksi terganggu." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* --- GELEMBUNG SAPAAN (WELCOME BUBBLE) --- */}
      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            onClick={handleOpenChat} // Klik gelembung juga membuka chat
            className="fixed bottom-24 right-6 z-50 max-w-[200px] cursor-pointer hidden md:block"
          >
            <div className="bg-white text-black px-4 py-3 rounded-xl shadow-xl border border-gray-200 relative">
              <p className="text-sm font-medium leading-tight">
                👋 Hai! Tanya sesuatu tentang <span className="text-blue-600 font-bold">Nafis</span> di sini yuk!
              </p>
              
              {/* Segitiga Panah Bawah */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-200"></div>
              
              {/* Tombol Close Kecil (Opsional: jika user ingin menutup gelembung saja) */}
              <button 
                onClick={(e) => { e.stopPropagation(); setShowWelcome(false); }}
                className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-sm"
              >
                <X size={10} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- TOMBOL UTAMA (ROBOT) --- */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleOpenChat} // Panggil fungsi handleOpenChat
        className={`fixed bottom-6 right-6 z-50 p-4 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all ${isOpen ? 'hidden' : 'flex'} items-center justify-center`}
      >
        <Bot size={28} className="text-black" />
        
        {/* Titik Merah Notifikasi (Biar makin menarik perhatian) */}
        {showWelcome && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0a0a0a] animate-pulse"></span>
        )}
      </motion.button>

      {/* --- MODAL CHAT (TETAP SAMA) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[350px] h-[500px] bg-[#0a0a0a] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Bot size={18} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Nafis AI</h3>
                  <span className="text-[10px] text-green-400 flex items-center gap-1">
                     Online
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-white text-black rounded-tr-none font-medium' 
                      : 'bg-[#1a1a1a] text-gray-200 rounded-tl-none border border-white/10'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-[#1a1a1a] p-3 rounded-2xl border border-white/10 flex items-center gap-2">
                       <Loader2 size={14} className="animate-spin text-gray-400" />
                       <span className="text-xs text-gray-500">Mengetik...</span>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-black border-t border-white/10">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tanya sesuatu..."
                  className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-white text-black rounded-full disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}