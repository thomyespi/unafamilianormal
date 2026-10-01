type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "h3";
};

// Etiqueta chica en mayúsculas con mucho espaciado, como en las propuestas.
export function Eyebrow({ children, className = "", as: Tag = "p" }: Props) {
  return (
    <Tag className={`text-xs font-medium uppercase tracking-[0.3em] text-terracota-oscuro ${className}`}>
      {children}
    </Tag>
  );
}
