import { createFileRoute, Link } from "@tanstack/react-router";
import { Construction, Play, ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/porcelanato")({
  head: () => ({
    meta: [
      { title: "La Casa del Constructor | Porcelanato Líquido Elite" },
      { name: "description", content: "Domina el arte del porcelanato líquido con los mejores. Una experiencia premium de aprendizaje." },
      { property: "og:title", content: "La Casa del Constructor | Porcelanato Líquido Elite" },
      { property: "og:description", content: "Domina el arte del porcelanato líquido con los mejores. Una experiencia premium de aprendizaje." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Porcelanato,
});

const LESSONS = [
  { title: "PORCELANATO LÍQUIDO BANCADA / MESÓN", id: "88XmeFu29oQ" },
  { title: "PORCELANATO LÍQUIDO PASO A PASO EN ESPAÑOL", id: "jJitHg0oEYM" },
  { title: "PORCELANATO LÍQUIDO PASO A PASO EFECTO MÁRMOL", id: "iueLV6osys0" },
  { title: "Porcelanato Líquido Efecto Mármol Obra Concluída", id: "aH4T8Y11lfk" },
  { title: "Porcelanato Líquido Paso a Paso Efecto Mármol Resina Epóxica", id: "qVn1_5-eUcQ" },
  { title: "Porcelanato Liquido Pia / Lavabo", id: "PT54n8Ns0Q4" },
  { title: "Instalación de Porcelanato Líquido en Mesada", id: "IRzNWPZNzx4" },
  { title: "Porcelanato Líquido Obra Concluida", id: "lWHlWEcSX5A" },
  { title: "Porcelanato Liquido En La Ducha No Resbala", id: "FJQgadFnxyE" },
  { title: "Porcelanato liquido 3d paso a paso en español", id: "TcHruiTJu8Y" },
  { title: "Porcelanato Líquido paso a paso en piso de cemento", id: "BpL9rdpPIGE" },
  { title: "Aplicación de Porcelanato Líquido Profesional", id: "GFJ42v-FfO0" },
  { title: "Porcelanato Líquido 3D Paso a Paso en Español efecto Mármol", id: "X-onO_3S0MM" },
  { title: "Porcelanato liquido en español paso a paso", id: "EMmconu0zDc" },
  { title: "Porcelanato liquido en español paso a paso II", id: "9Gm2RY4luF4" },
  { title: "PORCELANATO LÍQUIDO PASO A PASO EN ESPAÑOL EFECTO GLITTER BRILLO", id: "g742qHIaNXc" },
  { title: "SUELO DE PORCELANATO LÍQUIDO PASO A PASO (EFECTO GLITTER)", id: "gIF0rh3P-nY" },
  { title: "APLICACIÓN DE RESINA INCOLOR TRABAJO CULMINADO", id: "ktHASIvmr7g" },
  { title: "JOYERÍA DE RESINA EPÓXICA PASO A PASO", id: "6-8vm1A76PU" },
  { title: "PORCELANATO LÍQUIDO PASO A PASO EN ESPAÑOL EN PISO DE CEMENTO", id: "DMPPI2ddHvg" },
  { title: "Porcelanato líquido paso a paso para baños y lavabos", id: "1YC2OB8gnNA" },
  { title: "Resina Epóxica en Pisos y Mesadas", id: "OHqIKvvXb-A" },
  { title: "PORCELANATO LÍQUIDO EFECTO OCÉANO PASO A PASO", id: "F9cuBmSym10" },
  { title: "PISO 3D #shorts", id: "qZOnZ3z1uKc" },
  { title: "APLICANDO RESINA EPOXICA SIN LIJAR EL PISO", id: "7IDT1Lit7ew" },
  { title: "Porcelanato Líquido Efecto Madera Paso a Paso", id: "YPTLPVkpFXc" },
  { title: "MINI CURSO EPOXI - Creando un piso efecto marmoleado", id: "pzu0NfcD8P0" },
  { title: "Técnicas Avanzadas de Porcelanato Líquido", id: "hZTS0FGvPQM" },
  { title: "APLICACIÓN DE RESINA EPÓXICA EN PISO PASO A PASO", id: "fQiuIB9tBEk" },
  { title: "RESINA EPÓXICA SOBRE BALDOSA CERÁMICA / EFECTO MÁRMOL ONIX", id: "1wD2J9SADtE" },
  { title: "Aplicación de Resina Epóxica en Piscina", id: "xatb-r3Qn5E" },
  { title: "RESINA EPÓXICA EN ENCIMERA DE CONCRETO", id: "UTXNa97hatE" },
  { title: "RESINA EPÓXICA EFECTO MÁRMOLEADO EN MESADA", id: "DVcZlWXKvi4" },
  { title: "Aplicación de resina en piso (Restauración)", id: "Y3d4FnZg7H8" },
  { title: "APLICACIÓN DE PORCELANATO LÍQUIDO 3D PASO A PASO (MANTENIMIENTO)", id: "sbVKL8qHCCI" },
  { title: "APLICACIÓN DE RESINA EPOXICA EFECTO MARMOLEADO PASO A PASO", id: "KVyTin9rhpY" },
];

function Porcelanato() {
  const [activeVideoId, setActiveVideoId] = useState(LESSONS[0]?.id || "");

  const activeIndex = LESSONS.findIndex(l => l.id === activeVideoId);
  
  const goToNext = () => {
    const nextLesson = LESSONS[activeIndex + 1];
    if (nextLesson) {
      setActiveVideoId(nextLesson.id);
    }
  };

  const goToPrev = () => {
    const prevLesson = LESSONS[activeIndex - 1];
    if (prevLesson) {
      setActiveVideoId(prevLesson.id);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* Premium Header */}
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group text-white/60 hover:text-white transition-colors">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Volver</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-lg">
              <Construction className="text-black w-6 h-6" />
            </div>
            <span className="font-black tracking-tighter text-xl italic uppercase">Casa Del Constructor</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <span className="flex items-center gap-1.5 text-yellow-500">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse" />
              Acceso Premium
            </span>
          </div>
        </div>
      </nav>

      {/* Main Experience Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-widest">
            ✨ CURSO ESPECIALIZADO • {LESSONS.length} CLASES
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            PORCELANATO <span className="text-yellow-500">LÍQUIDO</span>
          </h1>
          
          <p className="text-white/40 max-w-2xl text-base md:text-lg leading-relaxed font-medium">
            Domina la técnica del porcelanato líquido y resina epóxica. Desde mesadas hasta pisos 3D y efectos marmoleados, 
            aprende a crear superficies de lujo con acabados profesionales. Toca cualquier clase para comenzar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player Container */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#111]">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Video Player"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Playback Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex-1">
                <h2 className="text-2xl font-black uppercase tracking-tight text-yellow-500 mb-1">
                  {LESSONS[activeIndex]?.title ?? "Clase Seleccionada"}
                </h2>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">
                  Lección {activeIndex + 1} de {LESSONS.length}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={goToPrev}
                  disabled={activeIndex === 0}
                  className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Anterior
                </button>
                <button 
                  onClick={goToNext}
                  disabled={activeIndex === LESSONS.length - 1}
                  className="px-6 py-3 rounded-xl bg-yellow-500 text-black text-xs font-black uppercase tracking-widest hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>

          {/* Playlist Sidebar */}
          <div className="h-[700px] flex flex-col bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">
                CONTENIDO DEL CURSO
              </h3>
              <p className="text-sm font-bold text-white uppercase tracking-tight">Especialización Porcelanato</p>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar p-6 space-y-8">
              <section>
                <div className="flex items-center gap-2 mb-4 px-2">
                  <Play size={14} className="text-yellow-500" />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Módulo de Resinas</h4>
                </div>
                <div className="space-y-2">
                  {LESSONS.map((lesson, index) => (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveVideoId(lesson.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 group ${
                        activeVideoId === lesson.id 
                          ? "bg-yellow-500 border-yellow-500 text-black shadow-lg shadow-yellow-500/20" 
                          : "bg-transparent border-transparent hover:bg-white/5 text-white/60 hover:text-white"
                      }`}
                    >
                      <div className="flex gap-4">
                        <span className={`text-[10px] font-black uppercase tracking-widest mt-1 ${
                          activeVideoId === lesson.id ? "text-black/50" : "text-white/20"
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h4 className="text-sm font-bold leading-snug line-clamp-2">
                          {lesson.title}
                        </h4>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 bg-yellow-500 flex items-center justify-center rounded-sm">
              <Construction className="text-black w-4 h-4" />
            </div>
            <span className="font-black tracking-tighter text-sm italic uppercase">Casa Del Constructor</span>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
            © Todos los derechos reservados • Formación de Élite
          </p>
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 215, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 215, 0, 0.4);
        }
      `}</style>
    </div>
  );
}
