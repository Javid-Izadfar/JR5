import api from "@/lib/axios";
import type { Player } from "@/types";

export const playersService = {
  getById: async (id: string): Promise<Player> => {
    const { data } = await api.get(`/players/${id}`);
    return data;
  },

  getByTeam: async (teamId: string): Promise<Player[]> => {
    const { data } = await api.get(`/players?teamId=${teamId}`);
    return data;
  },

  getTopScorers: async (limit: number = 10): Promise<Player[]> => {
    const { data } = await api.get(`/players/top-scorers?limit=${limit}`);
    return data;
  },
};
