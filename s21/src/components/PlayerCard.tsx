import { Link } from "react-router-dom";
import type { Player } from "@/types";
import { Heart } from "lucide-react";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { cn } from "@/lib/utils";
import { POSITION_LABELS } from "@/constants";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const { toggleFavoritePlayer, isFavoritePlayer } = useFavoriteStore();
  const isFav = isFavoritePlayer(player.id);

  return (
    <div className="group relative rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavoritePlayer(player.id);
        }}
        className="absolute right-3 top-3"
        aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          className={cn(
            "h-5 w-5 transition-colors",
            isFav ? "fill-red-500 text-red-500" : "text-muted-foreground hover:text-red-500",
          )}
        />
      </button>

      <Link to={`/players/${player.id}`} className="flex flex-col items-center gap-3">
        <img
          src={player.photo}
          alt={player.fullName}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div className="text-center">
          <p className="text-xs text-muted-foreground">#{player.number}</p>
          <h3 className="font-semibold">{player.fullName}</h3>
          <span className="rounded bg-muted px-1.5 py-0.5 text-xs font-medium">
            {POSITION_LABELS[player.position] ?? player.position}
          </span>
        </div>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>{player.goals} G</span>
          <span>{player.assists} A</span>
        </div>
      </Link>
    </div>
  );
}
