import { createFileRoute } from "@tanstack/react-router";
import { Construction, Play, Droplets } from "lucide-react";
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
  const [activeVideoId, setActiveVideoId] = useState(LESSONS[0].id);
  const activeIndex = LESSONS.findIndex(l => l.id === activeVideoId);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
       <h1 className="text-4xl font-black uppercase mb-8">Módulo de Albañilería</h1>
       <div className="grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 aspect-video bg-black rounded-3xl overflow-hidden border border-white/10">
           <iframe src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`} className="w-full h-full" allowFullScreen></iframe>
         </div>
         <div className="h-[700px] overflow-y-auto space-y-2">
            {LESSONS.map((l, i) => (
              <button key={l.id} onClick={() => setActiveVideoId(l.id)} className={`w-full p-4 rounded-xl text-left ${activeVideoId === l.id ? 'bg-yellow-500 text-black' : 'bg-white/5'}`}>
                {String(i + 1).padStart(2, '0')} - {l.title}
              </button>
            ))}
         </div>
       </div>
    </div>
  );
}
