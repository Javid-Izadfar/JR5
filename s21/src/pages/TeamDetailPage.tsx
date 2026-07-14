import { useParams, Link } from "react-router-dom";
import { useTeam } from "@/hooks/useTeam";
import { Loading } from "@/components/Loading";
import { ErrorState } from "@/components/ErrorState";
import { ArrowLeft, Heart } from "lucide-react";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { cn } from "@/lib/utils";

export function TeamDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: team, isLoading, error, refetch } = useTeam(id!);
  const { toggleFavoriteTeam, isFavoriteTeam } = useFavoriteStore();
  const isFav = team ? isFavoriteTeam(team.id) : false;

  if (isLoading) return <Loading />;
  if (error) return <ErrorState message="Failed to load team" onRetry={refetch} />;
  if (!team) return null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link to="/teams" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" />
        Back to teams
      </Link>

      <div className="flex items-start gap-6">
        <img src={team.flag} alt={`${team.name} flag`} className="h-24 w-36 rounded object-cover" />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{team.name}</h1>
            <button onClick={() => toggleFavoriteTeam(team.id)} aria-label="Toggle favorite">
              <Heart className={cn("h-6 w-6", isFav ? "fill-red-500 text-red-500" : "text-muted-foreground")} />
            </button>
          </div>
          <p className="mt-1 text-muted-foreground">Group {team.group} &middot; FIFA #{team.fifaRanking}</p>
          <p className="text-sm text-muted-foreground">Confederation: {team.confederation}</p>
          <p className="text-sm text-muted-foreground">Coach: {team.coach.fullName}</p>
          <p className="text-sm text-muted-foreground">Founded: {team.founded}</p>
        </div>
      </div>
    </div>
  );
}
