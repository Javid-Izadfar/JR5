import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { playersService } from "@/services/players.service";
import { queryKeys } from "@/services/queryKeys";
import { Loading } from "@/components/Loading";
import { ErrorState } from "@/components/ErrorState";
import { ArrowLeft, Heart } from "lucide-react";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { cn } from "@/lib/utils";
import { POSITION_LABELS } from "@/constants";

export function PlayerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { toggleFavoritePlayer, isFavoritePlayer } = useFavoriteStore();

  const { data: player, isLoading, error, refetch } = useQuery({
    queryKey: queryKeys.players.detail(id!),
    queryFn: () => playersService.getById(id!),
    enabled: !!id,
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorState message="Failed to load player" onRetry={refetch} />;
  if (!player) return null;

  const isFav = isFavoritePlayer(player.id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link to="/teams" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="flex items-start gap-6">
        <img src={player.photo} alt={player.fullName} className="h-28 w-28 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{player.fullName}</h1>
            <button onClick={() => toggleFavoritePlayer(player.id)} aria-label="Toggle favorite">
              <Heart className={cn("h-6 w-6", isFav ? "fill-red-500 text-red-500" : "text-muted-foreground")} />
            </button>
          </div>
          <p className="mt-1 text-muted-foreground">
            #{player.number} &middot; {POSITION_LABELS[player.position] ?? player.position}
          </p>
          <p className="text-sm text-muted-foreground">Age: {player.age}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Goals", value: player.goals },
          { label: "Assists", value: player.assists },
          { label: "Yellow Cards", value: player.yellowCards },
          { label: "Red Cards", value: player.redCards },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border p-4 text-center">
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
