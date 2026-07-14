import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { matchesService } from "@/services/matches.service";
import { queryKeys } from "@/services/queryKeys";
import { Loading } from "@/components/Loading";
import { ErrorState } from "@/components/ErrorState";
import { ArrowLeft } from "lucide-react";

export function MatchDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: match, isLoading, error, refetch } = useQuery({
    queryKey: queryKeys.matches.detail(id!),
    queryFn: () => matchesService.getById(id!),
    enabled: !!id,
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorState message="Failed to load match" onRetry={refetch} />;
  if (!match) return null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link to="/matches" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" />
        Back to matches
      </Link>

      <h1 className="mb-2 text-3xl font-bold">Match Details</h1>
      <p className="text-muted-foreground">{match.stadium} &middot; {match.city}</p>

      <div className="mt-8 rounded-lg border p-8 text-center">
        <p className="text-sm text-muted-foreground">Stage: {match.stage}</p>
        <div className="mt-4 flex items-center justify-center gap-8">
          <div>
            <p className="text-2xl font-bold">{match.homeTeamId}</p>
            <p className="text-sm text-muted-foreground">Home</p>
          </div>
          <div className="text-4xl font-bold">
            {match.homeScore} - {match.awayScore}
          </div>
          <div>
            <p className="text-2xl font-bold">{match.awayTeamId}</p>
            <p className="text-sm text-muted-foreground">Away</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Status: {match.status}</p>
      </div>
    </div>
  );
}
