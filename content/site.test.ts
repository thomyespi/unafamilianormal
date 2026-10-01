import { describe, expect, it } from "vitest";
import { assertSinPlaceholders, placeholdersPendientes } from "./placeholder";
import { siteSchema, type Site } from "./schema";
import { site } from "./site";

const conCambio = (cambio: (s: Site) => void) => {
  const copia = structuredClone(site);
  cambio(copia);
  return siteSchema.safeParse(copia);
};

const campoConError = (r: ReturnType<typeof siteSchema.safeParse>) =>
  r.success ? [] : r.error.issues.map((i) => i.path.join("."));

describe("contenido del sitio", () => {
  it("el contenido actual es válido", () => {
    expect(siteSchema.safeParse(site).success).toBe(true);
  });

  it("falla con un WhatsApp sin código de país", () => {
    const r = conCambio((s) => (s.contacto.whatsapp = "1162540911"));
    expect(campoConError(r)).toContain("contacto.whatsapp");
  });

  it("falla con un WhatsApp con + o espacios", () => {
    const r = conCambio((s) => (s.contacto.whatsapp = "+54 9 11 6254 0911"));
    expect(campoConError(r)).toContain("contacto.whatsapp");
  });

  it("falla con una URL inválida", () => {
    const r = conCambio((s) => (s.redes.instagram.url = "instagram/unafamilianormal_"));
    expect(campoConError(r)).toContain("redes.instagram.url");
  });

  it("falla con un email inválido", () => {
    const r = conCambio((s) => (s.contacto.email = "agus-arroba-gmail"));
    expect(campoConError(r)).toContain("contacto.email");
  });

  it("falla si falta un servicio", () => {
    const r = conCambio((s) => (s.servicios = s.servicios.slice(0, 3)));
    expect(r.success).toBe(false);
  });

  it('falla si los presupuestos no incluyen "A convenir"', () => {
    const r = conCambio((s) => (s.presupuestos = ["Canje", "Hasta $100"]));
    expect(campoConError(r)).toContain("presupuestos");
  });
});

describe("placeholders", () => {
  it("registra el contenido de ejemplo pendiente", () => {
    expect(placeholdersPendientes()).toContain("Datos de público (género, edades, ubicaciones)");
  });

  it("no bloquea fuera de producción", () => {
    expect(() => assertSinPlaceholders(["Foto"], "preview")).not.toThrow();
    expect(() => assertSinPlaceholders(["Foto"], undefined)).not.toThrow();
  });

  it("bloquea en producción y lista los campos pendientes", () => {
    expect(() => assertSinPlaceholders(["Foto principal", "Logos"], "production")).toThrow(
      /Foto principal[\s\S]*Logos/,
    );
  });

  it("no bloquea producción si no quedan placeholders", () => {
    expect(() => assertSinPlaceholders([], "production")).not.toThrow();
  });
});
