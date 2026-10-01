import { useSyncExternalStore } from "react";
import { SERVICIOS, type ServicioSlug } from "@/content/servicios";

// El servicio elegido vive en la URL (?servicio=<slug>#contacto): así funciona como link directo
// desde Instagram y es la única fuente de verdad para las tarjetas y el formulario.

const EVENTO_SERVICIO = "unafamilia:servicio";

export function esServicio(valor: string | null): valor is ServicioSlug {
  return SERVICIOS.includes(valor as ServicioSlug);
}

export function servicioDeLaUrl(search: string): ServicioSlug | null {
  const valor = new URLSearchParams(search).get("servicio");
  return esServicio(valor) ? valor : null;
}

export function actualizarServicio(slug: ServicioSlug | null) {
  history.replaceState(null, "", slug ? `?servicio=${slug}#contacto` : "#contacto");
  window.dispatchEvent(new Event(EVENTO_SERVICIO));
}

export function seleccionarServicio(slug: ServicioSlug) {
  actualizarServicio(slug);
  document.getElementById("contacto")?.scrollIntoView();
}

function suscribir(avisar: () => void) {
  window.addEventListener(EVENTO_SERVICIO, avisar);
  window.addEventListener("popstate", avisar);
  return () => {
    window.removeEventListener(EVENTO_SERVICIO, avisar);
    window.removeEventListener("popstate", avisar);
  };
}

export function useServicioSeleccionado(): ServicioSlug | null {
  return useSyncExternalStore(
    suscribir,
    () => servicioDeLaUrl(window.location.search),
    () => null,
  );
}
