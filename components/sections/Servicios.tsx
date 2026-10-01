import { Card, CardDark } from "@/components/ui/Card";
import { ConsultarLink } from "@/components/ui/ConsultarLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/content/site";

type Servicio = (typeof site.servicios)[number];

function Incluye({ items, oscuro }: { items: string[]; oscuro?: boolean }) {
  return (
    <ul className="mt-5 space-y-2 text-sm">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className={oscuro ? "text-nude" : "text-terracota"}>
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TarjetaServicio({ servicio }: { servicio: Servicio }) {
  const { alianza } = site;

  if (servicio.destacado) {
    return (
      <CardDark className="flex h-full flex-col">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-crema">Paquete completo</p>
        <h3 className="mt-3 text-2xl font-black uppercase tracking-tight">{servicio.titulo}</h3>
        <p className="mt-1 font-thin uppercase tracking-wide">{servicio.bajada}</p>
        <p className="mt-4 text-sm font-light leading-relaxed text-crema">{servicio.descripcion}</p>
        <Incluye items={servicio.incluye} oscuro />
        <div className="mt-6 rounded-lg bg-crema/10 p-4 text-sm">
          <p>
            Web en alianza con{" "}
            <a
              href={alianza.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4 hover:text-nude"
            >
              {alianza.nombre}
            </a>
          </p>
          <p className="mt-1 font-light text-crema">{alianza.frase}</p>
        </div>
        <div className="mt-auto pt-6">
          <ConsultarLink servicio={servicio.slug} variante="claro" className="w-full">
            Consultar
          </ConsultarLink>
        </div>
      </CardDark>
    );
  }

  return (
    <Card className="flex h-full flex-col">
      <h3 className="text-2xl font-black uppercase tracking-tight">{servicio.titulo}</h3>
      <p className="mt-1 font-thin uppercase tracking-wide">{servicio.bajada}</p>
      <p className="mt-4 text-sm font-light leading-relaxed text-tinta-suave">{servicio.descripcion}</p>
      <Incluye items={servicio.incluye} />
      <div className="mt-auto flex flex-col gap-3 pt-6">
        {servicio.slug === "produccion-fotos" && (
          <a href="#producciones" className="text-center text-sm font-medium text-cacao underline-offset-4 hover:underline">
            Ver producciones →
          </a>
        )}
        <ConsultarLink servicio={servicio.slug} className="w-full">
          Consultar
        </ConsultarLink>
      </div>
    </Card>
  );
}

function ComoTrabajo() {
  const { comoTrabajo } = site;

  return (
    <div className="mt-20 md:mt-28">
      <Eyebrow as="h3">Cómo trabajo</Eyebrow>
      <p className="mt-4 max-w-2xl text-2xl font-light text-tinta">{comoTrabajo.intro}</p>

      <ol className="mt-10 divide-y divide-nude border-y border-nude">
        {comoTrabajo.pasos.map((paso, i) => (
          <li key={paso.titulo} className="flex gap-5 py-6">
            <span
              aria-hidden
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cacao text-sm font-bold text-crema"
            >
              {i + 1}
            </span>
            <div>
              <p className="font-bold uppercase tracking-wide text-tinta">{paso.titulo}</p>
              <p className="mt-1 text-sm leading-relaxed text-tinta-suave">{paso.descripcion}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {comoTrabajo.compromisos.map((c) => (
          <Card key={c.titulo}>
            <p className="font-bold uppercase tracking-wide text-tinta">{c.titulo}</p>
            <p className="mt-2 text-sm leading-relaxed text-tinta-suave">{c.descripcion}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function Servicios() {
  const { servicios, textos } = site;

  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="bg-nude-claro/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <SectionTitle id="servicios-titulo" numero="06" lineas={["Servicios", "a tu medida"]} intro={textos.serviciosIntro} />

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s) => (
            <li key={s.slug}>
              <TarjetaServicio servicio={s} />
            </li>
          ))}
        </ul>

        <ComoTrabajo />
      </div>
    </section>
  );
}
