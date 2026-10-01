## Why

Unafamilianormal es la cuenta de Agustina "Agus" Cons: creadora de contenido verificada (43,8k en Instagram, 10,6k en TikTok; familia, humor y lifestyle, Buenos Aires) y además profesional de marketing (técnica en Marketing y Publicidad, fotógrafa y filmmaker, community manager con método propio). Hoy las consultas comerciales llegan por MD ("Colaboraciones por MD"), mezcladas con mensajes de seguidores y sin la información necesaria para responder. Una web propia en `unafamilianormal.com` le da a marcas y negocios un lugar único para conocer sus dos facetas (creadora y profesional), ver sus números y contratarla con una consulta ordenada que llega directo a WhatsApp.

## What Changes

- Nueva landing one-page en Next.js, desplegada en Vercel como sitio estático (sin backend), mobile-first (el tráfico principal llega desde el link en bio).
- Secciones: Hero, Números (media kit vivo), Quién soy (perfil profesional), Conocé a la familia, Marcas que confiaron, Producciones (galería propia de fotos), Servicios (con bloque "Cómo trabajo"), Contacto, Footer.
- Cuatro servicios presentados como tarjetas: **Colaboración**, **Producción de fotos**, **Redes (CM)** y **Llave en mano** (web + redes + contenido). La web del paquete se presenta **en alianza con Gen12 Software**, igual que en las propuestas comerciales de Agus.
- Sin precios visibles: el formulario pide un rango de presupuesto. Los precios quedan para las propuestas personalizadas.
- Formulario corto que arma un mensaje estructurado y abre WhatsApp (`wa.me`) con el texto precargado. No hay formulario por mail. Un único número de WhatsApp (11 6254-0911) para todos los accesos. El email se muestra solo como dato de contacto en el Footer.
- Todo el contenido (números, familia, marcas, fotos, servicios, proceso, contacto) vive en un archivo de configuración tipado con placeholders, para cargar el material real sin tocar componentes.
- Identidad visual tomada del sistema que Agus ya usa en sus propuestas: paleta nude/terracota/cacao, títulos sans en peso black combinado con thin, etiquetas con mucho espaciado, secciones numeradas y tarjetas con borde terracota. Tono cercano y profesional en servicios, con humor en la parte familiar.

## Capabilities

### New Capabilities
- `landing-page`: estructura, secciones, contenido, identidad visual, responsive, SEO y privacidad de la landing.
- `contacto-whatsapp`: formulario de consulta, preselección de servicio desde las tarjetas y armado del link de WhatsApp con mensaje precargado.
- `contenido-configurable`: fuente única de contenido editable (stats, perfil, familia, marcas, servicios, proceso, contacto) con placeholders hasta tener el material real.

### Modified Capabilities
<!-- Ninguna: proyecto nuevo, no hay specs existentes. -->

## Impact

- Proyecto nuevo: app Next.js (App Router, TypeScript) en la raíz del repo.
- Dependencias: Next.js, React, Tailwind CSS, Zod, `next/font` (Google Fonts).
- Infraestructura: repo `github.com/thomyespi/unafamilianormal` conectado a Vercel; dominio `unafamilianormal.com` comprado en Vercel después del primer deploy.
- Contenido pendiente de la clienta: estadísticas de público de IG/TikTok, logos y 3-4 collabs destacadas, fotos (familia, retrato profesional y galería de producciones), aprobación de textos (los proponemos nosotros), confirmación de los colores exactos de su sistema visual.
- Fuera de alcance (futuro): registro de consultas en Supabase, panel de gestión, multi-idioma, propuestas comerciales como páginas web privadas (`/propuestas/<cliente>`) en lugar de PDF.
- Post-lanzamiento: cambiar la bio de Instagram de "Colaboraciones por MD" a link a la web y sumar el link en TikTok.
