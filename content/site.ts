import { assertSinPlaceholders, placeholder, placeholdersPendientes } from "./placeholder";
import { siteSchema, type Site } from "./schema";

// Fuente única de contenido del sitio. Lo envuelto en placeholder() es contenido de ejemplo:
// reemplazarlo por el material real y quitar el placeholder().

const fotoEjemplo = (archivo: string, alt: string) => ({ src: `/images/placeholder/${archivo}`, alt });

const contenido: Site = {
  marca: {
    nombre: "unafamilianormal_",
    tagline: "Una familia normal... más o menos ✨",
    pilares: ["Familia", "Humor", "Lifestyle"],
    ubicacion: "Buenos Aires, AR",
    verificada: true,
    heroImagen: placeholder("Foto principal del Hero", fotoEjemplo("hero.svg", "La familia de unafamilianormal_ en casa")),
  },

  contacto: {
    whatsapp: "5491162540911",
    email: "agustinabelencons99@gmail.com",
  },

  redes: {
    instagram: { handle: "@unafamilianormal_", url: "https://www.instagram.com/unafamilianormal_/" },
    tiktok: { handle: "@unafamilianormal_", url: "https://www.tiktok.com/@unafamilianormal_" },
  },

  // Relevado el 2026-10-01
  stats: {
    instagramSeguidores: 43_800,
    tiktokSeguidores: 10_600,
    tiktokMeGusta: 645_800,
    interaccion: placeholder("Interacción promedio (panel de Instagram)", {
      valor: "5,2%",
      label: "Interacción promedio",
    }),
    actualizado: "2026-10-01",
  },

  publico: placeholder("Datos de público (género, edades, ubicaciones)", {
    genero: [
      { label: "Mujeres", porcentaje: 82 },
      { label: "Hombres", porcentaje: 18 },
    ],
    edades: [
      { label: "18-24", porcentaje: 14 },
      { label: "25-34", porcentaje: 46 },
      { label: "35-44", porcentaje: 30 },
      { label: "45+", porcentaje: 10 },
    ],
    ubicaciones: ["Buenos Aires", "Córdoba", "Santa Fe", "Mendoza"],
  }),

  perfil: {
    nombre: "Agustina Cons",
    retrato: placeholder("Retrato profesional de Agus", fotoEjemplo("retrato.svg", "Retrato de Agustina Cons")),
    roles: ["Community manager", "Fotógrafa", "Filmmaker", "Creadora de contenido"],
    formacion: [
      { titulo: "Técnica en Marketing y Publicidad", institucion: "Universidad Siglo 21" },
      { titulo: "Fotógrafa", institucion: "EIDEC" },
    ],
    texto: [
      "Soy Agus. Además de mamá y creadora de contenido, soy técnica en Marketing y Publicidad, fotógrafa y community manager. Trabajo en esto porque me apasiona: mi mayor cualidad es la creatividad.",
      "Produzco yo misma el material, foto y video, así que la estrategia y la pieza final salen del mismo lugar. Eso evita el desfasaje típico entre lo que se planeó y lo que se publicó.",
    ],
    frase: "Mi forma de trabajar es ordenada, planificada y medible.",
  },

  familia: placeholder("Integrantes de la familia (fotos y descripciones)", [
    {
      nombre: "Agus",
      rol: "La que sostiene el celular",
      descripcion: "Mamá, fotógrafa y directora creativa de todo lo que ves. También la que encuentra las medias perdidas.",
      imagen: fotoEjemplo("familia-agus.svg", "Agus"),
    },
    {
      nombre: "Dantu",
      rol: "Protagonista",
      descripcion: "Experto en arruinar tomas perfectas y en hacer que salgan mejor que lo planeado.",
      imagen: fotoEjemplo("familia-dantu.svg", "Dantu"),
    },
    {
      nombre: "Zai",
      rol: "Protagonista",
      descripcion: "Dueña absoluta del humor de la casa. Si hay un blooper, probablemente sea suyo.",
      imagen: fotoEjemplo("familia-zai.svg", "Zai"),
    },
    {
      nombre: "Thor",
      rol: "Border collie",
      descripcion: "Jefe de seguridad, aspiradora oficial de migas y el único que nunca pide ver cómo salió la foto.",
      imagen: fotoEjemplo("familia-thor.svg", "Thor, el border collie de la familia"),
    },
    {
      nombre: "Topos",
      rol: "El más chiquito",
      descripcion: "Bajo perfil, gran presencia. Aparece poco, pero cuando aparece se roba el video.",
      imagen: fotoEjemplo("familia-topos.svg", "Topos"),
    },
  ]),

  marcas: placeholder(
    "Logos de marcas con las que colaboraron",
    [1, 2, 3, 4, 5, 6].map((n) => ({ nombre: `Marca ${n}`, logo: fotoEjemplo(`logo-${n}.svg`, `Logo de Marca ${n}`) })),
  ),

  collabs: placeholder(
    "Collabs destacadas (3 a 4)",
    [1, 2, 3, 4].map((n) => ({
      marca: `Marca ${n}`,
      descripcion: "Reel en casa mostrando el producto en nuestra rutina, con el humor de siempre.",
      imagen: fotoEjemplo(`collab-${n}.svg`, `Colaboración con Marca ${n}`),
    })),
  ),

  producciones: placeholder(
    "Galería de producciones de fotos",
    ["4x5", "1x1", "3x4", "4x5", "16x9", "4x5", "1x1", "3x4", "4x5"].map((formato, i) => ({
      imagen: fotoEjemplo(`produccion-${i + 1}-${formato}.svg`, `Producción de fotos ${i + 1}`),
      descripcion: `Producción ${i + 1}`,
    })),
  ),

  servicios: [
    {
      slug: "colaboracion",
      titulo: "Colaboración",
      bajada: "Tu marca en nuestra familia",
      descripcion:
        "Contenido real, en casa y con humor: tu producto forma parte de nuestro día a día, frente a una comunidad que nos sigue por eso.",
      incluye: ["Reels y TikToks", "Historias", "Publicaciones en el feed", "Contenido UGC para tu marca"],
      destacado: false,
    },
    {
      slug: "produccion-fotos",
      titulo: "Producción de fotos",
      bajada: "Fotos que dan ganas",
      descripcion:
        "Producciones de producto y de marca con mirada de fotógrafa: luz natural, producto en contexto y materialidad.",
      incluye: ["Fotografía de producto en contexto", "Video y reels", "Edición de foto y video", "Material listo para redes y web"],
      destacado: false,
    },
    {
      slug: "redes",
      titulo: "Redes",
      bajada: "Tu Instagram, con estrategia",
      descripcion:
        "Gestión de redes con método: diagnóstico, estrategia, producción y medición. Nada se publica sin que lo veas antes.",
      incluye: [
        "Planificación mensual de posteos e historias",
        "Diseño de posteos, historias, portadas y destacadas",
        "Fotos y videos de mi autoría",
        "Gestión de colaboraciones y contratos",
        "Reunión de control con informe",
      ],
      destacado: false,
    },
    {
      slug: "llave-en-mano",
      titulo: "Llave en mano",
      bajada: "Tu marca digital, completa",
      descripcion:
        "Redes, contenido y web en un solo equipo. Vos te ocupás de tu negocio; nosotros, de que se vea.",
      incluye: [
        "Todo el servicio de Redes",
        "Producción de fotos y video",
        "Web o tienda online a medida",
        "Coordinación entre equipos incluida",
      ],
      destacado: true,
    },
  ],

  alianza: {
    nombre: "Gen12 Software",
    url: "https://gen12software.com",
    frase: "Circuito cerrado: el contenido genera la visita y la web la convierte en consulta.",
  },

  comoTrabajo: {
    intro:
      "La organización es la clave en este tipo de trabajos. Por eso todo se pacta con tiempo y queda documentado.",
    pasos: [
      {
        titulo: "Análisis e investigación",
        descripcion: "Estudio del mercado, la competencia y las métricas actuales de tu cuenta. De acá sale la estrategia.",
      },
      {
        titulo: "Presentación del proyecto",
        descripcion: "Te presento la línea gráfica con modelos de posteos, historias y portadas. Elegís y ajustamos juntos.",
      },
      {
        titulo: "Producción de contenido",
        descripcion: "Jornadas de foto y video donde se produce el material del mes completo.",
      },
      {
        titulo: "Aplicación del plan",
        descripcion: "Los cambios se aplican de forma paulatina, sin cortar de golpe con lo que tu audiencia conoce.",
      },
      {
        titulo: "Medición y ajuste",
        descripcion: "Reunión de control con informe: qué funcionó, qué no y qué se corrige. Con datos, no con intuición.",
      },
    ],
    compromisos: [
      {
        titulo: "Todo a la vista",
        descripcion: "El contenido del período queda cargado en un tablero compartido: ves qué se publica, cuándo y con qué texto.",
      },
      {
        titulo: "Material ordenado",
        descripcion: "Fotos y videos en una carpeta compartida, disponibles para reutilizar cuando los necesites.",
      },
      {
        titulo: "Control con datos",
        descripcion: "Reunión de control con informe en PDF para ajustar la estrategia en cada período.",
      },
    ],
  },

  presupuestos: placeholder("Rangos de presupuesto (definir con Agus)", [
    "Canje de producto",
    "Hasta $300.000",
    "$300.000 a $800.000",
    "Más de $800.000",
    "A convenir",
  ]),

  textos: {
    heroBajada:
      "Somos una familia de Buenos Aires que comparte su día a día con humor. Si tu marca encaja con pañales, recetas que salen a medias y un border collie con opiniones, hablemos.",
    numerosIntro: "Una comunidad real, que nos sigue por cómo somos.",
    familiaIntro: "Los protagonistas de todo lo que ves en nuestras redes.",
    marcasIntro: "Algunas de las marcas que ya forman parte de nuestra historia.",
    produccionesIntro: "Fotos y videos de mi autoría, producidos para marcas y negocios.",
    serviciosIntro: "Elegí lo que necesitás. Sin precios de lista: cada propuesta se arma a tu medida.",
    contactoTitulo: ["¿Empezamos a construir", "tu marca?"],
    contactoBajada: "Contanos qué necesitás y te respondemos por WhatsApp.",
  },
};

export const site = siteSchema.parse(contenido);

assertSinPlaceholders(placeholdersPendientes());
