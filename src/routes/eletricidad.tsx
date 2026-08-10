import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/eletricidad")({
  head: () => ({
    meta: [{ title: "Electricidad | La Casa del Constructor" }],
  }),
  component: Eletricidad,
});

const LESSONS = [
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

function Eletricidad() {
  const [activeVideoId, setActiveVideoId] = useState(LESSONS[0]?.id || "");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500 selection:text-black">
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-lg">
              <Play className="text-black w-6 h-6" />
            </div>
            <span className="font-black tracking-tighter text-xl italic uppercase">Casa Del Constructor</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12">
          Módulo de <span className="text-yellow-500">Electricidad</span>
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
