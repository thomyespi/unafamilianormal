## Context

Proyecto nuevo para una clienta de Gen12: Agustina "Agus" Cons, de "unafamilianormal_" (Instagram verificado, 43,8k; TikTok 10,6k). Tiene dos facetas: creadora de contenido familiar con humor, y profesional de marketing (técnica en Marketing y Publicidad, fotógrafa y filmmaker, community manager) que arma propuestas comerciales con diagnóstico, estrategia y cronograma, y que ya presenta a Gen12 como aliado para la web.

Hoy las colaboraciones se piden por MD y llegan desordenadas. La web apunta a marcas y negocios, no a seguidores, y su función principal es convertir visitas en consultas ordenadas por WhatsApp. El tráfico va a llegar sobre todo desde el link en bio, o sea, desde el navegador interno de Instagram en celular.

Referencia de diseño y contenido: su propuesta "Plan de Marketing Digital – Flos Hidromasajes" (PDF, 2026).

Restricciones: sin backend, mantenimiento mínimo, contenido de la clienta todavía incompleto, dominio `unafamilianormal.com`, deploy en Vercel.

## Goals / Non-Goals

**Goals:**
- Landing one-page estática, rápida y mobile-first.
- Formulario que genera una consulta estructurada en WhatsApp.
- Contenido editable desde un solo archivo, con placeholders hasta tener el material real.
- Misma identidad visual que las propuestas comerciales de Agus.

**Non-Goals:**
- Guardar consultas (Supabase) o panel de gestión: queda para una etapa futura.
- CMS para que la clienta edite sola.
- Precios, pagos o reservas online.
- Blog, multi-idioma, integración en vivo con la API de Instagram/TikTok.
- Propuestas comerciales como páginas web (`/propuestas/<cliente>`): idea para una etapa futura.

## Decisions

### Next.js (App Router) en Vercel, prerenderizado
Se usa Next.js con TypeScript y App Router, renderizado estático (la página no tiene datos dinámicos). Vercel sirve el sitio desde su CDN y maneja dominio y HTTPS.
- *Alternativa:* Astro (ideal para sitios de contenido). Se descarta porque el equipo ya trabaja con Next y facilita sumar Supabase, rutas API o las propuestas web más adelante.
- Código en GitHub: `github.com/thomyespi/unafamilianormal`. Vercel se conecta al repo: `main` despliega a producción y cada PR/rama genera un preview (útil para que la clienta revise).
- No se usa `output: 'export'` para no perder la optimización de imágenes de Vercel (`next/image`). La página igual se prerenderiza en build.

### Sistema visual tomado de sus propuestas
Se adopta el sistema de los PDFs de Agus en lugar de una estética nueva: la web es la cara B2B y tiene que verse igual que lo que las marcas reciben.
- *Alternativa descartada:* tipografía mono tipo máquina de escribir inspirada en los destacados de Instagram. Queda descartada para mantener una sola identidad entre propuesta, web y feed.
- **Tipografía:** Roboto vía `next/font/google`, con pesos 100/300 (thin/light), 400, 500 y 900 (black). Es la familia que se ve en el PDF. Patrones:
  - Título de sección: número chico (`01`) en terracota, línea 1 en black mayúscula, línea 2 en thin mayúscula, línea de acento terracota debajo.
  - Etiquetas o eyebrows: 500, mayúsculas, `tracking` amplio (~0.3em), terracota, tamaño chico.
  - Cuerpo: 300/400, alta legibilidad.
- **Paleta (tokens Tailwind, valores aproximados tomados del PDF, a confirmar con la clienta):**
  | Token | Uso | Hex aprox. |
  |---|---|---|
  | `crema` | fondo de página | `#FDF8F5` |
  | `nude` | fondos destacados, hero, degradés | `#E9D5CA` |
  | `nude-claro` | fondo de tarjetas | `#F6EEE9` |
  | `terracota` | acentos, etiquetas, bordes, números | `#A97B63` |
  | `rosado` | línea de acento | `#C9A190` |
  | `cacao` | tarjetas oscuras, botones | `#8C6B5D` |
  | `tinta` | texto principal | `#2F2522` |
- **Componentes base:** `Card` con fondo `nude-claro`, radio ~12px y borde izquierdo terracota; `CardDark` en `cacao` con texto claro (para destacar, como Llave en mano); `Stat` (número grande black + etiqueta espaciada); `SectionTitle` según el patrón de arriba.
- Hero y Contacto usan fondo `nude` con degradé suave y grilla tenue, como la portada y el cierre del PDF.
- Fotos: sin filtros pesados; como mucho un tono cálido sutil en CSS para unificar.

### Contenido en `content/site.ts` validado con Zod
Un módulo TypeScript exporta el contenido completo, validado con un esquema Zod al importar, así un dato inválido rompe el build.
- *Alternativa:* JSON/MDX o un CMS headless. Se descarta por ahora: un solo archivo tipado alcanza y no agrega servicios.
- Placeholders: cada campo de contenido pendiente usa un helper `placeholder(valor)` que lo marca. Un chequeo en build (`VERCEL_ENV === 'production'`) falla si queda alguno, listando los campos.
- Imágenes en `public/images/{familia,collabs,marcas,producciones,perfil}`.
- Textos base reutilizados del PDF (adaptados): "Quién soy", los 5 pasos del cronograma, los compromisos de organización (tablero compartido, Drive, reunión de control con informe), lo que incluye el plan integral (sin precio) y el cierre "¿Empezamos a construir tu marca?".

### WhatsApp vía `wa.me` armado en el cliente
El formulario es un componente cliente sin envío a servidor. Una función pura `buildWhatsAppUrl(datos, número)` arma el texto, omite líneas vacías y aplica `encodeURIComponent`. El envío es un link `<a href>` real, porque el navegador interno de Instagram puede bloquear `window.open`.
- *Alternativa:* WhatsApp Business API o un form a servidor. Se descartan por costo y complejidad; el requisito es que la consulta llegue ordenada, no guardarla.
- La preselección de servicio usa un query param o hash (`?servicio=llave-en-mano#contacto`) más estado compartido, para que funcione también como link directo desde Instagram.
- Número único: `5491162540911` (11 6254-0911 en formato `wa.me`: 54 + 9 + 11 + número). Es un dato real, no placeholder.
- Email `agustinabelencons99@gmail.com` solo como `mailto:` en el Footer; no hay formulario por mail.

### Alianza con Gen12 en Llave en mano
La tarjeta Llave en mano (variante oscura `CardDark`) nombra "en alianza con Gen12 Software" con link a `gen12software.com`, igual que la sección "No trabajo sola" de sus propuestas. Se suma un "web por Gen12" discreto en el Footer.

### Galería de Producciones con lightbox liviano
Grilla responsive con `next/image` (lazy + tamaños responsivos) y un visor propio hecho con `<dialog>` nativo: accesible, cierra con Escape, con flechas y gestos de deslizar.
- *Alternativa:* librería tipo `yet-another-react-lightbox`. Se evalúa si el visor propio se complica (zoom, gestos); el objetivo es no cargar JS pesado en la carga inicial (el visor se carga dinámicamente al primer clic).
- Las fotos tienen proporciones mixtas: la grilla usa recorte uniforme (`object-cover`, 4:5 como en Instagram) y el visor muestra la foto completa.

### Estructura de componentes
```
app/
  layout.tsx        Roboto, metadata, OG
  page.tsx          compone las secciones
components/sections/
  Hero, Numeros, QuienSoy, Familia, Marcas, Producciones,
  Servicios (+ ComoTrabajo), Contacto, Footer
components/ui/      Button, Card, CardDark, Stat, SectionTitle, Eyebrow
lib/whatsapp.ts     buildWhatsAppUrl (+ tests)
content/site.ts     contenido + esquema Zod
```

### Calidad
- Tests unitarios (Vitest) para `buildWhatsAppUrl` y la validación de contenido.
- Lighthouse mobile ≥ 90 en Performance, Accessibility y SEO como criterio de cierre.
- Contraste: terracota sobre crema se usa solo en textos grandes o etiquetas; verificar AA en cuerpo y botones.

## Risks / Trade-offs

- [La marca abre WhatsApp pero no envía el mensaje → la consulta se pierde sin rastro] → Aceptado para v1. Mitigación futura: registrar la consulta en Supabase antes de abrir WhatsApp. Opcionalmente, medir clics en "Enviar por WhatsApp" con Vercel Analytics.
- [Números desactualizados en el media kit] → Mostrar la fecha de actualización y acordar con la clienta un refresco mensual.
- [Contenido real demora y el lanzamiento se traba] → Los placeholders permiten avanzar y mostrar previews; el bloqueo en producción evita publicar contenido de ejemplo.
- [Número de WhatsApp y email expuestos públicamente → spam] → Aceptado: son los mismos datos que ya figuran en sus propuestas. Si crece el spam, migrar a WhatsApp Business con respuestas automáticas.
- [Galería pesada en celular] → Lazy loading, imágenes optimizadas por Vercel y visor cargado bajo demanda.
- [Contraste insuficiente de la paleta nude/terracota] → Revisar con Lighthouse/axe y oscurecer el tono de texto si hace falta, sin cambiar la identidad.
- [Mezcla de tonos: humor familiar vs. profesional] → Separar por sección: humor en Hero y Familia, profesional en Quién soy, Servicios y Cómo trabajo.
- [Exposición de menores] → Mostrar solo lo que ya es público en IG; revisión de contenido antes de publicar.

## Migration Plan

1. Deploy a preview en Vercel con placeholders para revisar con la clienta.
2. Cargar contenido real y quitar placeholders.
3. Comprar `unafamilianormal.com` desde Vercel (DNS administrado por Vercel, HTTPS automático) y asignarlo al proyecto.
4. Cambiar la bio de Instagram: "📩 Colaboraciones 👇" + link a la web; sumar el link en TikTok.
Rollback: Vercel permite volver instantáneamente al deploy anterior.

## Resolved

- WhatsApp: número único `11 6254-0911` para todo.
- Email: `agustinabelencons99@gmail.com`, solo en el Footer.
- Dominio: se compra en Vercel después del primer deploy.
- Textos: los proponemos nosotros (base: su PDF); la clienta aprueba o ajusta.
- Producción de fotos: galería propia (sección Producciones).
- Estética: sistema visual de sus propuestas (Roboto black/thin, nude/terracota/cacao); se descarta la mono.
- Gen12: nombrado como aliado en Llave en mano.
- Secciones nuevas: Quién soy y bloque Cómo trabajo.
- Redes y números iniciales (relevados el 2026-10-01, valores reales, no placeholder):
  - Instagram `@unafamilianormal_` (verificada) → `https://www.instagram.com/unafamilianormal_/` — 43,8k seguidores, 288 publicaciones.
  - TikTok `@unafamilianormal_` → `https://www.tiktok.com/@unafamilianormal_` — 10,6k seguidores, 645,8k me gusta. Bio: "HUMOR FAMILIAR Y REAL!".
  - Comunidad combinada: ~54k seguidores.
  - Falta de la clienta: interacción promedio y datos de público (género, edades, ubicaciones), que salen de los paneles de estadísticas.

## Open Questions

- Hex exactos de su paleta (si tiene el archivo de diseño de la propuesta, usar esos valores).
