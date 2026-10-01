import { Contacto } from "@/components/sections/Contacto";
import { Familia } from "@/components/sections/Familia";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marcas } from "@/components/sections/Marcas";
import { Numeros } from "@/components/sections/Numeros";
import { Producciones } from "@/components/sections/Producciones";
import { QuienSoy } from "@/components/sections/QuienSoy";
import { Servicios } from "@/components/sections/Servicios";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Numeros />
        <QuienSoy />
        <Familia />
        <Marcas />
        <Producciones />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
