import { useFavoriteStore } from "@/store/useFavoriteStore";
import { Star, Users, Clock } from "lucide-react";

export function MyWorldCupPage() {
  const { favoriteTeams, favoritePlayers, recentlyViewedTeams } = useFavoriteStore();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">My World Cup</h1>
      <p className="mb-8 text-muted-foreground">Your personalized World Cup dashboard.</p>

      <div className="grid gap-6 md:grid-cols-3">
        <section className="rounded-lg border p-6">
          <div className="mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <h2 className="text-lg font-semibold">Favorite Teams</h2>
          </div>
          {favoriteTeams.length === 0 ? (
            <p className="text-sm text-muted-foreground">No favorite teams yet. Click the heart on a team to add one.</p>
          ) : (
            <ul className="space-y-2">
              {favoriteTeams.map((id) => (
                <li key={id} className="rounded bg-muted px-3 py-2 text-sm font-medium">{id}</li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-lg border p-6">
          <div className="mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-semibold">Favorite Players</h2>
          </div>
          {favoritePlayers.length === 0 ? (
            <p className="text-sm text-muted-foreground">No favorite players yet. Click the heart on a player to add one.</p>
          ) : (
            <ul className="space-y-2">
              {favoritePlayers.map((id) => (
                <li key={id} className="rounded bg-muted px-3 py-2 text-sm font-medium">{id}</li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-lg border p-6">
          <div className="mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-green-500" />
            <h2 className="text-lg font-semibold">Recently Viewed</h2>
          </div>
          {recentlyViewedTeams.length === 0 ? (
            <p className="text-sm text-muted-foreground">No recently viewed teams.</p>
          ) : (
            <ul className="space-y-2">
              {recentlyViewedTeams.map((id) => (
                <li key={id} className="rounded bg-muted px-3 py-2 text-sm font-medium">{id}</li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
