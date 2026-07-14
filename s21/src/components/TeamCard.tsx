import { Link } from "react-router-dom";
import type { Team } from "@/types";
import { Heart } from "lucide-react";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  const { toggleFavoriteTeam, isFavoriteTeam } = useFavoriteStore();
  const isFav = isFavoriteTeam(team.id);

  return (
    <div className="group relative rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavoriteTeam(team.id);
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

      <Link to={`/teams/${team.id}`} className="flex flex-col items-center gap-3">
        <img
          src={team.flag}
          alt={`${team.name} flag`}
          className="h-16 w-24 rounded object-cover"
        />
        <div className="text-center">
          <h3 className="font-semibold">{team.name}</h3>
          <p className="text-sm text-muted-foreground">Group {team.group}</p>
          <p className="text-xs text-muted-foreground">FIFA #{team.fifaRanking}</p>
        </div>
      </Link>
    </div>
  );
}
