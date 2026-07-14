import api from "@/lib/axios";
import type { Standing } from "@/types";

export const standingsService = {
  getAll: async (): Promise<Standing[]> => {
    const { data } = await api.get("/standings");
    return data;
  },

  getByGroup: async (group: string): Promise<Standing[]> => {
    const { data } = await api.get(`/standings?group=${group}`);
    return data;
  },
};
