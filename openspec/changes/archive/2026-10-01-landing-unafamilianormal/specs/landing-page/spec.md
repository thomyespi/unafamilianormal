## ADDED Requirements

### Requirement: Landing one-page con secciones en orden
El sitio SHALL servir en `/` una única página con las secciones, en este orden: Hero, Números, Quién soy, Conocé a la familia, Marcas que confiaron, Producciones, Servicios, Contacto y Footer. Cada sección SHALL tener un `id` anclable para navegación interna.

#### Scenario: Visitante recorre la página
- **WHEN** un visitante abre `unafamilianormal.com`
- **THEN** ve las nueve secciones en el orden indicado, en una sola página

#### Scenario: Navegación por ancla
- **WHEN** un visitante entra a `unafamilianormal.com/#servicios`
- **THEN** la página se desplaza a la sección Servicios

### Requirement: Hero con CTA de contratación
El Hero SHALL mostrar la foto familiar principal, el nombre de la cuenta, el tagline "Una familia normal... más o menos ✨", los pilares "Familia • Humor • Lifestyle", la ubicación Buenos Aires, un indicador de cuenta verificada y un botón "Contratanos" que lleva a la sección Contacto.

#### Scenario: CTA del Hero
- **WHEN** el visitante toca "Contratanos"
- **THEN** la página se desplaza al formulario de contacto

### Requirement: Sección Números como media kit
La sección Números SHALL mostrar seguidores de Instagram y de TikTok, el total de "me gusta" de TikTok, la comunidad combinada (suma de seguidores), al menos una métrica de interacción y datos de público (distribución por género, rangos de edad y principales ubicaciones), tomados del contenido configurable, junto con la fecha de última actualización de los datos.

#### Scenario: Marca evalúa audiencia
- **WHEN** una marca visita la sección Números
- **THEN** ve seguidores por red, "me gusta" de TikTok, comunidad total, interacción, datos de público y la fecha de actualización

### Requirement: Sección Quién soy
La sección SHALL presentar a Agustina Cons como profesional: retrato, nombre, formación (técnica en Marketing y Publicidad, Universidad Siglo 21; fotógrafa, EIDEC), roles (community manager, fotógrafa y filmmaker) y un texto breve sobre su forma de trabajar ("ordenada, planificada y medible"; produce ella misma foto y video, así la estrategia y la pieza final salen del mismo lugar).

#### Scenario: Negocio evalúa contratar CM
- **WHEN** un negocio que busca community manager llega a "Quién soy"
- **THEN** ve la formación, los roles y la forma de trabajar de Agus

### Requirement: Sección Conocé a la familia
La sección SHALL mostrar una tarjeta por integrante (Agus, Dantu, Zai, Thor, Topos) con foto, nombre y una descripción breve con humor.

#### Scenario: Visitante ve a la familia
- **WHEN** el visitante llega a "Conocé a la familia"
- **THEN** ve una tarjeta por cada integrante definido en el contenido configurable

### Requirement: Sección Marcas que confiaron
La sección SHALL mostrar los logos de las marcas con las que se colaboró y entre 3 y 4 colaboraciones destacadas, cada una con imagen, nombre de la marca, descripción breve y link opcional a la publicación.

#### Scenario: Colaboración con link
- **WHEN** una colaboración destacada tiene link a la publicación
- **THEN** su tarjeta abre la publicación en una pestaña nueva

#### Scenario: Colaboración sin link
- **WHEN** una colaboración destacada no tiene link
- **THEN** su tarjeta se muestra sin enlace y sin error

### Requirement: Galería de Producciones de fotos
La sección Producciones SHALL mostrar una galería propia con las producciones de fotos realizadas, en grilla responsive. Cada foto SHALL poder ampliarse en un visor (lightbox) navegable con flechas, gestos de deslizar en celular y tecla Escape para cerrar. Las fotos SHALL cargarse en forma diferida (lazy) y optimizadas. La galería SHALL incluir un botón "Quiero una producción" que lleva al formulario con "Producción de fotos" preseleccionado.

#### Scenario: Ampliar una foto
- **WHEN** el visitante toca una foto de la galería
- **THEN** se abre el visor con la foto ampliada y puede pasar a la siguiente o anterior

#### Scenario: Cerrar el visor
- **WHEN** el visor está abierto y el visitante toca cerrar, fuera de la imagen o presiona Escape
- **THEN** el visor se cierra y vuelve a la posición de la galería

#### Scenario: Consulta desde la galería
- **WHEN** el visitante toca "Quiero una producción"
- **THEN** la página se desplaza al formulario con "Producción de fotos" seleccionado

#### Scenario: Link desde la tarjeta de servicio
- **WHEN** el visitante está en la tarjeta Producción de fotos en Servicios
- **THEN** encuentra un link "Ver producciones" que lleva a la galería

### Requirement: Sección Servicios sin precios
La sección SHALL presentar cuatro tarjetas: Colaboración, Producción de fotos, Redes (CM) y Llave en mano. Cada tarjeta SHALL incluir una descripción y una lista breve de lo que incluye. Llave en mano SHALL destacarse visualmente como el paquete completo (web + redes + contenido). Ninguna tarjeta SHALL mostrar precios. Cada tarjeta SHALL tener un botón de consulta.

#### Scenario: Visitante busca precios
- **WHEN** el visitante recorre Servicios
- **THEN** no encuentra precios, solo descripciones, lo que incluye cada servicio y un botón de consulta

#### Scenario: Llave en mano destacada
- **WHEN** el visitante ve las cuatro tarjetas
- **THEN** la tarjeta Llave en mano se distingue visualmente del resto

### Requirement: Llave en mano en alianza con Gen12
La tarjeta Llave en mano SHALL indicar que la web se desarrolla en alianza con Gen12 Software, con link a `gen12software.com` en pestaña nueva, y una frase que explique el circuito: el contenido genera la visita y la web la convierte en consulta.

#### Scenario: Visitante ve la alianza
- **WHEN** el visitante lee la tarjeta Llave en mano
- **THEN** ve la mención "en alianza con Gen12 Software" y puede abrir su sitio en una pestaña nueva

### Requirement: Bloque Cómo trabajo
Dentro de Servicios, el sitio SHALL mostrar el proceso de trabajo en pasos numerados: Análisis e investigación, Presentación del proyecto, Producción de contenido, Aplicación del plan y Medición y ajuste. Además SHALL mostrar los argumentos de organización: planificación por adelantado en un tablero compartido donde el cliente ve todo antes de publicarse, material en una carpeta compartida y reunión de control con informe.

#### Scenario: Negocio evalúa el proceso
- **WHEN** el visitante llega al bloque "Cómo trabajo"
- **THEN** ve los cinco pasos numerados en orden y los compromisos de organización

### Requirement: Contacto con cierre de propuesta
La sección Contacto SHALL abrir con el título "¿Empezamos a construir tu marca?" (o una variante aprobada por la clienta) seguido del formulario de consulta.

#### Scenario: Llegada a Contacto
- **WHEN** el visitante llega a Contacto
- **THEN** ve el título de cierre y debajo el formulario

### Requirement: Footer con redes y email
El Footer SHALL incluir links a Instagram, TikTok y WhatsApp, el email de contacto como link `mailto:` (solo dato de contacto, sin formulario) y el año actual.

#### Scenario: Links del footer
- **WHEN** el visitante toca el ícono de Instagram o TikTok
- **THEN** se abre el perfil correspondiente en una pestaña nueva

#### Scenario: Email en el footer
- **WHEN** el visitante toca el email
- **THEN** se abre su cliente de correo con la dirección de Agus como destinataria

### Requirement: Diseño mobile-first
La página SHALL verse y funcionar correctamente desde 360px de ancho sin scroll horizontal, y adaptarse a tablet y desktop.

#### Scenario: Visita desde el link en bio
- **WHEN** un visitante abre la web desde el navegador interno de Instagram en un celular de 360px
- **THEN** todo el contenido es legible, no hay scroll horizontal y los botones son tocables (mínimo 44px de alto)

### Requirement: Identidad visual del sistema de Agus
El sitio SHALL usar el sistema visual de las propuestas comerciales de Agus: paleta nude, crema, terracota y cacao con texto marrón oscuro; títulos sans en mayúsculas que combinan peso black con peso thin; etiquetas pequeñas en mayúsculas con espaciado amplio en terracota; secciones numeradas (01, 02...) con una línea de acento bajo el título; y tarjetas de fondo claro con borde izquierdo terracota.

#### Scenario: Coherencia con las propuestas
- **WHEN** una marca recibió una propuesta en PDF de Agus y luego visita la web
- **THEN** reconoce la misma paleta, tipografía y estilo de tarjetas

#### Scenario: Título de sección
- **WHEN** se muestra el título de una sección
- **THEN** tiene número, una primera línea en peso black, una segunda en peso thin y la línea de acento

### Requirement: Tono de comunicación
Los textos SHALL ser cercanos y profesionales en Quién soy, Servicios y Cómo trabajo, y con humor en Hero y Conocé a la familia. No SHALL usar urgencia vacía ("¡APROVECHÁ!", "¡ÚLTIMOS DÍAS!") ni mayúsculas gritadas en el cuerpo.

#### Scenario: Revisión de textos
- **WHEN** se revisan los textos antes de publicar
- **THEN** Servicios usa tono profesional, Familia usa humor y no hay frases de urgencia vacía

### Requirement: Rendimiento y SEO
La página SHALL generarse de forma estática, optimizar imágenes y definir title, description, Open Graph (imagen, título y descripción para compartir) y favicon.

#### Scenario: Link compartido por WhatsApp
- **WHEN** alguien comparte `unafamilianormal.com` en WhatsApp o Instagram
- **THEN** se muestra la vista previa con imagen, título y descripción

#### Scenario: Puntaje de rendimiento
- **WHEN** se corre Lighthouse en mobile sobre la página publicada
- **THEN** Performance, Accessibility y SEO son 90 o más

### Requirement: Privacidad de los menores
El sitio SHALL mostrar de los chicos solo lo que ya es público en Instagram (nombre de pila y fotos). No SHALL publicar apellidos, colegio, ubicación exacta ni otros datos identificatorios.

#### Scenario: Revisión de contenido
- **WHEN** se revisa el contenido configurable antes de publicar
- **THEN** no contiene datos de los chicos más allá de nombre de pila y fotos
