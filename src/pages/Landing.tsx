import React, { useState } from "react";
import { ChevronDown, Cpu, Crosshair, ShieldAlert, Terminal, Zap, ShieldCheck, Lock, Activity, EyeOff, BookOpen, Clock, Skull, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800 bg-[#0a0a0a] rounded-none mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900 transition-colors focus:outline-none"
      >
        <span className="font-mono text-cyan-400 text-sm md:text-base pr-4 uppercase">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-gray-400 border-t border-gray-800 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Landing() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#0070ff] selection:text-white">
      
      {/* Top Navigation Bar / System Status */}
      <nav className="fixed top-0 w-full z-50 border-b border-gray-800 bg-[#0d0d0d]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 animate-pulse rounded-full"></span>
            STATUS: SYSTEM OVERLOAD
          </div>
          <div className="hidden sm:block">ENCRYPTION: ACTIVE | PROTOCOL: RESET</div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 font-mono text-cyan-400 text-sm tracking-wider uppercase">
            &gt; Critical System Warning
          </div>
          <h1 className="text-4xl md:text-6xl md:leading-[1.1] font-black uppercase tracking-tight text-white">
            Twoje skupienie zostało <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070ff] to-cyan-400">zaburzone</span>. 
            Czas na <br/>
            <span className="border-b-4 border-[#0070ff]">twardy reset</span> systemu.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium">
            Odzyskaj 4 godziny dziennie i przestań być niewolnikiem algorytmu. Bez lania wody. Tylko twarde procedury.
          </p>
          <div className="pt-4 space-y-4">
            <button 
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-[#0070ff] hover:bg-cyan-400 text-white hover:text-black font-bold uppercase tracking-widest px-8 py-5 transition-all box-glow font-mono flex items-center justify-center gap-3 text-sm md:text-base group"
            >
              [ Przełącz się w tryb skupienia ]
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono uppercase">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Weryfikacja: Płatność zabezpieczona Stripe
            </div>
          </div>
        </div>
        
        {/* Abstract Abstract iPad/Book Mockup */}
        <div className="relative mx-auto w-full max-w-md aspect-[3/4] perspective-1000">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full h-full bg-[#050505] border border-gray-700 relative overflow-hidden box-glow-strong"
            style={{ transform: "rotateY(-15deg) rotateX(5deg)" }}
          >
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0070ff] to-transparent opacity-50"></div>
            <div className="p-8 h-full flex flex-col font-mono relative z-10">
              <div className="text-cyan-500 mb-8 flex justify-between">
                <span>[DOC_ID: X-7734]</span>
                <Battery className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold uppercase tracking-tighter text-white opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Protokół<br/>Reset
                </h3>
                <div className="mt-8 text-xs text-cyan-400/70 space-y-2 opacity-80">
                  <p>&gt; INITIATING SEQUENCE...</p>
                  <p>&gt; PURGING DOPAMINE RECEPTORS...</p>
                  <p>&gt; OVERRIDING DEFAULT HABITS...</p>
                  <p className="animate-pulse text-red-500 mt-4">&gt; 9H SCREEN TIME DETECTED. LETHAL LEVEL.</p>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-4 flex justify-between items-center text-xs text-gray-600">
                <span>v2.0_STABLE</span>
                <span>[ ENCRYPTED ]</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Sekcja Bólu */}
      <section className="py-24 bg-black relative border-y border-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 text-white">Czy to Twój obecny <span className="text-red-500 line-through">"system"</span>?</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-[#0a0a0a] p-6 border border-gray-800 hover:border-red-500/50 transition-colors">
              <Clock className="w-6 h-6 text-red-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-white mb-2 uppercase tracking-wide">Poranny paraliż</h3>
                <p className="text-gray-400">Budzisz się i pierwszą rzeczą, którą robisz, jest scrollowanie TikToka przez 40 minut?</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-[#0a0a0a] p-6 border border-gray-800 hover:border-red-500/50 transition-colors">
              <Skull className="w-6 h-6 text-red-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-white mb-2 uppercase tracking-wide">Toksyczny potencjał</h3>
                <p className="text-gray-400">Masz „potencjał”, ale wieczorem czujesz tylko wstyd, bo znowu nic nie zrobiłeś?</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-[#0a0a0a] p-6 border border-gray-800 hover:border-red-500/50 transition-colors">
              <Activity className="w-6 h-6 text-red-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-white mb-2 uppercase tracking-wide">Przebodźcowanie totalne</h3>
                <p className="text-gray-400">Twój mózg jest tak przeciążony, że przeczytanie 5 stron książki to dla Ciebie wyzwanie graniczące z cudem?</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-8 border border-[#0070ff]/30 bg-[#0070ff]/5 font-mono text-center">
            <p className="text-lg md:text-xl text-cyan-400 uppercase tracking-widest text-glow">
              <span className="text-red-500 font-bold">&gt; Werdykt:</span> Nie jesteś leniwy. Jesteś rozstrojony przez tanią dopaminę. Jesteś ofiarą, która płaci swoim czasem za bogactwo właścicieli social mediów.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Word from Author */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="p-8 md:p-12 bg-[#0a0a0a] border border-gray-800 text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-8 text-white">&gt; Byłem częścią tego błędu.</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed font-sans font-medium">
            <p>Jeszcze rok temu byłem w tym samym miejscu. Mój rekord screen time to 9 godzin dziennie. Czułem, jak mój mózg gnije.</p>
            <p>Zacząłem badać biologię dopaminy, mechanizmy uzależnień i techniki Deep Work. Nie szukałem motywacji – <strong className="text-white">szukałem systemu</strong>.</p>
            <p>Znalazłem go. <span className="text-cyan-400 font-bold line-through px-1">Protokół Reset</span> to esencja tego, co zadziałało u mnie i wyciągnęło mnie z bagna prokrastynacji.</p>
          </div>
        </div>
      </section>

      {/* 4. Modules */}
      <section className="py-24 bg-black border-y border-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 text-white">Co znajdziesz w środku?</h2>
            <p className="font-mono text-cyan-400 uppercase tracking-widest text-sm">&gt; 4 STRUKTURALNE MODUŁY. 0% BZDUR.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ModuleCard 
              number="01" 
              title="Detoks Dopaminowy" 
              desc="Jak fizycznie „naprawić” receptory w mózgu. Zrozumiesz biologię głodu na tanie bodźce i przeprowadzisz twardy reset."
              icon={<Zap className="w-8 h-8 text-cyan-400" />}
            />
            <ModuleCard 
              number="02" 
              title="Izolacja Cyfrowa" 
              desc="Ustawienia telefonu i komputera, które bezwzględnie zabiją Twoje uzależnienie. Techniczna blokada pokus."
              icon={<EyeOff className="w-8 h-8 text-cyan-400" />}
            />
            <ModuleCard 
              number="03" 
              title="Głęboka Praca" 
              desc="Jak wejść w stan absolutnego flow w 5 minut. Uruchamianie trybu pracy, którego nie przerwie żadne powiadomienie."
              icon={<Crosshair className="w-8 h-8 text-cyan-400" />}
            />
            <ModuleCard 
              number="04" 
              title="Architektura Dnia" 
              desc="Twój nowy, niezłomny harmonogram. Projektowanie bloków czasowych, które gwarantują dowożenie wyników."
              icon={<Cpu className="w-8 h-8 text-cyan-400" />}
            />
          </div>
        </div>
      </section>

      {/* 5. Case Study */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 text-white">POTWIERDZENIE SKUTECZNOŚCI</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <CaseStudyCard 
            name="KAMIL"
            age="22"
            quote="Zredukowałem screen time z 7h do 1.5h w trzy dni. Nareszcie dowożę projekty na czas omijając rozpraszacze."
            status="VERIFIED"
          />
          <CaseStudyCard 
            name="MATEUSZ"
            age="19"
            quote="Myślałem, że mam ADHD. Okazało się, że miałem po prostu mózg rozwalony przez shorty. Protokół Reset to była moja ostatnia szansa. Działa."
            status="VERIFIED"
          />
        </div>
      </section>

      {/* 6. Bonus Section */}
      <section className="py-16 bg-[#0070ff] text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8">
             ODBLOKOWANY BONUS (TYLKO DZIŚ)
          </h2>
          <div className="bg-white p-8 transform rotate-1 border-4 border-black box-shadow-solid">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <ShieldAlert className="w-16 h-16 text-black" />
              <div className="text-left">
                <h3 className="text-2xl font-black uppercase">Protokół Awaryjny (PDF)</h3>
                <p className="font-medium mt-2">Co zrobić, gdy wracasz do starych nałogów? Instrukcja powrotu na tory w 10 minut.</p>
                <div className="mt-4 font-mono font-bold text-lg">
                  WARTOŚĆ: <span className="line-through text-gray-500">29 PLN</span> <span className="text-red-600 bg-yellow-300 px-2 ml-2">DZIŚ FREE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Finalny CTA */}
      <section id="pricing" className="py-32 px-6 bg-black border-y border-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,112,255,0.15),transparent_70%)]"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10 border border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-sm p-8 md:p-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 text-white">
            Wybierz: Dalsze scrollowanie życia, czy <span className="text-cyan-400 shadow-sm text-glow">Protokół</span>?
          </h2>
          
          <div className="my-10 flex flex-col items-center justify-center">
            <div className="text-sm font-mono text-gray-500 uppercase tracking-widest line-through mb-2">Standardowa cena: 129 PLN</div>
            <div className="text-6xl md:text-8xl font-black text-white px-8 py-4 border-2 border-cyan-500 box-glow bg-black">
              69 <span className="text-2xl md:text-4xl text-cyan-400">PLN</span>
            </div>
          </div>
          
          <a href="https://buy.stripe.com/8x2dR26zXcX5dTw1QydfG00" className="w-full bg-[#0070ff] hover:bg-cyan-400 text-white hover:text-black font-bold uppercase tracking-widest px-8 md:px-12 py-6 transition-all box-glow font-mono text-lg md:text-xl flex items-center justify-center gap-4 group">
            [ Wdrażam Protokół Reset ]
            <Lock className="w-6 h-6" />
          </a>
          
          <div className="mt-6 flex flex-col items-center gap-2 font-mono text-xs text-gray-500 uppercase">
            <div className="flex items-center gap-2"><BookOpen className="w-4 h-4"/> Natychmiastowy dostęp PDF na e-mail</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500"/> Zabezpieczone przez globalnego operatora STRIPE</div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase text-white mb-2">FAQ</h2>
          <p className="font-mono text-cyan-500 text-sm tracking-widest uppercase">&gt; Baza wiedzy logistycznej</p>
        </div>
        
        <div className="space-y-4">
          <FAQItem 
            question="Czym jest Protokół Reset?"
            answer="To zbiór twardych, technicznych reguł i nawyków w formie PDF, które krok po kroku pomogą Ci usunąć z życia tanich pożeraczy czasu (social media) i odzyskać pełne skupienie."
          />
          <FAQItem 
            question="Kiedy otrzymam dostęp do materiałów?"
            answer="Dostęp jest natychmiastowy. Od razu po zaksięgowaniu płatności, system automatycznie wyśle plik PDF z Protokołem na podany adres e-mail."
          />
          <FAQItem 
            question="Dla kogo jest ten poradnik?"
            answer="Dla dorosłych, przedsiębiorców, studentów i każdego, kto czuje, że traci kontrolę nad swoim powiadomieniami i marnuje godziny na bezmyślne scrollowanie. To nie jest motywacyjny e-book, tylko instrukcja obsługi Twojego telefonu i głowy."
          />
          <FAQItem 
            question="W jakim formacie jest protokół?"
            answer="Plik wysyłany jest w uniwersalnym, bezpiecznym formacie PDF. Możesz go czytać na telefonie, tablecie, komputerze lub wydrukować dla maksymalnego efektu offline."
          />
          <FAQItem 
            question="Czy płatność jest całkowicie bezpieczna?"
            answer="Tak. Za przetwarzanie płatności i dostarczenie produktu cyfrowego odpowiada Stripe – globalny procesor gwarantujący pełne zabezpieczenie Twoich danych finansowych."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black py-8 text-center font-mono text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} PROTOKÓŁ RESET. ALL RIGHTS RESERVED.</p>
        <div className="flex justify-center gap-6 mt-6 mb-4 text-cyan-500 uppercase tracking-widest text-[10px] md:text-xs">
           <Link to="/regulamin" className="hover:text-white transition-colors">[ Regulamin Systemu ]</Link>
           <Link to="/polityka-prywatnosci" className="hover:text-white transition-colors">[ Polityka Prywatności ]</Link>
        </div>
        <p className="mt-2">[ END OF COMMUNICATION ]</p>
      </footer>
    </div>
  );
}

// Subcomponents

function ModuleCard({ number, title, desc, icon }: { number: string; title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="border border-gray-800 bg-[#0a0a0a] p-8 hover:border-cyan-500/50 transition-colors group relative overflow-hidden">
      <div className="absolute -right-4 -top-4 opacity-5 font-black text-9xl">{number}</div>
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
          {icon}
        </div>
        <div>
          <span className="font-mono text-cyan-400 text-xs font-bold tracking-widest uppercase block mb-1">MODUŁ {number}</span>
          <h3 className="text-xl font-bold uppercase text-white">{title}</h3>
        </div>
      </div>
      <p className="text-gray-400 font-medium relative z-10 leading-relaxed font-sans">{desc}</p>
    </div>
  );
}

function CaseStudyCard({ name, age, quote, status }: { name: string; age: string; quote: string; status: string }) {
  return (
    <div className="p-6 border border-gray-800 bg-[#050505] font-mono relative">
      <div className="absolute top-0 right-0 bg-[#0070ff] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
        {status}
      </div>
      <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
        <div className="w-10 h-10 bg-gray-800 flex items-center justify-center">
          <Terminal className="w-5 h-5 text-gray-400" />
        </div>
        <div>
          <div className="text-white font-bold uppercase">{name}</div>
          <div className="text-gray-500 text-xs">AGE_: {age}</div>
        </div>
      </div>
      <p className="text-cyan-400 text-sm leading-relaxed">&gt; "{quote}"</p>
    </div>
  );
}

function Battery({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="square" 
      strokeLinejoin="miter" 
      className={className}
    >
      <rect x="2" y="7" width="16" height="10" />
      <line x1="22" y1="11" x2="22" y2="13" />
      <line x1="6" y1="10" x2="6" y2="14" />
      <line x1="10" y1="10" x2="10" y2="14" />
      <line x1="14" y1="10" x2="14" y2="14" />
    </svg>
  );
}
