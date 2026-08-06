import { createFileRoute } from "@tanstack/react-router";
import { Construction, Play, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Casa del Constructor | Masterclass Elite" },
      { name: "description", content: "Aprende el arte de la construcción con los mejores. Una experiencia premium de aprendizaje para futuros maestros." },
      { property: "og:title", content: "La Casa del Constructor | Masterclass Elite" },
      { property: "og:description", content: "Aprende el arte de la construcción con los mejores. Una experiencia premium de aprendizaje para futuros maestros." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LESSONS_MASONRY = [
  { title: "Cómo hacer un tabique de ladrillo hueco doble", id: "GweDsB4ZTl4" },
  { title: "Cómo hacer mortero de arena y cemento", id: "Td6XUz1V6uM" },
  { title: "Sistema de nivelación de azulejos", id: "GU4nWzghvnk" },
  { title: "Instalación de suelo porcelánico con sistema de nivelación", id: "C5B9ql7wTcY" },
  { title: "Cómo rejuntar azulejos", id: "fayQ9EzR1EA" },
  { title: "Sistema de nivelación Peygran", id: "QgamxC5rUPo" },
  { title: "Cómo alicatar un baño o cocina paso a paso", id: "tsw-_Vp-5Zc" },
  { title: "Cómo colocar azulejos en 5 minutos", id: "eBmZXf8mwgE" },
  { title: "Instalación de suelo porcelánico de gran formato", id: "ETJckYYAu6Y" },
  { title: "Cómo hacer un tabique de bloques de vidrio", id: "BidMZ47bQ6U" },
  { title: "Cómo alicatar sobre cualquier superficie", id: "vHXcU72qi7E" },
  { title: "Instalación de ventanas de PVC con rotura térmica", id: "hXuLQ37AFsw" },
  { title: "Cómo hacer un tejado ventilado", id: "KQk1J670Vpc" },
  { title: "Mortero autonivelante para suelo radiante", id: "tRepwclqDsg" },
  { title: "Mortero autonivelante de capa fina", id: "HMQL8h_FsaQ" },
  { title: "¿Cuánto cuesta construir una casa en España?", id: "_3DUUt0wGIY" },
  { title: "Cómo rejuntar gresite con mortero epoxi", id: "xRzHKesYwqY" },
  { title: "Anclaje químico en ladrillo y hormigón", id: "o72ZrZMd4Wk" },
  { title: "Cómo instalar suelo en espiga", id: "Bzm0ZK_M4Vc" },
  { title: "Cómo nivelar un suelo o hacer pendientes", id: "FyMhNcg0VStandard" },
  { title: "Cómo hacer una solera de hormigón armado", id: "6QjAacJN5hI" },
  { title: "Colocación y consejos para bloques de termoarcilla", id: "yQnuvICtyPc" },
  { title: "Instalación de marcos de ventanas de aluminio o PVC", id: "DPRinIj7MJU" },
  { title: "Instalación de baño con porcelánico de gran formato", id: "9UNCOnGPjN8" },
  { title: "Cómo construir una escalera exterior con gres porcelánico", id: "x3_01H7ASRE" },
  { title: "Alicatado de baño gran formato paso a paso", id: "qQYrx3E_yHg" },
  { title: "Cómo construir un suelo de ladrillo rústico", id: "WThcgWK8AG0" },
  { title: "Suelo hexagonal con imitación madera", id: "lLE3Xeb2De4" },
  { title: "Cómo cortar azulejos cerámicos o porcelánicos", id: "2wV7VlFOTPg" },
  { title: "Tabique de yeso laminado vs ladrillo", id: "ofEuPdO40uM" },
  { title: "Cómo hacer un plato de ducha con acabado piedra", id: "b_NpVYzHv08" },
  { title: "Sistema de nivelación Peygran Compact LS", id: "hwh_2IhHU0U" },
  { title: "Cambio de bañera por plato de ducha de resina", id: "78D_8yRZCco" },
  { title: "Guía definitiva de cementos cola", id: "q8sxsZ_Fr_Y" },
  { title: "Cómo hacer un muro de bloques con pilares ocultos", id: "dy0XgcFHDkw" },
  { title: "Corte de azulejos con amoladora", id: "9y9CFoeqOFY" },
  { title: "Enlucido monocapa capa gruesa", id: "LfNqMyJWvaw" },
  { title: "Cómo hacer una cubierta exterior no transitable", id: "ooRDdSKdfZE" },
  { title: "Guía de instalación eléctrica paso a paso", id: "jfpDQzqE4t4" },
  { title: "Montaje de premarco de puerta", id: "L_hGiqnL_uo" },
  { title: "Colocación de rodapié paso a paso", id: "ZGdaTVQblOI" },
  { title: "Muro de carga de bloques de hormigón", id: "bUvP-uV1mBU" },
];

const LESSONS_ELECTRICITY = [
  { title: "Curso de Electricidad Básica DESDE CERO!! 👊 Teoría - Práctica", id: "BhgBXZdHWhU" },
  { title: "MAGNITUDES ELÉCTRICAS | CLASE #1 CURSO DE ELECTRICIDAD COMPLETO", id: "BHBVlix0MXo" },
  { title: "Cómo usar un Multímetro paso a paso | Clase 2 Curso de Electricidad Completo", id: "uysNOQlnKTA" },
  { title: "Cómo usar un Multímetro para medir | Clase 3 Curso de Electricidad Completo", id: "aT0OFlPhyPc" },
  { title: "Tipos de Potencia Eléctrica Explicación | CLASE #4 Curso de Electricidad Completo", id: "TfiL3JzdZ5c" },
  { title: "Tipos de Tableros Eléctricos Domiciliarios Esquema | Clase 5 Curso de Electricidad Completo", id: "ArCuBq2xfO0" },
  { title: "Cómo hacer CÁLCULO ELÉCTRICO de una CASA parte 1 | CLASE #6 Curso de Electricidad COMPLETO", id: "klGUhP5zxQU" },
  { title: "Cómo Hacer la DISTRIBUCION ELÉCTRICA de una CASA | CLASE #7 Curso de Electricidad COMPLETO", id: "OYG7wcBSm_4" },
  { title: "SECCIÓN de CABLES para Instalacion Domiciliaria | CLASE #8 Curso de Electricidad COMPLETO", id: "y5Mz7MAK6Qo" },
  { title: "Cómo calcular la potencia térmica para mi casa | Clase 9 Curso de Electricidad Completo", id: "W16PXrqi4tE" },
  { title: "Conexión de una LÁMPARA💡 con un INTERRUPTOR | CLASE #10 Curso de Electricidad COMPLETO", id: "EiVUIfuqiCI" },
  { title: "Instalación de Lamparitas en Serie y Paralelo | CLASE #11 Curso de Electricidad Completo", id: "vaHmMqXijbM" },
  { title: "Como se CONECTA un TOMACORRIENTE DOBLE | CLASE #12 (PARTE 1/2) Curso de Electricidad COMPLETO", id: "fIzSV7OU0Rc" },
  { title: "Instalar TOMACORRIENTE Doble CON TIERRA | CLASE #12 (PARTE 2/2) Curso de Electricidad COMPLETO", id: "Uvgl-CxCNDo" },
  { title: "Como Instalar una FOTOCÉLULA de 3 CABLES | CLASE #13 Curso de Electricidad COMPLETO", id: "XXGlu-YqpXM" },
  { title: "Cómo instalar Llaves de Luz Combinadas | Clase 14 Curso de Electricidad Completo", id: "1fwBecHPRAc" },
  { title: "¿Qué es la Puesta a Tierra de una Casa y para qué Sirve?", id: "s8uJRIRiJuc" },
  { title: "DIFERENCIA ENTRE NEUTRO Y TIERRA | Puesta a tierra de servicio", id: "LsKQu_vTvks" },
  { title: "✏ Cómo Hacer y Leer un Esquema Unifilar | Paso a Paso", id: "FCrFAkA9yqM" },
  { title: "🔑¿Qué es la Caída de Tensión? | Explicado Claramente", id: "EewXoc6isXg" },
  { title: "👌Cómo identificar FASE, NEUTRO y TIERRA con un \"Multímetro\"", id: "XlmNNgubwbw" },
  { title: "Cómo conectar un Dimmer para luces LED | Súper fácil", id: "dz26mLmr8Nk" },
  { title: "🧉 Mi PAVA eléctrica NO ENCIENDE | REPARADO (Todas las POSIBLES CAUSAS)", id: "_zpi7qkIcAY" },
  { title: "Jabalina de Puesta a Tierra - Cómo Instalarlas y/o Reemplazarlas", id: "fdfvHyONjUc" },
  { title: "La térmica no salta ❌ FUGA A TIERRA | Resuelto Paso a Paso ✅", id: "EBToZEeSseg" },
];

const LESSONS = [...LESSONS_MASONRY, ...LESSONS_ELECTRICITY];

const PLAYLIST_ID = "PLMGVyzSXl-it0TkbTAtoVVDKUvHYdRa4r";

import { useState } from "react";

function Index() {
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
        {/* Course Header/Welcome - Reference Style */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-widest">
            🧱 CURSO COMPLETO • {LESSONS.length} CLASES
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            BIENVENIDO, <span className="text-yellow-500">ALUMNO</span>
          </h1>
          
          <p className="text-white/40 max-w-2xl text-base md:text-lg leading-relaxed font-medium">
            Desde la cimentación hasta los acabados: aprende la base de la casa, muros, colocación de ladrillos, 
            revoques, escuadrado y mucho más con clases prácticas. Toca cualquier clase para comenzar.
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
              <p className="text-sm font-bold text-white uppercase tracking-tight">Todas las Videoaulas</p>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar p-6 space-y-8">
              {/* Masonry Section */}
              <section>
                <div className="flex items-center gap-2 mb-4 px-2">
                  <Construction size={14} className="text-yellow-500" />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Módulo de Albañilería</h4>
                </div>
                <div className="space-y-2">
                  {LESSONS_MASONRY.map((lesson, index) => (
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

              {/* Electricity Section */}
              <section>
                <div className="flex items-center gap-2 mb-4 px-2 pt-4 border-t border-white/5">
                  <Play size={14} className="text-yellow-500" />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Módulo de Electricidad</h4>
                </div>
                <div className="space-y-2">
                  {LESSONS_ELECTRICITY.map((lesson, index) => (
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

        {/* Removed Action Bar (YouTube Link) */}
      </main>

      {/* Simplified Footer */}
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
