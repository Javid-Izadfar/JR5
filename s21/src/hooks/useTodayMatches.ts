import { useQuery } from "@tanstack/react-query";
import { matchesService } from "@/services/matches.service";
import { queryKeys } from "@/services/queryKeys";

export function useTodayMatches() {
  return useQuery({
    queryKey: queryKeys.matches.today,
    queryFn: matchesService.getToday,
  });
}
