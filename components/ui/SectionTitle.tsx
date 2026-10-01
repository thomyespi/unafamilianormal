type Props = {
  numero: string;
  lineas: [string, string];
  intro?: string;
  id?: string;
};

// Título de sección: número, primera línea en black, segunda en thin y línea de acento.
export function SectionTitle({ numero, lineas, intro, id }: Props) {
  return (
    <header className="mb-10 md:mb-14">
      <p className="text-sm font-bold tracking-[0.2em] text-terracota-oscuro">{numero}</p>
      <h2 id={id} className="mt-2 text-4xl uppercase leading-[0.95] text-tinta sm:text-5xl md:text-6xl">
        <span className="block font-black tracking-tight">{lineas[0]}</span>
        <span className="block font-thin">{lineas[1]}</span>
      </h2>
      <div aria-hidden className="mt-6 h-1 w-24 rounded-full bg-rosado" />
      {intro && <p className="mt-6 max-w-2xl text-lg font-light text-tinta-suave">{intro}</p>}
    </header>
  );
}
