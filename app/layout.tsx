import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const titulo = "unafamilianormal_ · Colaboraciones, fotos y redes";
const descripcion =
  "Familia, humor y lifestyle desde Buenos Aires. Colaboraciones con marcas, producción de fotos, gestión de redes y paquetes llave en mano.";

export const metadata: Metadata = {
  metadataBase: new URL("https://unafamilianormal.com"),
  title: titulo,
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "/",
    siteName: "unafamilianormal_",
    locale: "es_AR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: titulo, description: descripcion },
};

export const viewport: Viewport = {
  themeColor: "#e9d5ca",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${roboto.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
