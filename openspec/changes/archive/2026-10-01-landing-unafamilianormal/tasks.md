## 1. Setup

- [x] 1.1 Crear app Next.js (App Router, TypeScript, Tailwind, ESLint) en la raíz del repo
- [x] 1.2 Agregar dependencias: `zod`, `vitest` (dev)
- [x] 1.3 Definir tokens de marca en Tailwind (`crema`, `nude`, `nude-claro`, `terracota`, `rosado`, `cacao`, `tinta`) y cargar Roboto (100/300/400/500/900) con `next/font/google`
- [x] 1.4 Configurar `.gitignore` (incluir `.claude/`, `.env*`, `.next/`, `node_modules/`) y verificar remoto `origin` → `github.com/thomyespi/unafamilianormal`
- [x] 1.5 Crear estructura de carpetas: `components/sections`, `components/ui`, `lib`, `content`, `public/images/{familia,collabs,marcas,producciones,perfil}`

## 2. Contenido configurable

- [x] 2.1 Definir el esquema Zod del contenido (redes, WhatsApp, email, stats + fecha, público, perfil profesional, familia, marcas, collabs, producciones, servicios con lista de lo que incluye, pasos de "Cómo trabajo", alianza Gen12, opciones de presupuesto, textos)
- [x] 2.2 Implementar helper `placeholder()` y chequeo que hace fallar el build de producción si quedan placeholders, listando los campos
- [x] 2.3 Crear `content/site.ts` con placeholders para lo pendiente y datos reales ya conocidos: WhatsApp `5491162540911`, email `agustinabelencons99@gmail.com`, IG `@unafamilianormal_` (43,8k), TikTok `@unafamilianormal_` (10,6k seguidores, 645,8k me gusta), fecha 2026-10-01, formación y proceso de trabajo tomados del PDF
- [x] 2.4 Agregar imágenes placeholder neutras en `public/images`
- [x] 2.5 Tests: contenido inválido (WhatsApp mal formado, URL inválida, email inválido) falla la validación

## 3. UI base y layout

- [x] 3.1 Componentes UI: `SectionTitle` (número + black/thin + línea de acento), `Eyebrow` (mayúsculas espaciadas), `Card` (borde izquierdo terracota), `CardDark` (cacao), `Stat`, `Button` (mín. 44px)
- [x] 3.2 `app/layout.tsx`: fuentes, metadata (title, description), Open Graph, favicon
- [x] 3.3 `app/page.tsx` componiendo las nueve secciones en orden, con `id` anclables

## 4. Secciones

- [x] 4.1 Hero: fondo nude con degradé y grilla tenue, foto familiar, tagline, pilares, ubicación, badge verificada, CTA "Contratanos" → `#contacto`
- [x] 4.2 Números: `Stat` de seguidores IG/TikTok, me gusta TikTok, comunidad total, interacción, público (género, edades, ubicaciones), fecha de actualización
- [x] 4.3 Quién soy: retrato, formación (Siglo 21, EIDEC), roles, texto "ordenada, planificada y medible"
- [x] 4.4 Conocé a la familia: tarjetas por integrante (Agus, Dantu, Zai, Thor, Topos) con humor
- [x] 4.5 Marcas que confiaron: grilla de logos + 3-4 collabs destacadas con link opcional
- [x] 4.6 Producciones: grilla responsive (recorte 4:5, lazy) + visor `<dialog>` con flechas, swipe y Escape, cargado bajo demanda; botón "Quiero una producción" → formulario con servicio preseleccionado
- [x] 4.7 Servicios: 4 tarjetas sin precios con lista de lo que incluye; Llave en mano en `CardDark` con "en alianza con Gen12 Software" + link; botón "Consultar" por tarjeta; link "Ver producciones" en Producción de fotos
- [x] 4.8 Cómo trabajo (dentro de Servicios): 5 pasos numerados + compromisos de organización (tablero compartido, Drive, reunión de control con informe)
- [x] 4.9 Contacto: fondo nude, título "¿Empezamos a construir tu marca?" + formulario
- [x] 4.10 Footer: links a IG, TikTok, WhatsApp (mensaje genérico), email `mailto:`, "web por Gen12" y año actual

## 5. Contacto por WhatsApp

- [x] 5.1 `lib/whatsapp.ts`: `buildWhatsAppUrl(datos, número)` con formato del mensaje, omisión de líneas vacías y `encodeURIComponent`
- [x] 5.2 Tests de `buildWhatsAppUrl`: envío completo, sin opcionales, acentos/emojis/"&"/saltos de línea
- [x] 5.3 Componente formulario: campos marca, servicio, presupuesto, fecha, mensaje (máx. 500); validación de obligatorios; sin email
- [x] 5.4 Envío mediante link `<a href>` real a `wa.me` (compatible con navegador interno de Instagram)
- [x] 5.5 Preselección de servicio vía `?servicio=<slug>#contacto` desde las tarjetas, editable por el visitante

## 6. Textos, estética y responsive

- [x] 6.1 Redactar textos (placeholder para aprobación): humor en Hero y Familia; tono cercano y profesional en Quién soy, Servicios y Cómo trabajo, adaptando el PDF; sin urgencia vacía
- [ ] 6.2 Revisión responsive en 360px, tablet y desktop: sin scroll horizontal, tap targets ≥ 44px
- [x] 6.3 Revisión de contraste AA de la paleta (terracota/nude) en cuerpo y botones; ajustar tonos de texto si hace falta

## 7. Deploy y verificación

- [ ] 7.1 Crear proyecto en Vercel conectado al repo `thomyespi/unafamilianormal` (rama `main` = producción, PRs = previews) y desplegar preview con placeholders
- [ ] 7.2 Probar el formulario en navegador interno de Instagram (iOS y Android) y en desktop (WhatsApp Web)
- [ ] 7.3 Lighthouse mobile ≥ 90 en Performance, Accessibility y SEO
- [ ] 7.4 Verificar vista previa Open Graph al compartir el link en WhatsApp

## 8. Lanzamiento (con contenido real)

- [ ] 8.1 Cargar contenido real: stats de público IG/TikTok, logos y collabs, fotos de familia, retrato y galería de producciones, textos aprobados, hex finales de la paleta
- [ ] 8.2 Revisión de privacidad: solo nombres de pila y fotos de los chicos
- [ ] 8.3 Build de producción sin placeholders
- [ ] 8.4 Comprar `unafamilianormal.com` en Vercel y asignarlo al proyecto (DNS + HTTPS automáticos)
- [ ] 8.5 Avisar a la clienta para cambiar la bio de IG ("📩 Colaboraciones 👇" + link) y sumar el link de la web en TikTok
