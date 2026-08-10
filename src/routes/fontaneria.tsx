import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/fontaneria")({
  head: () => ({
    meta: [{ title: "Fontanería | La Casa del Constructor" }],
  }),
  component: Fontaneria,
});

const LESSONS = [
  { title: "introducción al curso de plomería", id: "LthNU3AF6X8" },
  { title: "Historia de la plomería y sus importancias la vida diarias", id: "3AhKUdRrwV8" },
  { title: "Curso de plomería #1 la caja de herramientas para sirve", id: "2iX_HG-pDUc" },
  { title: "instalación de llaves de agua para lavadora.🚰", id: "HBzTINr_QQI" },
  { title: "How to install plumbing and a water valve", id: "rrLNyU2VIc8" },
  { title: "How to Install a Toilet: Steps and Necessary Tools", id: "2lnW4cGuXZs" },
  { title: "▶️Cómo cambiar la manguera de agua de un inodoro 🚽(curso de plomería #1)", id: "zUgtjIsTSbE" },
  { title: "How to install a sink", id: "5Tj5Mr8_wwc" },
  { title: "Porque tu fregadero tiene liqueo", id: "iJfiFaJFPxU" },
  { title: "Cómo hacer un plano de Plomeria para Calcular La Cantidad De Material de Un Baño", id: "2OjM3tn57NY" },
  { title: "Cómo asegurar tu instalación de tubería paso a paso.", id: "cp1GB7V4ulI" },
  { title: "Cómo hacer las instalaciónes de tubería de un baño.", id: "qf4zVxxMF7g" },
  { title: "How to install a dual-stall restroom for men and women", id: "zEckfWI1QNo" },
  { title: "▶️How to Replace a Toilet Water Supply Line 🚽 (The Plumber from Santiago)", id: "guVaofLoLpc" },
  { title: "How to ensure proper plumbing installations.", id: "WrzMv5r8Wdw" },
  { title: "Haz la instalación de un baño doble cabina para mujeres y hombres paso a paso", id: "OdB1xU6jThg" },
  { title: "How to install bathroom plumbing - The Santiago Plumber", id: "lGhQLwsudgY" },
  { title: "Cómo instalar un temporizador electrico (curso de plomería #1)", id: "9VrO3gKVjG0" },
  { title: "Mi Bombas no enciende sola como arreglar el presostato🛠️🔩🛁", id: "ssSM1_rP3Js" },
  { title: "El plomero de Santiago Curso de plomería #9 cómo instalar un temporizador electrico.", id: "9aB1RQTQUJo" },
  { title: "Cómo hacer la instalación de calentador de agua (curso de plomería #8)", id: "BYA1OM3cBq0" },
  { title: "Como hacer una Instalación de tubería y de llave de agua", id: "1PD3OvQVAVA" },
  { title: "Visita En Ferretería #2", id: "ZDqOd5VLIDw" },
  { title: "Visita En Una ferretería, Los Accesorios De Plomerias", id: "az9GT_MCKRU" },
  { title: "cómo hacer un baño y instalar un inodoro", id: "R7dXHGrPJxw" },
  { title: "How to Install a Glass Sink in a Bathroom", id: "iAwosMljQtY" },
  { title: "Filtración de techo comune en República Dominicana", id: "WdPMzhVyrrY" },
  { title: "🚰Trabajo de arreglo de Filtración", id: "a8ZADLkkFHU" },
  { title: "Cómo armar y desarmar una termofusora.", id: "4xq2yIQ1rWw" },
  { title: "Hidden Pipe Troubleshooter 2016", id: "DyVIBbe0yfM" },
  { title: "How to Assemble a Sink P-Trap and a Double Kitchen Sink Drain", id: "n4vf8wx-PLw" },
  { title: "Cómo instalar UNA BOMBA PRESURIZADORA en un tinaco ⚡▶️", id: "-n5_70bjqfE" },
  { title: "Recommendations for a pressurizing pump", id: "4S5YkL_If3g" },
  { title: "10 errores a evitar al instalar una bomba presurizadora", id: "JQPkMOIxg-o" },
  { title: "¿Qué debo tomar en cuenta al comprar una bomba presurizadora?", id: "Fm7NOC-iSlY" },
  { title: "How to Unclog a Pipe", id: "wg5Iu5d2Sx8" },
  { title: "How to Use an Inspection Camera", id: "9uRyLCbXodc" },
  { title: "Pool Leak Listening Devices", id: "UBwkyAOvXaU" },
  { title: "Servicios de plomería en #santiago #plomeria #fugas", id: "uRIAHVAnGhU" },
  { title: "Detección de fugas de agua con geófono en Santiago", id: "kxL3iEZ7ZzI" },
  { title: "Daños causados por una fuga de agua #geofono", id: "603AFp_un9I" },
  { title: "DETECCIÓN DE FUGAS DE AGUA con GEÓFONO Fisher labs", id: "Dp0-snY9pHs" },
  { title: "🔶How to INSTALL a WC or TOILET 🔶 Step by step.", id: "qswMPk1k1m8" },
  { title: "Aprende cómo instalar un WC suspendido - Paso a paso", id: "elUYsa3mFmc" },
  { title: "Instalar un WC, toilet, sanitario", id: "55V7bR69P3Q" },
  { title: "Cómo instalar tanque compacto - ROCA", id: "Ap7NWojrBrU" },
  { title: "10 Trucos de Plomería que Todo Propietario Debería Conocer", id: "DVPAldz8VBE" },
  { title: "Cómo DESTAPAR un DRENAJE muy TAPADO sin llamar a un PLOMERO", id: "4y7eKwlcbU4" },
  { title: "CURSO de PLOMERÍA completa en 1 hora", id: "eh7PlhIWq34" },
  { title: "How to detect a water leak", id: "Ku55ahKH98Y" },
  { title: "How to Make a Manual Pressure Pump for Plumbing", id: "o9KzMuNsEVA" },
  { title: "BOMBA como hacer una bomba de comprobación.", id: "y3kZTHKe0Po" },
  { title: "How to FIX a LEAK in your TOILET", id: "5W3TA7xV_7s" },
  { title: "Electric Tankless Water Heater ⚡▶️", id: "-n_1gBNMaH4" },
  { title: "How to increase WATER PRESSURE in your home🔴", id: "cxTeqpcNNqw" },
  { title: "COMO CALCULAR LA CANTIDAD DE AGUA usada en una vivienda 🌊", id: "lQGu43zsK4Q" },
  { title: "Importance of TEFLON TAPE in PLUMBING", id: "e64rd18izT4" },
  { title: "Replacing a shower stem in a bathroom", id: "Spz0Aj8PK34" },
  { title: "TERMINOLOGÍAS y ACCESORIAS esenciales de PLOMERÍA (Curso #3)", id: "ob4eCvrT078" },
  { title: "CURSO de PLOMERÍA para principiantes (Introducción)", id: "3pyqyeqiUd4" },
  { title: "Los diferentes tipos de HERRAMIENTAS de PLOMERÍA (Curso #1)", id: "SmfDRArAd24" },
  { title: "Learn about the parts of a toilet (Course #5)", id: "AelbgsWhKkI" },
  { title: "PARTES de un GRIFO (Curso #4)", id: "3x_y2z4eSAs" },
  { title: "Learn to Master PLUMBING CONNECTIONS (Course #2)", id: "CkXZN0H_kPk" },
  { title: "Types of Plumbing Pipes: Characteristics and Uses (Course #6)", id: "uIzOOnoC5WE" },
  { title: "Reparación de GRIFOS Soluciones para FUGAS", id: "PJTv5w8M5so" },
  { title: "How to unclog a drain without chemicals", id: "atMYRtMkDxk" },
  { title: "Step-by-step installation of a WATER PRESSURE PUMP ✅⭐🔥", id: "rNy1ypd8Gi8" },
  { title: "cómo instalar una bomba presurizadora de agua en su casa", id: "7cAzC27ONAE" },
  { title: "Curso de plomería profesional", id: "6dQG7nBoWzw" },
  { title: "Cómo Instalar una Ducha desde Cero Guía Completa", id: "i8CEKl5xo-A" },
  { title: "Cómo reparar un inodoro que gotea (guía completa)", id: "qmLuU0tw708" },
  { title: "Pasos para Destapar la Tubería de tu Casa Fácilmente", id: "f1yKro-a-_g" },
  { title: "Cómo Instalar un Lavamanos en tu Baño", id: "bRLnNXZ7clA" },
  { title: "DIY Gas Water Heater Installation (EASY)", id: "HNCaYeIJ_rk" },
  { title: "Cómo hacer presupuesto de plomería.", id: "RKKdbNtondA" },
  { title: "Como instalar un TINACO DE AGUA con BOMBA", id: "MqBkpNIE3wE" },
  { title: "Instalacion de un TINACO de 1,100 lts 💧", id: "9dwhjIuvPFc" },
  { title: "Increase water pressure in home", id: "5E7-Y252sAE" },
  { title: "How to Increase Water Pressure in Your Home", id: "48CtbNx7b0c" },
  { title: "Cómo Instalar un Lavamanos en tu Baño, tutorial completo", id: "bqpFcEb7YDE" },
  { title: "Manómetros, problemas y soluciones", id: "cIB9tW_b6Bg" },
  { title: "Cómo Reparar Fugas en Tuberías de Cobre (Guía Completa)", id: "hFwqTZR2Gzw" },
  { title: "Servicio de plomería en Santiago", id: "wmBmFjdo66U" },
  { title: "Plumbing Course: Class 3 - Hydraulic Systems", id: "9GfY3uWyJ7A" },
  { title: "Curso de plomeria clase 2 Cómo leer planos de plomería", id: "ART8ypbGqbc" },
  { title: "Plumbing Course Class 4: Drainage and Venting System", id: "SxevYoyMLhk" },
  { title: "Curso de plomería clase 5 interpretación de planos", id: "XVwnKe74NSQ" },
  { title: "Curso de plomería Clase 6 características de los gases", id: "LbrrwAlXAO8" },
  { title: "Curso de Plomería Clase 1 ¿Qué es la presión?", id: "t7ElB8YpcCI" },
  { title: "curso de plomería clase 7 Funcionamiento de los calentadores", id: "nv4_LjRjlZg" },
  { title: "curso de plomería clase 8 componentes de gas", id: "_4AI-aHgKhk" },
  { title: "Plumbing Course Class 9: Interpreting Gas Installation Blueprints", id: "7GoAgx17Vog" },
  { title: "curso de plomería clase 10 cortado y pegado tubería PVC", id: "C4fGX6bQfXA" },
  { title: "Curso de Plomería Clase 11 Cortado y pegada tubería asbesto 1", id: "SdB08eEc9CY" },
  { title: "Class 12 Plumbing Course: Cutting and Gluing Asbestos Cement 2", id: "uSA6k-sDh9g" },
  { title: "Plumbing Course Class 14: Flexible Copper Tubing", id: "kRDmrEtqzHA" },
  { title: "Curso de Plomería Clase 13 Cortado y soldado de cobre para gas", id: "XR0fQrlPW7w" },
  { title: "Curso de Plomería Clase 15 Tubería galvanizada y negra", id: "IYZm3CMcs3o" },
  { title: "Curso de plomería Clase 18 Conexiones sanitarias", id: "b9hW0LEi6OQ" },
  { title: "Curso de plomería clase 20 Cálculo de drenaje", id: "MRkZ5T1Fs38" },
  { title: "CURSO de FONTANERÍA completo gratis en solo 3 horas", id: "F4dNl3zohG8" },
  { title: "¿Qué Bomba de Agua Necesitas? CÁLCULO PASO A PASO", id: "KDXaD9dKlw0" },
  { title: "¿Cómo Instalar un Regulador de Gas en 5 MINUTOS?", id: "P3DBPcVrwR0" },
  { title: "Trabajo de plomería de esta semana", id: "Lag9BH1ymxw" },
  { title: "curso de plomería clase 24 instalaciones del calentador", id: "-qYxZJd_OUY" },
  { title: "How to Install a Stationary Gas Tank Quickly and Easily?", id: "x_kCt9oBbcI" },
  { title: "¡Aprende a conectar tu tanque de gas en casa sin errores!", id: "ZHx4fWrqdw4" },
  { title: "How is natural gas installed in a home?", id: "eT7IA82tQnc" },
  { title: "Curso de plomería más completo", id: "TOR_S8pkWUM" },
  { title: "Curso de plomería clase 21 dimensionamientos", id: "1VK8u9-WshY" },
  { title: "Instalación de calentadores solares", id: "4kVDZLWrLjE" },
  { title: "Curso de plomería clase 17 Características de tinacos", id: "9YB9OcMn-_Q" },
  { title: "Instalación de servicios de baño lavabo", id: "DfdiwR9iqrs" },
  { title: "curso de plomería clase 28 recolección pluvial", id: "FRyvxC8Lj1s" },
  { title: "Instalación de un sistema de abastecimiento directo", id: "MXpBbt43KJ0" },
  { title: "Instalación de una bañera.", id: "MwIuU0Klryk" },
  { title: "Proper Kitchen Dishwasher Plumbing Installation", id: "PDNL_kMIToQ" },
  { title: "Instalación de sistema combinado cisterna tinaco", id: "PgPSmKyyVfo" },
  { title: "instalaciones de abastecimiento por gravedad", id: "X9LDbm0Fv2I" },
  { title: "Installation of shower services", id: "bXftZ1Z_7lc" },
  { title: "Cold & hot water facility planning", id: "gSsG-r5Tpvg" },
  { title: "Curso de plomería clase 16 conexiones hidráulicas", id: "iU_61k1F_aQ" },
  { title: "Curso de plomería clase 19 Conexiones de gas", id: "xfWYznRCTUM" },
  { title: "Instalación de servicios de baño excusado", id: "yWX7lQEinIM" },
  { title: "Installing Laundry Facilities", id: "z145lzOs248" },
  { title: "The Hidden World of Pipes", id: "arATbSzpfqY" },
  { title: "Electric Water Heater Installation: Do It Yourself!", id: "8Gjw06HG7XY" },
  { title: "Electric Water Heater | Proper Installation", id: "ZIRZUWDEd8I" },
  { title: "Instalacion de lavamanos de cristal", id: "14I6zw6h3ac" },
  { title: "Which water heater should you buy? Complete Guide", id: "BUHV7VtSERY" },
  { title: "Instalar Lavamanos de Cristal sin Fugas", id: "BANd9TURmx8" },
  { title: "Solution for E1, E3 and P Errors in Water Heater", id: "OAHiUixZVfY" },
  { title: "The mistake that destroys your water heater ⚠️", id: "KYmILhoea7s" },
  { title: "The Home Plumbing Manual", id: "gH-L8qWiMlI" },
  { title: "Repairing a Leaky Faucet", id: "_QKkY5CqVA8" },
  { title: "5 signs you have a hidden water leak", id: "Lc5HC2t0ekw" },
  { title: "Installing a tempered glass sink | Complete guide", id: "J40QeEkUqEg" },
  { title: "How to install a 3 HP water pump with pressure tank", id: "bZbQ-kp4glQ" },
  { title: "Essential tools and prices: beginner plumber guide", id: "ByhXb_RmXNI" },
  { title: "📹 How We Use the Inspection Camera", id: "X2dsJGDUUEs" },
  { title: "Using Wall Scanners in Plumbing | Detects Pipes", id: "GcP32tYLrCE" },
  { title: "🔍 How to Use a Humidity Detector", id: "o5F2yEoorrQ" },
  { title: "This is the water leak detector we use.", id: "Kdlgq3_P5mo" },
  { title: "Before Spending Money on Leak Detection, Watch This", id: "uNIWvKvfP8E" },
  { title: "🚰 Professional Plumbing Course 2026", id: "MmQrR1qtxSk" },
];

function Fontaneria() {
  const [activeVideoId, setActiveVideoId] = useState(LESSONS[0]?.id || "");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500 selection:text-black">
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/acesso" className="flex items-center gap-2 group text-white/60 hover:text-white transition-colors">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Volver</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-lg">
              <Droplets className="text-black w-6 h-6" />
            </div>
            <span className="font-black tracking-tighter text-xl italic uppercase">Casa Del Constructor</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12">
          Módulo de <span className="text-yellow-500">Fontanería</span>
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
                    <h4 className="text-sm font-bold leading-snug line-clamp-2">
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
