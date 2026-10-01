type Variante = "primario" | "secundario" | "claro";

const estilos: Record<Variante, string> = {
  primario: "bg-cacao text-crema hover:bg-tinta",
  secundario: "border border-cacao text-cacao hover:bg-cacao hover:text-crema",
  claro: "bg-crema text-tinta hover:bg-nude-claro",
};

export function botonClases(variante: Variante = "primario", className = "") {
  return `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota ${estilos[variante]} ${className}`;
}

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { variante?: Variante };

export function ButtonLink({ variante = "primario", className = "", ...props }: Props) {
  return <a className={botonClases(variante, className)} {...props} />;
}
