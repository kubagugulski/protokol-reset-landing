import { CheckCircle, Download, FileText, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Success() {
  return (
    <div className="min-h-screen font-sans bg-[#0d0d0d] text-gray-300 selection:bg-[#0070ff] selection:text-white flex flex-col">
      <nav className="w-full z-50 border-b border-gray-800 bg-[#0d0d0d]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-xs text-gray-500">
          <div className="flex items-center gap-2 text-green-500">
            <CheckCircle className="w-4 h-4" /> PAYMENT_VERIFIED
          </div>
          <div className="flex items-center gap-2 text-cyan-500">
            <Terminal className="w-4 h-4" /> SECURE_TRANSFER
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-6 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full border border-[#0070ff]/30 bg-[#0a0a0a] p-8 md:p-12 relative overflow-hidden box-glow"
        >
          <div className="absolute top-0 right-0 p-4 font-mono text-xs text-green-500 select-none animate-pulse">
            [ STATUS: AUTORYZACJA OK ]
          </div>
          
          <div className="mb-8">
            <FileText className="w-16 h-16 text-cyan-400 mb-6" />
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Dostęp <span className="text-cyan-400">Przyznany</span>
            </h1>
            <p className="font-mono text-gray-400 text-sm leading-relaxed">
              &gt; Operacja finansowa zakończona sukcesem.<br/>
              &gt; Środki zabezpieczone przez operatora płatności.<br/>
              &gt; Plik został wygenerowany i jest gotowy do pobrania.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-gray-800">
            {/* The actual download button */}
            <a 
              href="/ebook-protokol-reset.pdf" 
              download
              className="w-full bg-[#0070ff] hover:bg-cyan-400 text-white hover:text-black font-bold uppercase tracking-widest px-8 md:px-12 py-6 transition-all box-glow font-mono text-lg md:text-xl flex items-center justify-center gap-4 group cursor-pointer text-center"
            >
              <Download className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              [ Pobierz Protokół Reset ]
            </a>
            
            <p className="font-mono text-xs text-gray-500 text-center uppercase tracking-widest mb-4">
              Format: Dokument PDF | Rozmiar: ~0.9 MB
            </p>

            <div className="flex justify-center mt-8 pt-4">
                 <Link to="/" className="font-mono text-xs text-gray-600 hover:text-white transition-colors uppercase tracking-widest">
                   [ Wróć do ekranu startowego ]
                 </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-gray-900 bg-black py-6 text-center font-mono text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} PROTOKÓŁ RESET. ALL RIGHTS RESERVED.</p>
        <p className="mt-1">[ CONNECTION SECURED ]</p>
      </footer>
    </div>
  );
}
