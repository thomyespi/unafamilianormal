## ADDED Requirements

### Requirement: Formulario de consulta corto
La sección Contacto SHALL mostrar un formulario con los campos: nombre o marca (obligatorio), servicio (obligatorio; Colaboración, Producción de fotos, Redes (CM), Llave en mano), rango de presupuesto (obligatorio; opciones definidas en el contenido configurable, incluida "A convenir"), fecha o período estimado (opcional) y mensaje (opcional, máximo 500 caracteres). El formulario SHALL NOT pedir email.

#### Scenario: Campos visibles
- **WHEN** el visitante llega a Contacto
- **THEN** ve los cinco campos y ningún campo de email

#### Scenario: Falta un campo obligatorio
- **WHEN** el visitante intenta enviar sin completar marca, servicio o presupuesto
- **THEN** el formulario no abre WhatsApp y señala los campos faltantes

### Requirement: Envío por WhatsApp con mensaje precargado
Al enviar, el sitio SHALL abrir `https://wa.me/<número>?text=<mensaje>` con el número del contenido configurable y un mensaje con este formato, URL-encoded:

```
Hola! Les escribo desde la web 👋
🏷️ Marca: <marca>
📦 Busco: <servicio>
💰 Presupuesto: <rango>
📅 Para: <fecha>
📝 <mensaje>
```

Las líneas de campos opcionales vacíos SHALL omitirse.

#### Scenario: Envío completo
- **WHEN** el visitante completa todos los campos y toca "Enviar por WhatsApp"
- **THEN** se abre WhatsApp (app en celular, WhatsApp Web en desktop) con el mensaje armado y el número de la cuenta

#### Scenario: Envío sin opcionales
- **WHEN** el visitante deja vacíos fecha y mensaje
- **THEN** el mensaje no incluye las líneas "📅 Para" ni "📝"

#### Scenario: Caracteres especiales
- **WHEN** el mensaje contiene acentos, emojis, "&" o saltos de línea
- **THEN** el texto llega a WhatsApp sin cortarse ni alterarse

### Requirement: Preselección de servicio desde las tarjetas
El botón de consulta de cada tarjeta de Servicios SHALL llevar al formulario con ese servicio ya seleccionado. El visitante SHALL poder cambiarlo.

#### Scenario: Consulta desde Llave en mano
- **WHEN** el visitante toca "Consultar" en la tarjeta Llave en mano
- **THEN** la página se desplaza al formulario con "Llave en mano" seleccionado

#### Scenario: Cambio de servicio
- **WHEN** llega con un servicio preseleccionado y elige otro
- **THEN** el mensaje usa el servicio elegido último

### Requirement: Número único de WhatsApp
Todos los accesos a WhatsApp del sitio (formulario, Footer y cualquier CTA) SHALL usar el mismo número: `1162540911` (Buenos Aires), expresado en formato internacional para `wa.me` como `5491162540911`.

#### Scenario: Mismo destino desde cualquier botón
- **WHEN** el visitante abre WhatsApp desde el formulario o desde el Footer
- **THEN** en ambos casos el chat se abre con el número `+54 9 11 6254-0911`

### Requirement: Contacto directo alternativo
El sitio SHALL ofrecer además un acceso directo a WhatsApp sin formulario (en el Footer), con un mensaje inicial genérico.

#### Scenario: Contacto rápido
- **WHEN** el visitante toca el ícono de WhatsApp en el Footer
- **THEN** se abre WhatsApp con "Hola! Les escribo desde la web 👋"
