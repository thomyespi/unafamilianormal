import { describe, expect, it } from "vitest";
import { SALUDO, buildWhatsAppMessage, buildWhatsAppUrl, whatsappUrl } from "./whatsapp";

const NUMERO = "5491162540911";

const textoDe = (url: string) => new URL(url).searchParams.get("text");

describe("buildWhatsAppUrl", () => {
  it("arma el mensaje completo con el formato acordado", () => {
    const url = buildWhatsAppUrl(
      {
        marca: "Pañales Suaves",
        servicio: "Colaboración",
        presupuesto: "A convenir",
        fecha: "Noviembre",
        mensaje: "Queremos mostrar el nuevo pañal",
      },
      NUMERO,
    );

    expect(url.startsWith(`https://wa.me/${NUMERO}?text=`)).toBe(true);
    expect(textoDe(url)).toBe(
      [
        SALUDO,
        "🏷️ Marca: Pañales Suaves",
        "📦 Busco: Colaboración",
        "💰 Presupuesto: A convenir",
        "📅 Para: Noviembre",
        "📝 Queremos mostrar el nuevo pañal",
      ].join("\n"),
    );
  });

  it("omite las líneas de campos opcionales vacíos", () => {
    const texto = buildWhatsAppMessage({
      marca: "Marca",
      servicio: "Redes",
      presupuesto: "A convenir",
      fecha: "   ",
      mensaje: "",
    });

    expect(texto).not.toContain("📅 Para");
    expect(texto).not.toContain("📝");
    expect(texto.split("\n")).toHaveLength(4);
  });

  it("conserva acentos, emojis, & y saltos de línea", () => {
    const mensaje = "Café & té ☕️\nSegunda línea: ¿sí? 100% #promo";
    const url = buildWhatsAppUrl(
      { marca: "Dulce & Co.", servicio: "Producción de fotos", presupuesto: "A convenir", mensaje },
      NUMERO,
    );

    // El texto codificado no deja caracteres que corten la URL
    expect(url.split("?text=")[1]).not.toMatch(/[ \n#&?]/);
    expect(new URL(url).searchParams.size).toBe(1);
    expect(textoDe(url)).toContain("🏷️ Marca: Dulce & Co.");
    expect(textoDe(url)).toContain(`📝 ${mensaje}`);
  });
});

describe("whatsappUrl", () => {
  it("usa el saludo genérico por defecto", () => {
    expect(textoDe(whatsappUrl(NUMERO))).toBe(SALUDO);
  });
});
