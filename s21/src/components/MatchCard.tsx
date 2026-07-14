import { Link } from "react-router-dom";
import type { Match } from "@/types";
import { format } from "date-fns";

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  const matchDate = new Date(match.date);
  const isFinished = match.status === "finished";
  const isLive = match.status === "live";

  return (
    <Link
      to={`/matches/${match.id}`}
      className="block rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{format(matchDate, "MMM d, yyyy")}</span>
        <span>{match.stadium}</span>
      </div>

      <div className="mt-3 flex items-center justify-center gap-4">
        <div className="flex-1 text-right">
          <p className="font-semibold">{match.homeTeamId}</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          {isFinished || isLive ? (
            <div className="flex items-center gap-2 text-2xl font-bold">
              <span>{match.homeScore}</span>
              <span className="text-muted-foreground">-</span>
              <span>{match.awayScore}</span>
            </div>
          ) : (
            <span className="text-sm font-medium text-muted-foreground">vs</span>
          )}
          <span
            className={`rounded px-2 py-0.5 text-xs font-medium ${
              isLive
                ? "bg-red-100 text-red-700"
                : isFinished
                  ? "bg-gray-100 text-gray-700"
                  : "bg-blue-100 text-blue-700"
            }`}
          >
            {match.status}
          </span>
        </div>

        <div className="flex-1 text-left">
          <p className="font-semibold">{match.awayTeamId}</p>
        </div>
      </div>
    </Link>
  );
}
