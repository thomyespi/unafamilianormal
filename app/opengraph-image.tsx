import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "unafamilianormal_ · Una familia normal... más o menos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fuente = (peso: number) =>
  readFile(join(process.cwd(), `node_modules/@fontsource/roboto/files/roboto-latin-${peso}-normal.woff`));

// Vista previa al compartir el link: misma portada que las propuestas (nude, black + thin).
export default async function Image() {
  const [thin, regular, black] = await Promise.all([fuente(100), fuente(400), fuente(900)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: "linear-gradient(160deg, #f0e2d8 0%, #e2c9bb 100%)",
          color: "#2f2522",
          fontFamily: "Roboto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 8 }}>
          <span>UNA FAMILIA / NORMAL</span>
          <span style={{ color: "#8a5f49" }}>@unafamilianormal_</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontSize: 112, fontWeight: 900 }}>UNA FAMILIA</span>
          <span style={{ fontSize: 112, fontWeight: 100 }}>NORMAL...</span>
          <span style={{ fontSize: 112, fontWeight: 900, color: "#a97b63" }}>MÁS O MENOS</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#5e4f4a" }}>
          COLABORACIONES · FOTOS · REDES · LLAVE EN MANO
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Roboto", data: thin, weight: 100, style: "normal" },
        { name: "Roboto", data: regular, weight: 400, style: "normal" },
        { name: "Roboto", data: black, weight: 900, style: "normal" },
      ],
    },
  );
}
