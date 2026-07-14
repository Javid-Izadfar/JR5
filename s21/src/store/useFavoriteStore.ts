import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteState {
  favoriteTeams: string[];
  favoritePlayers: string[];
  recentlyViewedTeams: string[];
  toggleFavoriteTeam: (teamId: string) => void;
  toggleFavoritePlayer: (playerId: string) => void;
  addRecentlyViewedTeam: (teamId: string) => void;
  isFavoriteTeam: (teamId: string) => boolean;
  isFavoritePlayer: (playerId: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favoriteTeams: [],
      favoritePlayers: [],
      recentlyViewedTeams: [],

      toggleFavoriteTeam: (teamId: string) => {
        set((state) => ({
          favoriteTeams: state.favoriteTeams.includes(teamId)
            ? state.favoriteTeams.filter((id) => id !== teamId)
            : [...state.favoriteTeams, teamId],
        }));
      },

      toggleFavoritePlayer: (playerId: string) => {
        set((state) => ({
          favoritePlayers: state.favoritePlayers.includes(playerId)
            ? state.favoritePlayers.filter((id) => id !== playerId)
            : [...state.favoritePlayers, playerId],
        }));
      },

      addRecentlyViewedTeam: (teamId: string) => {
        set((state) => ({
          recentlyViewedTeams: [
            teamId,
            ...state.recentlyViewedTeams.filter((id) => id !== teamId),
          ].slice(0, 10),
        }));
      },

      isFavoriteTeam: (teamId: string) => {
        return get().favoriteTeams.includes(teamId);
      },

      isFavoritePlayer: (playerId: string) => {
        return get().favoritePlayers.includes(playerId);
      },
    }),
    {
      name: "world-cup-hub-favorites",
    },
  ),
);
