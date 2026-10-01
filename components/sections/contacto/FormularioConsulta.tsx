"use client";

import { useId, useState } from "react";
import { botonClases } from "@/components/ui/Button";
import type { ServicioSlug } from "@/content/servicios";
import { actualizarServicio, esServicio, useServicioSeleccionado } from "@/lib/servicio-seleccionado";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  whatsapp: string;
  servicios: { slug: ServicioSlug; titulo: string }[];
  presupuestos: string[];
};

const MAX_MENSAJE = 500;

type Campo = "marca" | "servicio" | "presupuesto";

const etiquetaClases = "text-xs font-medium uppercase tracking-[0.25em] text-tinta";
const campoClases =
  "mt-2 block min-h-11 w-full rounded-lg border bg-crema px-4 py-3 text-base text-tinta placeholder:text-tinta-suave/60 focus:outline-2 focus:outline-offset-1 focus:outline-terracota";

export function FormularioConsulta({ whatsapp, servicios, presupuestos }: Props) {
  const id = useId();
  const [marca, setMarca] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [intentoEnviar, setIntentoEnviar] = useState(false);
  // Preseleccionado desde las tarjetas o un link ?servicio=; el select también escribe en la URL.
  const servicio = useServicioSeleccionado() ?? "";

  const tituloServicio = servicios.find((s) => s.slug === servicio)?.titulo ?? "";
  const url = buildWhatsAppUrl({ marca, servicio: tituloServicio, presupuesto, fecha, mensaje }, whatsapp);

  const faltantes: Campo[] = [
    ...(marca.trim() ? [] : (["marca"] as const)),
    ...(servicio ? [] : (["servicio"] as const)),
    ...(presupuesto ? [] : (["presupuesto"] as const)),
  ];

  // El error se muestra tras intentar enviar y desaparece apenas se completa el campo.
  const error = (campo: Campo) => intentoEnviar && faltantes.includes(campo);
  const errorId = (campo: Campo) => `${id}-${campo}-error`;
  const bordeDe = (campo: Campo) => (error(campo) ? "border-red-700" : "border-nude");

  return (
    <form
      noValidate
      onSubmit={(e) => e.preventDefault()}
      className="rounded-2xl bg-crema/80 p-6 shadow-[0_30px_60px_-40px_rgb(47_37_34/0.5)] sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-marca`} className={etiquetaClases}>
            Nombre o marca *
          </label>
          <input
            id={`${id}-marca`}
            type="text"
            autoComplete="organization"
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
            }}
            aria-invalid={error("marca")}
            aria-describedby={error("marca") ? errorId("marca") : undefined}
            placeholder="Ej: Pañales Suaves"
            className={`${campoClases} ${bordeDe("marca")}`}
          />
          {error("marca") && (
            <p id={errorId("marca")} className="mt-1 text-sm text-red-700">
              Contanos quién nos escribe.
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-servicio`} className={etiquetaClases}>
            ¿Qué buscás? *
          </label>
          <select
            id={`${id}-servicio`}
            value={servicio}
            onChange={(e) => {
              actualizarServicio(esServicio(e.target.value) ? e.target.value : null);
            }}
            aria-invalid={error("servicio")}
            aria-describedby={error("servicio") ? errorId("servicio") : undefined}
            className={`${campoClases} ${bordeDe("servicio")}`}
          >
            <option value="">Elegí un servicio</option>
            {servicios.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.titulo}
              </option>
            ))}
          </select>
          {error("servicio") && (
            <p id={errorId("servicio")} className="mt-1 text-sm text-red-700">
              Elegí un servicio.
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-presupuesto`} className={etiquetaClases}>
            Presupuesto *
          </label>
          <select
            id={`${id}-presupuesto`}
            value={presupuesto}
            onChange={(e) => {
              setPresupuesto(e.target.value);
            }}
            aria-invalid={error("presupuesto")}
            aria-describedby={error("presupuesto") ? errorId("presupuesto") : undefined}
            className={`${campoClases} ${bordeDe("presupuesto")}`}
          >
            <option value="">Elegí un rango</option>
            {presupuestos.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {error("presupuesto") && (
            <p id={errorId("presupuesto")} className="mt-1 text-sm text-red-700">
              Elegí un rango aproximado, o &quot;A convenir&quot;.
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-fecha`} className={etiquetaClases}>
            ¿Para cuándo? <span className="normal-case tracking-normal text-tinta-suave">(opcional)</span>
          </label>
          <input
            id={`${id}-fecha`}
            type="text"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            placeholder="Ej: noviembre, para el Día de la Madre"
            className={`${campoClases} border-nude`}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-mensaje`} className={etiquetaClases}>
            Mensaje <span className="normal-case tracking-normal text-tinta-suave">(opcional)</span>
          </label>
          <textarea
            id={`${id}-mensaje`}
            rows={4}
            maxLength={MAX_MENSAJE}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            aria-describedby={`${id}-contador`}
            placeholder="Contanos un poco de tu marca y qué te imaginás"
            className={`${campoClases} resize-y border-nude`}
          />
          <p id={`${id}-contador`} className="mt-1 text-right text-xs text-tinta-suave">
            {mensaje.length}/{MAX_MENSAJE}
          </p>
        </div>
      </div>

      {/* Link real (no window.open): el navegador interno de Instagram bloquea popups. */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          if (faltantes.length === 0) return;
          e.preventDefault();
          setIntentoEnviar(true);
          document.getElementById(`${id}-${faltantes[0]}`)?.focus();
        }}
        className={botonClases("primario", "mt-8 w-full")}
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3Z" />
        </svg>
        Enviar por WhatsApp
      </a>
      <p className="mt-3 text-center text-xs text-tinta-suave">
        Se abre WhatsApp con tu consulta armada. Solo tenés que tocar enviar.
      </p>
    </form>
  );
}
