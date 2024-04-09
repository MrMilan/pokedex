import { cn } from "@/utils";

export interface PokemonDetailCardProps {
  title: string;
  min: string;
  max: string;
  className?: string;
}

export const PokemonDimensions: React.FC<PokemonDetailCardProps> = ({ title, min, max, className }) => {
  const values = [min, max].reduce((acc, val, index) => (acc += `${index === 1 ? " - " : ""}${val}`), "");

  return (
    <div className={cn("flex flex-col items-center justify-center gap-2 p-2", className)}>
      <span className="font-bold">{title}</span>
      <span>{values}</span>
    </div>
  );
};
