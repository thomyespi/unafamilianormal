// Marca contenido de ejemplo que todavía hay que reemplazar con material real de la clienta.
// En un build de producción (VERCEL_ENV=production) el sitio no compila si queda alguno.

const pendientes = new Set<string>();

export function placeholder<T>(campo: string, valor: T): T {
  pendientes.add(campo);
  return valor;
}

export function placeholdersPendientes(): string[] {
  return [...pendientes];
}

export function assertSinPlaceholders(campos: string[], entorno = process.env.VERCEL_ENV) {
  if (entorno !== "production" || campos.length === 0) return;
  throw new Error(
    `Hay contenido de ejemplo sin reemplazar (${campos.length}). Completar en content/site.ts:\n` +
      campos.map((c) => `  - ${c}`).join("\n"),
  );
}
