import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen font-sans bg-[#0d0d0d] text-gray-300 selection:bg-[#0070ff] selection:text-white">
      <nav className="fixed top-0 w-full z-50 border-b border-gray-800 bg-[#0d0d0d]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-xs text-gray-500">
          <Link to="/" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> SECURE ROOT
          </Link>
          <div className="flex items-center gap-2 text-cyan-500">
            <Shield className="w-4 h-4" /> ENCRYPTED
          </div>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-3xl mx-auto">
        <div className="border border-gray-800 bg-[#0a0a0a] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-xs text-gray-700 select-none">[ FILE: PRIVACY_POLICY.TXT ]</div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-8 border-b border-gray-800 pb-4">
            Polityka &gt;_ <span className="text-cyan-400">Prywatności</span>
          </h1>

          <div className="space-y-6 font-mono text-sm leading-relaxed text-gray-400">
            <section>
              <h2 className="text-white text-lg font-bold mb-2 uppercase tracking-widest">1. Definicje Systemowe</h2>
              <p>1.1. Administrator – podmiot zarządzający danymi w ramach Protokołu Reset.</p>
              <p>1.2. Użytkownik – każda jednostka uzyskująca dostęp do zasobów systemu.</p>
            </section>
            
            <section>
              <h2 className="text-white text-lg font-bold mb-2 uppercase tracking-widest">2. Zbieranie Danych</h2>
              <p>2.1. Zbieramy wyłącznie niezbędne logi operacyjne: adres e-mail, dane płatności (realizowane przez zewnętrzny procesor Stripe) w celu autoryzacji dostępu.</p>
              <p>2.2. Nie handlujemy Twoją uwagą. Zależy nam na tym, abyś spędzał u nas jak najmniej czasu i wrócił do realnego życia.</p>
            </section>
            
            <section>
              <h2 className="text-white text-lg font-bold mb-2 uppercase tracking-widest">3. Bezpieczeństwo i Szyfrowanie</h2>
              <p>3.1. Przekazywane dane są szyfrowane (SSL). Płatności operowane są przez Stripe z zachowaniem najwyższych standardów PCI-DSS.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-bold mb-2 uppercase tracking-widest">4. Prawa Obiektu (Użytkownika)</h2>
              <p>4.1. Masz pełne prawo do wglądu, modyfikacji i permanentnego wymazania (wipingu) swoich danych z naszych serwerów.</p>
              <p>4.2. W celu ekstrakcji danych lub zgłoszenia żądania usunięcia, wyślij żądanie na protokol@reset.hq.</p>
            </section>
            
            <section className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-600">
              <p>Ostatnia aktualizacja bazy danych: 16 APR 2026</p>
              <p>[ KONIEC ZAPISU ]</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
