import { cn } from "@/utils";

interface PokemonBattleMetricProps {
  abbreviation: string;
  value: number;
  barClassName?: string;
}

export const PokemonBattleMetric: React.FC<PokemonBattleMetricProps> = ({ abbreviation, value, barClassName }) => (
  <div className="flex items-center justify-center gap-2">
    <div className={cn("h-1.5 flex-1 rounded-full", barClassName)} />
    <div className="flex w-16">
      <span>{abbreviation}:</span>
      <span>{value}</span>
    </div>
  </div>
);
