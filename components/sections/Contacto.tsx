import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import { FormularioConsulta } from "./contacto/FormularioConsulta";

export function Contacto() {
  const { contacto, servicios, presupuestos, textos } = site;

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="fondo-portada scroll-mt-4">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-terracota-oscuro">07</p>
          <Eyebrow className="mt-4">Último paso</Eyebrow>
          <h2 id="contacto-titulo" className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">{textos.contactoTitulo[0]}</span>
            <span className="block text-terracota-oscuro">{textos.contactoTitulo[1]}</span>
          </h2>
          <p className="mt-6 max-w-md text-lg font-light text-tinta-suave">{textos.contactoBajada}</p>
        </div>

        <FormularioConsulta
          whatsapp={contacto.whatsapp}
          servicios={servicios.map(({ slug, titulo }) => ({ slug, titulo }))}
          presupuestos={presupuestos}
        />
      </div>
    </section>
  );
}
