"use client";

import type { ServicioSlug } from "@/content/servicios";
import { seleccionarServicio } from "@/lib/servicio-seleccionado";
import { botonClases } from "./Button";

type Props = {
  servicio: ServicioSlug;
  children: React.ReactNode;
  variante?: Parameters<typeof botonClases>[0];
  className?: string;
};

// Lleva al formulario con el servicio preseleccionado. Sin JS, el href hace lo mismo recargando.
export function ConsultarLink({ servicio, children, variante = "primario", className = "" }: Props) {
  return (
    <a
      href={`?servicio=${servicio}#contacto`}
      className={botonClases(variante, className)}
      onClick={(e) => {
        e.preventDefault();
        seleccionarServicio(servicio);
      }}
    >
      {children}
    </a>
  );
}
