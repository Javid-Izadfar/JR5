import { useQuery } from "@tanstack/react-query";
import { teamsService } from "@/services/teams.service";
import { queryKeys } from "@/services/queryKeys";

export function useTeam(id: string) {
  return useQuery({
    queryKey: queryKeys.teams.detail(id),
    queryFn: () => teamsService.getById(id),
    enabled: !!id,
  });
}
