import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

const enlaceClases = "text-crema/80 underline-offset-4 hover:text-crema hover:underline";

export function Footer() {
  const { redes, contacto, alianza, marca } = site;

  return (
    <footer className="bg-tinta text-crema">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl uppercase leading-none">
            <span className="font-black">Una familia</span> <span className="font-thin">normal</span>
          </p>
          <p className="mt-3 text-sm font-light text-crema/70">{marca.tagline}</p>
        </div>

        <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
          <li>
            <a href={redes.instagram.url} target="_blank" rel="noopener noreferrer" className={enlaceClases}>
              Instagram
            </a>
          </li>
          <li>
            <a href={redes.tiktok.url} target="_blank" rel="noopener noreferrer" className={enlaceClases}>
              TikTok
            </a>
          </li>
          <li>
            <a href={whatsappUrl(contacto.whatsapp)} target="_blank" rel="noopener noreferrer" className={enlaceClases}>
              WhatsApp
            </a>
          </li>
          <li>
            <a href={`mailto:${contacto.email}`} className={enlaceClases}>
              {contacto.email}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-crema/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs tracking-[0.15em] text-crema/60 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} unafamilianormal_</p>
          <p>
            Web por{" "}
            <a href={alianza.url} target="_blank" rel="noopener noreferrer" className={enlaceClases}>
              {alianza.nombre}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
