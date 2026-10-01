import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/content/site";

export function Familia() {
  const { familia, textos } = site;

  return (
    <section id="familia" aria-labelledby="familia-titulo" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionTitle id="familia-titulo" numero="03" lineas={["Conocé a", "la familia"]} intro={textos.familiaIntro} />

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {familia.map((integrante) => (
          <li key={integrante.nombre} className="group">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-nude">
              <Image
                src={integrante.imagen.src}
                alt={integrante.imagen.alt}
                fill
                sizes="(min-width: 1024px) 14rem, (min-width: 640px) 50vw, 100vw"
                className="foto-calida object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <Eyebrow className="mt-4">{integrante.rol}</Eyebrow>
            <h3 className="mt-1 text-2xl font-black uppercase tracking-tight">{integrante.nombre}</h3>
            <p className="mt-2 text-sm leading-relaxed text-tinta-suave">{integrante.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
