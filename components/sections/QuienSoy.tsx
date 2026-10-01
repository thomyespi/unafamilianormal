import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/content/site";

export function QuienSoy() {
  const { perfil } = site;

  return (
    <section id="quien-soy" aria-labelledby="quien-soy-titulo" className="bg-nude-claro/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <SectionTitle id="quien-soy-titulo" numero="02" lineas={["Quién", "soy"]} />

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src={perfil.retrato.src}
              alt={perfil.retrato.alt}
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
              className="foto-calida object-cover"
            />
          </div>

          <div>
            <p className="text-2xl font-bold text-tinta">{perfil.nombre}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {perfil.roles.map((rol) => (
                <li
                  key={rol}
                  className="rounded-full border border-rosado px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-terracota-oscuro"
                >
                  {rol}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-4 text-lg font-light leading-relaxed text-tinta-suave">
              {perfil.texto.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <blockquote className="mt-8 border-l-[3px] border-terracota pl-5 text-2xl font-light text-tinta">
              {perfil.frase}
            </blockquote>

            <Eyebrow as="h3" className="mt-10">
              Formación
            </Eyebrow>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {perfil.formacion.map((f) => (
                <Card key={f.titulo}>
                  <p className="font-bold uppercase tracking-wide text-tinta">{f.titulo}</p>
                  <p className="mt-1 text-sm text-tinta-suave">{f.institucion}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
