import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export function Hero() {
  const { marca, textos, redes } = site;

  return (
    <section id="inicio" className="fondo-portada">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-8 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-24 md:pt-10">
        <div className="md:col-span-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.3em] text-tinta">
          <span>
            Una familia <span className="text-terracota-oscuro">/</span> normal
          </span>
          <a href={redes.instagram.url} target="_blank" rel="noopener noreferrer" className="font-normal tracking-[0.15em] text-tinta-suave hover:text-tinta">
            {redes.instagram.handle}
          </a>
        </div>

        <div>
          <Eyebrow>Creadores de contenido · {marca.ubicacion}</Eyebrow>
          <h1 className="mt-5 text-5xl uppercase leading-[0.9] text-tinta sm:text-6xl lg:text-7xl">
            <span className="block font-black tracking-tight">Una familia</span>
            <span className="block font-thin">normal...</span>
            <span className="mt-1 block font-black tracking-tight text-terracota-oscuro">más o menos ✨</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium uppercase tracking-[0.2em] text-tinta-suave">
            {marca.pilares.map((pilar, i) => (
              <span key={pilar} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-rosado">•</span>}
                {pilar}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-tinta-suave">{textos.heroBajada}</p>

          {marca.verificada && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-crema/70 px-4 py-2 text-sm text-tinta">
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-[#0095f6]">
                <path d="M12 1.5l2.6 1.9 3.2-.1 1 3 2.6 1.9-1 3 1 3-2.6 1.9-1 3-3.2-.1L12 22.5l-2.6-1.9-3.2.1-1-3-2.6-1.9 1-3-1-3 2.6-1.9 1-3 3.2.1z" />
                <path d="M10.5 15.6l-3.1-3.1 1.4-1.4 1.7 1.7 4.7-4.7 1.4 1.4z" className="fill-white" />
              </svg>
              Cuenta verificada en Instagram
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contacto">Contratanos</ButtonLink>
            <ButtonLink href="#numeros" variante="secundario">
              Ver números
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgb(47_37_34/0.45)]">
          <Image
            src={marca.heroImagen.src}
            alt={marca.heroImagen.alt}
            fill
            preload
            sizes="(min-width: 768px) 28rem, 100vw"
            className="foto-calida object-cover"
          />
        </div>
      </div>
    </section>
  );
}
