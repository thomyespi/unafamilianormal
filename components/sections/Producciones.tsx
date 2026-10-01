import { ConsultarLink } from "@/components/ui/ConsultarLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/content/site";
import { Galeria } from "./produccion/Galeria";

export function Producciones() {
  const { producciones, textos } = site;

  return (
    <section
      id="producciones"
      aria-labelledby="producciones-titulo"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28"
    >
      <SectionTitle
        id="producciones-titulo"
        numero="05"
        lineas={["Producciones", "de fotos"]}
        intro={textos.produccionesIntro}
      />

      <Galeria fotos={producciones} />

      <div className="mt-10 flex justify-center">
        <ConsultarLink servicio="produccion-fotos">Quiero una producción</ConsultarLink>
      </div>
    </section>
  );
}
