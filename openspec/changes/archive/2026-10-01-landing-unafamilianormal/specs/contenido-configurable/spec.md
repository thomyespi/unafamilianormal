## ADDED Requirements

### Requirement: Fuente única de contenido
Todo el contenido variable del sitio SHALL definirse en un único módulo de contenido tipado: redes (URLs y handles), número de WhatsApp, email de contacto, perfil profesional (retrato, formación, roles, texto), pasos del proceso de trabajo, datos de la alianza con Gen12 (nombre, URL, frase), estadísticas y fecha de actualización, datos de público, integrantes de la familia, marcas y colaboraciones destacadas, fotos de la galería de producciones (imagen, texto alternativo y marca o descripción opcional), servicios (títulos, descripciones, lista de lo que incluye, destacado), opciones de presupuesto y textos principales. Los componentes SHALL NOT tener este contenido hardcodeado.

#### Scenario: Actualizar números
- **WHEN** se cambian los seguidores de Instagram en el módulo de contenido y se redespliega
- **THEN** la sección Números muestra el valor nuevo sin cambios en componentes

#### Scenario: Agregar una marca
- **WHEN** se agrega una marca con su logo al módulo de contenido
- **THEN** aparece en "Marcas que confiaron" sin tocar componentes

### Requirement: Validación del contenido en build
El contenido SHALL estar tipado, de modo que un dato faltante o con forma incorrecta (por ejemplo, número de WhatsApp sin código de país, URL inválida o servicio inexistente) haga fallar el build.

#### Scenario: Número de WhatsApp mal formado
- **WHEN** el número de WhatsApp no tiene el formato internacional sin "+" ni espacios (por ejemplo, `54911XXXXXXXX`)
- **THEN** el build falla con un mensaje que indica el campo inválido

### Requirement: Placeholders hasta tener el material real
Mientras falte material de la clienta, el contenido SHALL usar placeholders realistas (imágenes neutras, números de ejemplo, logos genéricos) marcados como tales. Antes del lanzamiento a producción, el build SHALL fallar si quedan placeholders marcados.

#### Scenario: Preview con placeholders
- **WHEN** se despliega un preview con contenido incompleto
- **THEN** el sitio se ve completo usando placeholders

#### Scenario: Producción con placeholders
- **WHEN** se intenta un build de producción y algún contenido sigue marcado como placeholder
- **THEN** el build falla y lista los campos pendientes
