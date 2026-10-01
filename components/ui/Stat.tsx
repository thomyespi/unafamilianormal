type Props = {
  valor: string;
  label: string;
  detalle?: string;
};

// Número grande en black + etiqueta espaciada.
export function Stat({ valor, label, detalle }: Props) {
  return (
    <div className="rounded-xl bg-nude-claro px-4 py-6 text-center">
      <p className="text-3xl font-black text-tinta sm:text-4xl">{valor}</p>
      <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-tinta-suave">{label}</p>
      {detalle && <p className="mt-1 text-xs text-terracota-oscuro">{detalle}</p>}
    </div>
  );
}
