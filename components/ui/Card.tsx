type Props = {
  children: React.ReactNode;
  className?: string;
};

// Tarjeta clara con borde izquierdo terracota.
export function Card({ children, className = "" }: Props) {
  return (
    <div className={`rounded-xl border-l-[3px] border-rosado bg-nude-claro p-6 ${className}`}>{children}</div>
  );
}

// Tarjeta oscura en cacao, para destacar.
export function CardDark({ children, className = "" }: Props) {
  return <div className={`rounded-xl bg-cacao p-6 text-crema ${className}`}>{children}</div>;
}
