import { createFileRoute, Link } from "@tanstack/react-router";
import { Construction, Zap, Droplets, Layout, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acceso a Cursos | La Casa del Constructor" },
      { name: "description", content: "Elige tu especialidad y comienza tu formación profesional hoy mismo." },
    ],
  }),
  component: Acesso,
});

const COURSES = [
  {
    title: "Albañilería",
    description: "Desde cimientos hasta acabados finales. Muros, revoques y estructuras.",
    icon: Construction,
    path: "/albanileria",
    color: "from-yellow-500/20 to-yellow-600/20",
    accent: "text-yellow-500",
    border: "border-yellow-500/20",
    hover: "hover:border-yellow-500",
  },
  {
    title: "Electricidad",
    description: "Instalaciones domiciliarias, circuitos, tableros y normativas vigentes.",
    icon: Zap,
    path: "/eletricidad",
    color: "from-blue-500/20 to-blue-600/20",
    accent: "text-blue-500",
    border: "border-blue-500/20",
    hover: "hover:border-blue-500",
  },
  {
    title: "Fontanería",
    description: "Sistemas hidráulicos, desagües, termofusión y reparación de fugas.",
    icon: Droplets,
    path: "/fontaneria",
    color: "from-cyan-500/20 to-cyan-600/20",
    accent: "text-cyan-500",
    border: "border-cyan-500/20",
    hover: "hover:border-cyan-500",
  },
  {
    title: "Porcelanato",
    description: "Resina epóxica, efectos marmoleados, pisos 3D y acabados de lujo.",
    icon: Layout,
    path: "/porcelanato",
    color: "from-purple-500/20 to-purple-600/20",
    accent: "text-purple-500",
    border: "border-purple-500/20",
    hover: "hover:border-purple-500",
  },
];

function Acesso() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* Navigation */}
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-lg transition-transform group-hover:scale-110">
              <Construction className="text-black w-6 h-6" />
            </div>
            <span className="font-black tracking-tighter text-xl italic uppercase">Casa Del Constructor</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-widest">
            👋 ¡BIENVENIDO DE NUEVO!
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            SELECCIONA EL <span className="text-yellow-500">CURSO</span> QUE QUIERES VER
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium">
            Tu camino hacia la excelencia profesional continúa aquí. Elige una de nuestras especialidades y comienza tu entrenamiento ahora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <Link
              key={course.path}
              to={course.path}
              className={`group relative flex flex-col p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-yellow-500/5`}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-black/60 transition-all duration-500 ${course.accent} shadow-inner`}>
                  <course.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-white transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-white/40 text-base leading-snug mb-10 font-medium group-hover:text-white/70 transition-colors">
                  {course.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-yellow-500 transition-colors">
                    Empezar ahora <ChevronRight size={16} />
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0`}>
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>

              {/* Decorative Background Icon */}
              <div className="absolute -right-6 -top-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <course.icon size={200} strokeWidth={1} />
              </div>
            </Link>
          ))}
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
    </div>
  );
}
