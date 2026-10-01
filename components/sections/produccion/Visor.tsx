"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Foto } from "./Galeria";

type Props = {
  fotos: Foto[];
  indice: number;
  onCambiar: (indice: number) => void;
  onCerrar: () => void;
};

const UMBRAL_SWIPE = 50;

// Visor a pantalla completa con <dialog> nativo: Escape cierra, flechas navegan, swipe en celular.
export default function Visor({ fotos, indice, onCambiar, onCerrar }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const toqueInicio = useRef<number | null>(null);
  const foto = fotos[indice];

  const anterior = () => onCambiar((indice - 1 + fotos.length) % fotos.length);
  const siguiente = () => onCambiar((indice + 1) % fotos.length);

  // Sin cleanup: al desmontarse, el dialog sale solo de la capa superior. Cerrarlo acá
  // dispararía onClose y, en StrictMode, cerraría el visor apenas se abre.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={`Foto ${indice + 1} de ${fotos.length}`}
      onClose={onCerrar}
      onClick={(e) => {
        if (e.target === e.currentTarget) dialogRef.current?.close();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") anterior();
        if (e.key === "ArrowRight") siguiente();
      }}
      onTouchStart={(e) => (toqueInicio.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (toqueInicio.current === null) return;
        const dx = e.changedTouches[0].clientX - toqueInicio.current;
        toqueInicio.current = null;
        if (dx > UMBRAL_SWIPE) anterior();
        if (dx < -UMBRAL_SWIPE) siguiente();
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-tinta/90"
    >
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-4 p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className="relative h-[75dvh] w-full max-w-5xl">
          <Image src={foto.imagen.src} alt={foto.imagen.alt} fill sizes="100vw" className="object-contain" />
        </div>
        {foto.descripcion && <p className="text-sm text-crema">{foto.descripcion}</p>}
        <p className="text-xs tracking-[0.3em] text-nude">
          {indice + 1} / {fotos.length}
        </p>
      </div>

      <button
        type="button"
        onClick={() => dialogRef.current?.close()}
        aria-label="Cerrar"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-crema/15 text-2xl text-crema hover:bg-crema/30"
      >
        ×
      </button>
      <button
        type="button"
        onClick={anterior}
        aria-label="Foto anterior"
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-crema/15 text-2xl text-crema hover:bg-crema/30 sm:left-6"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={siguiente}
        aria-label="Foto siguiente"
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-crema/15 text-2xl text-crema hover:bg-crema/30 sm:right-6"
      >
        ›
      </button>
    </dialog>
  );
}
