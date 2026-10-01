import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Stat } from "@/components/ui/Stat";
import { site } from "@/content/site";
import { mesYAnio, numeroCompacto } from "@/lib/formato";

function Barras({ titulo, datos }: { titulo: string; datos: { label: string; porcentaje: number }[] }) {
  return (
    <Card>
      <Eyebrow as="h3">{titulo}</Eyebrow>
      <ul className="mt-5 space-y-4">
        {datos.map((d) => (
          <li key={d.label}>
            <div className="flex justify-between text-sm">
              <span>{d.label}</span>
              <span className="font-bold">{d.porcentaje}%</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-nude" aria-hidden>
              <div className="h-2 rounded-full bg-cacao" style={{ width: `${d.porcentaje}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function Numeros() {
  const { stats, publico, textos } = site;
  const comunidad = stats.instagramSeguidores + stats.tiktokSeguidores;

  return (
    <section id="numeros" aria-labelledby="numeros-titulo" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionTitle id="numeros-titulo" numero="01" lineas={["Números", "que hablan"]} intro={textos.numerosIntro} />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <Stat valor={numeroCompacto(stats.instagramSeguidores)} label="Instagram" detalle="Cuenta verificada" />
        <Stat valor={numeroCompacto(stats.tiktokSeguidores)} label="TikTok" />
        <Stat valor={numeroCompacto(stats.tiktokMeGusta)} label="Me gusta en TikTok" />
        <Stat valor={`+${numeroCompacto(comunidad)}`} label="Comunidad total" />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <Barras titulo="Público" datos={publico.genero} />
        <Barras titulo="Edades" datos={publico.edades} />
        <div className="flex flex-col gap-4">
          <div className="rounded-xl bg-cacao p-6 text-crema">
            <p className="text-4xl font-black">{stats.interaccion.valor}</p>
            <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.25em]">{stats.interaccion.label}</p>
          </div>
          <Card className="flex-1">
            <Eyebrow as="h3">Desde dónde nos ven</Eyebrow>
            <ul className="mt-4 flex flex-wrap gap-2">
              {publico.ubicaciones.map((u) => (
                <li key={u} className="rounded-full bg-crema px-3 py-1 text-sm">
                  {u}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <p className="mt-6 text-sm text-tinta-suave">
        Datos actualizados a <time dateTime={stats.actualizado}>{mesYAnio(stats.actualizado)}</time>.
      </p>
    </section>
  );
}
