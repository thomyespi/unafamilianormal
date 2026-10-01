import { z } from "zod";

import { SERVICIOS } from "./servicios";

export { SERVICIOS, type ServicioSlug } from "./servicios";

const texto = z.string().trim().min(1);

const imagen = z.object({
  // Ruta dentro de /public
  src: z.string().startsWith("/"),
  alt: texto,
});

const porcentaje = z.object({
  label: texto,
  porcentaje: z.number().min(0).max(100),
});

const red = z.object({
  handle: z.string().startsWith("@"),
  url: z.url(),
});

export const siteSchema = z.object({
  marca: z.object({
    nombre: texto,
    tagline: texto,
    pilares: z.array(texto).min(1),
    ubicacion: texto,
    verificada: z.boolean(),
    heroImagen: imagen,
  }),

  contacto: z.object({
    // Formato internacional para wa.me, sin "+" ni espacios: 54 9 + área + número
    whatsapp: z
      .string()
      .regex(/^549\d{10}$/, "WhatsApp debe estar en formato internacional sin + ni espacios (ej: 5491162540911)"),
    email: z.email(),
  }),

  redes: z.object({
    instagram: red,
    tiktok: red,
  }),

  stats: z.object({
    instagramSeguidores: z.number().int().nonnegative(),
    tiktokSeguidores: z.number().int().nonnegative(),
    tiktokMeGusta: z.number().int().nonnegative(),
    interaccion: z.object({ valor: texto, label: texto }),
    actualizado: z.iso.date(),
  }),

  publico: z.object({
    genero: z.array(porcentaje).min(1),
    edades: z.array(porcentaje).min(1),
    ubicaciones: z.array(texto).min(1),
  }),

  perfil: z.object({
    nombre: texto,
    retrato: imagen,
    roles: z.array(texto).min(1),
    formacion: z.array(z.object({ titulo: texto, institucion: texto })).min(1),
    texto: z.array(texto).min(1),
    frase: texto,
  }),

  familia: z
    .array(
      z.object({
        nombre: texto,
        rol: texto,
        descripcion: texto,
        imagen: imagen,
      }),
    )
    .min(1),

  marcas: z.array(z.object({ nombre: texto, logo: imagen })),

  collabs: z
    .array(
      z.object({
        marca: texto,
        descripcion: texto,
        imagen: imagen,
        url: z.url().optional(),
      }),
    )
    .min(3)
    .max(4),

  producciones: z.array(z.object({ imagen: imagen, descripcion: texto.optional() })).min(1),

  servicios: z
    .array(
      z.object({
        slug: z.enum(SERVICIOS),
        titulo: texto,
        bajada: texto,
        descripcion: texto,
        incluye: z.array(texto).min(1),
        destacado: z.boolean(),
      }),
    )
    .length(SERVICIOS.length)
    .refine((s) => SERVICIOS.every((slug) => s.some((x) => x.slug === slug)), "Falta algún servicio"),

  alianza: z.object({
    nombre: texto,
    url: z.url(),
    frase: texto,
  }),

  comoTrabajo: z.object({
    intro: texto,
    pasos: z.array(z.object({ titulo: texto, descripcion: texto })).length(5),
    compromisos: z.array(z.object({ titulo: texto, descripcion: texto })).min(1),
  }),

  presupuestos: z
    .array(texto)
    .min(2)
    .refine((p) => p.includes("A convenir"), 'Las opciones de presupuesto deben incluir "A convenir"'),

  textos: z.object({
    heroBajada: texto,
    numerosIntro: texto,
    familiaIntro: texto,
    marcasIntro: texto,
    produccionesIntro: texto,
    serviciosIntro: texto,
    contactoTitulo: z.tuple([texto, texto]),
    contactoBajada: texto,
  }),
});

export type Site = z.infer<typeof siteSchema>;
