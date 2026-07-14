import { useQuery } from "@tanstack/react-query";
import { teamsService } from "@/services/teams.service";
import { queryKeys } from "@/services/queryKeys";

export function useTeams() {
  return useQuery({
    queryKey: queryKeys.teams.all,
    queryFn: teamsService.getAll,
  });
}
