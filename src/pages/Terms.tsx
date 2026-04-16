import { Link } from "react-router-dom";
import { ArrowLeft, Terminal } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen font-sans bg-[#0d0d0d] text-gray-300 selection:bg-[#0070ff] selection:text-white">
      <nav className="fixed top-0 w-full z-50 border-b border-gray-800 bg-[#0d0d0d]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-xs text-gray-500">
          <Link to="/" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> SECURE ROOT
          </Link>
          <div className="flex items-center gap-2 text-cyan-500">
            <Terminal className="w-4 h-4" /> RULES_OF_ENGAGEMENT
          </div>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-3xl mx-auto">
        <div className="border border-gray-800 bg-[#0a0a0a] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-xs text-gray-700 select-none">[ FILE: TERMS_AND_CONDITIONS.TXT ]</div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-8 border-b border-gray-800 pb-4">
            Regulamin &gt;_ <span className="text-cyan-400">Systemu</span>
          </h1>

          <div className="space-y-6 font-mono text-sm leading-relaxed text-gray-400">
            <section>
              <h2 className="text-white text-lg font-bold mb-2 uppercase tracking-widest">1. Postanowienia Ogólne</h2>
              <p>1.1. Niniejszy dokument określa protokoły dostępu do produktu "Protokół Reset", obsługiwanego drogą elektroniczną.</p>
              <p>1.2. Transakcja wiąże się z jednorazową opłatą za dostęp do zasobów cyfrowych (PDF).</p>
            </section>
            
            <section>
              <h2 className="text-white text-lg font-bold mb-2 uppercase tracking-widest">2. Dostęp i Wymagania Techniczne</h2>
              <p>2.1. Do poprawnego rozszyfrowania plików potrzebny jest czytnik PDF (np. Adobe Acrobat) lub nowoczesna przeglądarka podłączona do sieci.</p>
              <p>2.2. Dostęp zostaje przyznany do 5 minut (w standardowych warunkach obciążenia serwera) po uzyskaniu weryfikacji operacji przez operatora płatności.</p>
            </section>
            
            <section>
              <h2 className="text-white text-lg font-bold mb-2 uppercase tracking-widest">3. Reklamacje i Odstąpienie od Umowy</h2>
              <p>3.1. Ze względu na w pełni cyfrowy charakter i natychmiastowy dostęp do wiedzy, z chwilą nadania dostępu konsument traci prawo do odstąpienia od umowy w modelu klasycznym. Wymagane jest zaznaczenie odpowiedniej zgody podczas procesu w kasie.</p>
              <p>3.2. Reklamacje wynikające z awarii infrastruktury (np. niedostarczenie linku) rozpatrywane są priorytetowo (do 24h) po zgłoszeniu na adres wsparcia.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-bold mb-2 uppercase tracking-widest">4. Prawo Własności Intelektualnej</h2>
              <p>4.1. Kod źródłowy metody (treść ebooka) stanowi własność intelektualną. Zakazuje się jego dystrybucji, modyfikacji lub bezprawnego kopiowania na serwery stron trzecich.</p>
            </section>
            
            <section className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-600">
              <p>Ostatnia aktualizacja plików: 16 APR 2026</p>
              <p>[ KONIEC ZAPISU ]</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
