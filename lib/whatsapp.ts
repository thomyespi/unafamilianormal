export const SALUDO = "Hola! Les escribo desde la web 👋";

export type Consulta = {
  marca: string;
  servicio: string;
  presupuesto: string;
  fecha?: string;
  mensaje?: string;
};

export function buildWhatsAppMessage(consulta: Consulta): string {
  const lineas = [
    SALUDO,
    `🏷️ Marca: ${consulta.marca.trim()}`,
    `📦 Busco: ${consulta.servicio.trim()}`,
    `💰 Presupuesto: ${consulta.presupuesto.trim()}`,
  ];
  const fecha = consulta.fecha?.trim();
  const mensaje = consulta.mensaje?.trim();
  if (fecha) lineas.push(`📅 Para: ${fecha}`);
  if (mensaje) lineas.push(`📝 ${mensaje}`);
  return lineas.join("\n");
}

export function whatsappUrl(numero: string, texto: string = SALUDO): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}

export function buildWhatsAppUrl(consulta: Consulta, numero: string): string {
  return whatsappUrl(numero, buildWhatsAppMessage(consulta));
}
