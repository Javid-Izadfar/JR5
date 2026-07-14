import { Trophy, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useTodayMatches } from "@/hooks/useTodayMatches";
import { useTeams } from "@/hooks/useTeams";
import { MatchCard } from "@/components/MatchCard";
import { TeamCard } from "@/components/TeamCard";
import { Loading } from "@/components/Loading";
import { ErrorState } from "@/components/ErrorState";

export function HomePage() {
  const { data: matches, isLoading: matchesLoading, error: matchesError, refetch: refetchMatches } = useTodayMatches();
  const { data: teams, isLoading: teamsLoading, error: teamsError, refetch: refetchTeams } = useTeams();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">World Cup Hub</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your central hub for everything World Cup
        </p>
      </section>

      <section className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">Today&apos;s Matches</h2>
        </div>
        {matchesLoading ? (
          <Loading />
        ) : matchesError ? (
          <ErrorState message="Failed to load matches" onRetry={refetchMatches} />
        ) : matches?.length === 0 ? (
          <p className="text-muted-foreground">No matches scheduled for today.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matches?.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">Teams</h2>
        </div>
        {teamsLoading ? (
          <Loading />
        ) : teamsError ? (
          <ErrorState message="Failed to load teams" onRetry={refetchTeams} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teams?.slice(0, 8).map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        )}
        {teams && teams.length > 8 && (
          <div className="mt-4 text-center">
            <Link to="/teams" className="text-sm text-primary hover:underline">
              View all teams →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
