// Sin dependencias: se importa desde componentes cliente sin arrastrar Zod al bundle.
export const SERVICIOS = ["colaboracion", "produccion-fotos", "redes", "llave-en-mano"] as const;
export type ServicioSlug = (typeof SERVICIOS)[number];
