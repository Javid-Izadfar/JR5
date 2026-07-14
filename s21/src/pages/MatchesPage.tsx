import { useQuery } from "@tanstack/react-query";
import { matchesService } from "@/services/matches.service";
import { queryKeys } from "@/services/queryKeys";
import { MatchCard } from "@/components/MatchCard";
import { Loading } from "@/components/Loading";
import { ErrorState } from "@/components/ErrorState";
import { EmptyState } from "@/components/EmptyState";

export function MatchesPage() {
  const { data: matches, isLoading, error, refetch } = useQuery({
    queryKey: queryKeys.matches.all,
    queryFn: matchesService.getAll,
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Matches</h1>

      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorState message="Failed to load matches" onRetry={refetch} />
      ) : matches?.length === 0 ? (
        <EmptyState title="No matches" description="No matches have been scheduled yet." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {matches?.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  );
}
