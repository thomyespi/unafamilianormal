"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

export type Foto = {
  imagen: { src: string; alt: string };
  descripcion?: string;
};

// El visor se descarga recién al primer clic, para no sumar JS a la carga inicial.
const Visor = dynamic(() => import("./Visor"), { ssr: false });

export function Galeria({ fotos }: { fotos: Foto[] }) {
  const [abierta, setAbierta] = useState<number | null>(null);

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
        {fotos.map((foto, i) => (
          <li key={foto.imagen.src}>
            <button
              type="button"
              onClick={() => setAbierta(i)}
              aria-label={`Ampliar: ${foto.imagen.alt}`}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-xl bg-nude focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota"
            >
              <Image
                src={foto.imagen.src}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="foto-calida object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {abierta !== null && (
        <Visor fotos={fotos} indice={abierta} onCambiar={setAbierta} onCerrar={() => setAbierta(null)} />
      )}
    </>
  );
}
