import { useQuery } from "@tanstack/react-query";
import { standingsService } from "@/services/standings.service";
import { queryKeys } from "@/services/queryKeys";
import { Loading } from "@/components/Loading";
import { ErrorState } from "@/components/ErrorState";
import { EmptyState } from "@/components/EmptyState";
import { Link } from "react-router-dom";

export function StandingsPage() {
  const { data: standings, isLoading, error, refetch } = useQuery({
    queryKey: queryKeys.standings.all,
    queryFn: standingsService.getAll,
  });

  const grouped = standings?.reduce<Record<string, typeof standings>>((acc, s) => {
    (acc[s.group] ??= []).push(s);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Standings</h1>

      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorState message="Failed to load standings" onRetry={refetch} />
      ) : !grouped || Object.keys(grouped).length === 0 ? (
        <EmptyState title="No standings" description="Standings will appear once matches are played." />
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([group, teams]) => (
            <div key={group}>
              <h2 className="mb-3 text-xl font-semibold">Group {group}</h2>
              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-2 text-left">Team</th>
                      <th className="px-4 py-2 text-center">P</th>
                      <th className="px-4 py-2 text-center">W</th>
                      <th className="px-4 py-2 text-center">D</th>
                      <th className="px-4 py-2 text-center">L</th>
                      <th className="px-4 py-2 text-center">GF</th>
                      <th className="px-4 py-2 text-center">GA</th>
                      <th className="px-4 py-2 text-center">GD</th>
                      <th className="px-4 py-2 text-center font-bold">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((s) => (
                      <tr key={s.teamId} className="border-t">
                        <td className="px-4 py-2">
                          <Link to={`/teams/${s.teamId}`} className="font-medium hover:text-primary">
                            {s.teamId}
                          </Link>
                        </td>
                        <td className="px-4 py-2 text-center">{s.played}</td>
                        <td className="px-4 py-2 text-center">{s.won}</td>
                        <td className="px-4 py-2 text-center">{s.drawn}</td>
                        <td className="px-4 py-2 text-center">{s.lost}</td>
                        <td className="px-4 py-2 text-center">{s.goalsFor}</td>
                        <td className="px-4 py-2 text-center">{s.goalsAgainst}</td>
                        <td className="px-4 py-2 text-center">{s.goalDifference}</td>
                        <td className="px-4 py-2 text-center font-bold">{s.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
