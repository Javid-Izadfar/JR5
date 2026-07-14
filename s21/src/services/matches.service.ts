import api from "@/lib/axios";
import type { Match } from "@/types";

export const matchesService = {
  getAll: async (): Promise<Match[]> => {
    const { data } = await api.get("/matches");
    return data;
  },

  getById: async (id: string): Promise<Match> => {
    const { data } = await api.get(`/matches/${id}`);
    return data;
  },

  getToday: async (): Promise<Match[]> => {
    const { data } = await api.get("/matches/today");
    return data;
  },

  getByStage: async (stage: string): Promise<Match[]> => {
    const { data } = await api.get(`/matches?stage=${stage}`);
    return data;
  },

  getByTeam: async (teamId: string): Promise<Match[]> => {
    const { data } = await api.get(`/matches?teamId=${teamId}`);
    return data;
  },
};
