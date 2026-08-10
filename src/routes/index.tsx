import { createFileRoute } from "@tanstack/react-router";
import { Construction, Play, ExternalLink, Droplets } from "lucide-react";

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

const LESSONS_PLUMBING = [
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

const LESSONS = [...LESSONS_MASONRY, ...LESSONS_ELECTRICITY, ...LESSONS_PLUMBING];

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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-4xl mt-8">
            <a href="/albanileria" className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-yellow-500 hover:text-black transition-all group">
              <Construction className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-black uppercase tracking-widest">Albañilería</span>
            </a>
            <a href="/eletricidad" className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-yellow-500 hover:text-black transition-all group">
              <Play className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-black uppercase tracking-widest">Electricidad</span>
            </a>
            <a href="/fontaneria" className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-yellow-500 hover:text-black transition-all group">
              <Droplets className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-black uppercase tracking-widest">Fontanería</span>
            </a>
            <a href="/porcelanato" className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-yellow-500 hover:text-black transition-all group">
              <Play className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-black uppercase tracking-widest">Porcelanato</span>
            </a>
          </div>
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

              {/* Plumbing Section */}
              <section>
                <div className="flex items-center gap-2 mb-4 px-2 pt-4 border-t border-white/5">
                  <Droplets size={14} className="text-yellow-500" />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Módulo de Fontanería</h4>
                </div>
                <div className="space-y-2">
                  {LESSONS_PLUMBING.map((lesson, index) => (
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
