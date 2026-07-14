import { useQuery } from "@tanstack/react-query";
import { teamsService } from "@/services/teams.service";
import { queryKeys } from "@/services/queryKeys";
import { TeamCard } from "@/components/TeamCard";
import { Loading } from "@/components/Loading";
import { ErrorState } from "@/components/ErrorState";
import { EmptyState } from "@/components/EmptyState";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

export function TeamsPage() {
  const [search, setSearch] = useState("");
  const { data: teams, isLoading, error, refetch } = useQuery({
    queryKey: queryKeys.teams.all,
    queryFn: teamsService.getAll,
  });

  const filtered = teams?.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase()) ||
    team.code.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Teams</h1>
      <SearchBar value={search} onChange={setSearch} placeholder="Search teams..." className="mb-6 max-w-sm" />

      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorState message="Failed to load teams" onRetry={refetch} />
      ) : filtered?.length === 0 ? (
        <EmptyState title="No teams found" description="Try a different search term." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered?.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      )}
    </div>
  );
}
