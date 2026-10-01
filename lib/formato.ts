const compacto = new Intl.NumberFormat("es-AR", { notation: "compact", maximumFractionDigits: 1 });

// 43800 → "43,8k"
export function numeroCompacto(n: number): string {
  return compacto.format(n).replace(/\s/g, "");
}

// "2026-10-01" → "octubre de 2026"
export function mesYAnio(fechaIso: string): string {
  const [anio, mes] = fechaIso.split("-").map(Number);
  return new Intl.DateTimeFormat("es-AR", { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(anio, mes - 1, 1)),
  );
}
