import { createFileRoute } from "@tanstack/react-router";
import { Construction, Play, ExternalLink } from "lucide-react";

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

function Index() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* Premium Header */}
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-lg">
              <Construction className="text-black w-6 h-6" />
            </div>
            <span className="font-black tracking-tighter text-xl italic uppercase">Casa Del Constructor</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <span className="flex items-center gap-1.5 text-yellow-500">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse" />
              Acceso Premium
            </span>
          </div>
        </div>
      </nav>

      {/* Main Experience Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-none">
            Masterclass <span className="text-yellow-500">Elite 2025</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
            Bienvenido al programa de formación profesional. Disfruta de la serie completa directamente aquí y domina el arte de construir.
          </p>
        </div>

        {/* Embedded YouTube Playlist - Direct Experience */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-[#111]">
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}`}
            title="Playlist de La Casa del Constructor"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Action Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white/5 border border-white/10">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight">¿Deseas guardar el contenido?</h3>
            <p className="text-white/40 text-sm">Accede a la playlist directamente en tu cuenta de YouTube.</p>
          </div>
          <button 
            onClick={() => window.open(`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`, '_blank')}
            className="flex items-center gap-2 px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-yellow-500 transition-colors"
          >
            Abrir en YouTube <ExternalLink size={14} />
          </button>
        </div>
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
            © 2025 Todos los derechos reservados • Formación de Élite
          </p>
        </div>
      </footer>
    </div>
  );
}
