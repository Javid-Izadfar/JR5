import api from "@/lib/axios";
import type { Team } from "@/types";

export const teamsService = {
  getAll: async (): Promise<Team[]> => {
    const { data } = await api.get("/teams");
    return data;
  },

  getById: async (id: string): Promise<Team> => {
    const { data } = await api.get(`/teams/${id}`);
    return data;
  },

  getByGroup: async (group: string): Promise<Team[]> => {
    const { data } = await api.get(`/teams?group=${group}`);
    return data;
  },
};
