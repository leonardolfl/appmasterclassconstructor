import { createFileRoute, Link } from "@tanstack/react-router";
import { Construction, Play, Droplets, ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/albanileria")({
  head: () => ({
    meta: [{ title: "Albañilería | La Casa del Constructor" }],
  }),
  component: Albanileria,
});

const LESSONS = [
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

function Albanileria() {
  const [activeVideoId, setActiveVideoId] = useState(LESSONS[0]?.id || "");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500 selection:text-black">
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
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12">
          Módulo de <span className="text-yellow-500">Albañilería</span>
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#111]">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Video Player"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="h-[700px] flex flex-col bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">
                LISTA DE CLASES
              </h3>
              <p className="text-sm font-bold text-white uppercase tracking-tight">{LESSONS.length} Lecciones</p>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-2">
              {LESSONS.map((lesson, index) => (
                <button
                  key={lesson.id}
                  onClick={() => setActiveVideoId(lesson.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                    activeVideoId === lesson.id 
                      ? "bg-yellow-500 border-yellow-500 text-black shadow-lg" 
                      : "bg-transparent border-transparent hover:bg-white/5 text-white/60 hover:text-white"
                  }`}
                >
                  <div className="flex gap-4">
                    <span className={`text-[10px] font-black uppercase tracking-widest mt-1 ${
                      activeVideoId === lesson.id ? "text-black/50" : "text-white/20"
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-sm font-bold leading-snug">
                      {lesson.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 215, 0, 0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
}
