import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/content/site";

type Collab = (typeof site.collabs)[number];

function CollabContenido({ collab }: { collab: Collab }) {
  return (
    <>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-nude">
        <Image
          src={collab.imagen.src}
          alt={collab.imagen.alt}
          fill
          sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
          className="foto-calida object-cover"
        />
      </div>
      <Eyebrow className="mt-4">{collab.marca}</Eyebrow>
      <p className="mt-2 text-sm leading-relaxed text-tinta-suave">{collab.descripcion}</p>
      {collab.url && (
        <p className="mt-3 text-sm font-medium text-cacao underline-offset-4 group-hover:underline">Ver publicación →</p>
      )}
    </>
  );
}

export function Marcas() {
  const { marcas, collabs, textos } = site;

  return (
    <section id="marcas" aria-labelledby="marcas-titulo" className="bg-nude-claro/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <SectionTitle id="marcas-titulo" numero="04" lineas={["Marcas que", "confiaron"]} intro={textos.marcasIntro} />

        {marcas.length > 0 && (
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {marcas.map((m) => (
              <li key={m.nombre} className="relative aspect-[3/2] overflow-hidden rounded-xl bg-crema">
                <Image src={m.logo.src} alt={m.logo.alt} fill sizes="12rem" className="object-contain p-4 grayscale" />
              </li>
            ))}
          </ul>
        )}

        <Eyebrow as="h3" className="mb-6 mt-14">
          Collabs destacadas
        </Eyebrow>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collabs.map((collab) => (
            <li key={collab.marca}>
              {collab.url ? (
                <a href={collab.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <CollabContenido collab={collab} />
                </a>
              ) : (
                <CollabContenido collab={collab} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
