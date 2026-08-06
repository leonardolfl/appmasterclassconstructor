import { createFileRoute } from "@tanstack/react-router";
import { Play, BookOpen, HardHat, Hammer, Construction, Ruler, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Casa del Constructor | Masterclass Elite 2025" },
      { name: "description", content: "Aprende el arte de la construcción con los mejores. Una experiencia premium de aprendizaje para futuros maestros." },
      { property: "og:title", content: "La Casa del Constructor | Masterclass Elite 2025" },
      { property: "og:description", content: "Aprende el arte de la construcción con los mejores. Una experiencia premium de aprendizaje para futuros maestros." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PLAYLIST_ID = "PLMGVyzSXl-it0TkbTAtoVVDKUvHYdRa4r";

const LESSONS = [
  {
    id: 1,
    title: "El Despertar del Maestro",
    subtitle: "Bienvenida y Fundamentos",
    youtubeId: "GweDsB4ZTl4",
    icon: <HardHat className="w-6 h-6" />,
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Forjando los Cimientos",
    subtitle: "Herramientas de Precisión",
    youtubeId: "77v_r0n7l-M",
    icon: <Hammer className="w-6 h-6" />,
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "La Alquimia de la Mezcla",
    subtitle: "Morteros de Alto Rendimiento",
    youtubeId: "v_E4K-8vN2s",
    icon: <Construction className="w-6 h-6" />,
    thumbnail: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "El Arte del Nivel",
    subtitle: "Muros y Estructuras Perfectas",
    youtubeId: "Y8E-9v5w0_4",
    icon: <Ruler className="w-6 h-6" />,
    thumbnail: "https://images.unsplash.com/photo-1590069230002-70cc094573f5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "La Piel del Edificio",
    subtitle: "Acabados y Revoques Elite",
    youtubeId: "H7v_r0n7l-M",
    icon: <ShieldCheck className="w-6 h-6" />,
    thumbnail: "https://images.unsplash.com/photo-1517646288024-aa8efd1443ee?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "La Perfección Final",
    subtitle: "Revestimientos y Pisos",
    youtubeId: "J8E-9v5w0_4",
    icon: <BookOpen className="w-6 h-6" />,
    thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-yellow-500 selection:text-black font-sans">
      {/* Dynamic Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Luxury Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-lg">
              <Construction className="text-black w-6 h-6" />
            </div>
            <span className="font-black tracking-tighter text-xl italic uppercase">Casa Del Constructor</span>
          </div>
          <button 
            onClick={() => window.open(`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`, '_blank')}
            className="text-xs uppercase tracking-[0.2em] font-bold text-yellow-500 hover:text-white transition-colors"
          >
            Acceso Total
          </button>
        </div>
      </nav>

      {/* Cinematic Hero */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Bienvenido, Maestro 2025
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
          >
            EL ARTE DE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200 uppercase">Construir</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Domina las técnicas profesionales que transforman proyectos en legados. 
            Una experiencia educativa de élite diseñada para el constructor moderno.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => window.open(`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`, '_blank')}
              className="group relative px-10 py-5 bg-yellow-500 text-black font-black text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Iniciar el Viaje <ChevronRight size={18} strokeWidth={3} />
              </span>
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Grid of Excellence */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-4">Currículo de Élite</h2>
            <div className="h-1 w-20 bg-yellow-500" />
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Cada módulo ha sido curado para ofrecer la máxima eficiencia técnica y estética en obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {LESSONS.map((lesson, idx) => (
            <motion.div 
              key={lesson.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${lesson.youtubeId}&list=${PLAYLIST_ID}`, '_blank')}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-[#151515]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
                <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-yellow-500 border border-white/10 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                  {lesson.icon}
                </div>
                <img
                  src={lesson.thumbnail}
                  alt={lesson.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-8 bg-yellow-500" />
                    <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">{lesson.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-black leading-none uppercase">{lesson.title}</h3>
                </div>
                {/* Interaction Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Play className="text-black fill-current ml-1" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Grand Footer */}
      <footer className="border-t border-white/5 py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 opacity-5 select-none pointer-events-none">
          <span className="text-[20vw] font-black italic uppercase leading-none">Constructor</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center rounded-md">
                <Construction className="text-black w-5 h-5" />
              </div>
              <span className="font-black tracking-tighter italic uppercase">Casa Del Constructor</span>
            </div>
            <p className="text-white/40 text-sm max-w-sm">
              La plataforma de educación definitiva para el gremio de la construcción en Latinoamérica. 2025.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/20">Legal</span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest">© 2025 Todos los Derechos Reservados</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
