import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa del Constructor - Aprende Construcción" },
      { name: "description", content: "Bienvenido a la Casa del Constructor. Mira nuestras lecciones y aprende técnicas profesionales de construcción." },
      { property: "og:title", content: "Casa del Constructor - Aprende Construcción" },
      { property: "og:description", content: "Bienvenido a la Casa del Constructor. Mira nuestras lecciones y aprende técnicas profesionales de construcción." },
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
    title: "Bienvenida y Presentación del Curso",
    youtubeId: "GweDsB4ZTl4",
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Herramientas Básicas del Albañil",
    youtubeId: "77v_r0n7l-M",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Preparación de Mezclas y Morteros",
    youtubeId: "v_E4K-8vN2s",
    thumbnail: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Levantamiento de Muros y Nivelación",
    youtubeId: "Y8E-9v5w0_4",
    thumbnail: "https://images.unsplash.com/photo-1590069230002-70cc094573f5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Técnicas de Acabado y Revoque",
    youtubeId: "H7v_r0n7l-M",
    thumbnail: "https://images.unsplash.com/photo-1517646288024-aa8efd1443ee?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Instalación de Pisos y Revestimientos",
    youtubeId: "J8E-9v5w0_4",
    thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Header Section */}
      <header className="bg-primary text-primary-foreground py-12 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
            La Casa del Constructor
          </h1>
          <p className="text-xl opacity-90">
            ¡BIENVENIDO, ALUMNO! 2025
          </p>
          <div className="mt-8">
            <button 
              className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              onClick={() => window.open(`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`, '_blank')}
            >
              Ver Playlist Completa
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LESSONS.map((lesson) => (
            <Card key={lesson.id} className="overflow-hidden group hover:shadow-xl transition-all border-none bg-card">
              <CardHeader className="p-0">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 z-10">
                    <div className="bg-primary p-4 rounded-full text-white">
                      <Play className="w-8 h-8 fill-current" />
                    </div>
                  </div>
                  <img
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-bold leading-tight min-h-[3rem] line-clamp-2">
                  {lesson.title}
                </CardTitle>
                <div className="mt-4">
                  <button 
                    className="w-full bg-primary text-primary-foreground py-2.5 rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${lesson.youtubeId}&list=${PLAYLIST_ID}`, '_blank')}
                  >
                    <Play size={18} />
                    Ver Clase
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t py-12 text-center text-muted-foreground bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-bold text-foreground mb-2">LA CASA DEL CONSTRUCTOR</p>
          <p className="text-sm">© 2025 Todos los derechos reservados.</p>
          <p className="text-xs mt-4 opacity-50">Aprende construcción de forma profesional y paso a paso.</p>
        </div>
      </footer>
    </div>
  );
}
