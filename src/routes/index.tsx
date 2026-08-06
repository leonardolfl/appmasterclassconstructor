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

const LESSONS = [
  {
    id: 1,
    title: "Clase de Bienvenida: Iniciando tu Camino",
    youtubeId: "dQw4w9WgXcQ", // Placeholder, user will provide real ones
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Lección 1: Cimientos y Estructuras Básicas",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Lección 2: Mezclas y Morteros Profesionales",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Lección 3: Levantamiento de Muros y Nivelación",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1590069230002-70cc094573f5?auto=format&fit=crop&q=80&w=800",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Header Section */}
      <header className="bg-primary text-primary-foreground py-12 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            LA CASA DEL CONSTRUCTOR
          </h1>
          <p className="text-xl opacity-90">
            ¡BIENVENIDO, ALUMNO! 2025
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LESSONS.map((lesson) => (
            <Card key={lesson.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
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
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold leading-tight">
                  {lesson.title}
                </CardTitle>
                <div className="mt-4">
                  <button 
                    className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${lesson.youtubeId}`, '_blank')}
                  >
                    Ver Clase
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-top py-8 text-center text-muted-foreground bg-muted/30">
        <p>© 2025 La Casa del Constructor. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
