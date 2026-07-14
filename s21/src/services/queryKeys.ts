export const queryKeys = {
  teams: {
    all: ["teams"] as const,
    detail: (id: string) => ["teams", id] as const,
  },
  matches: {
    all: ["matches"] as const,
    today: ["matches", "today"] as const,
    detail: (id: string) => ["matches", id] as const,
  },
  players: {
    all: ["players"] as const,
    detail: (id: string) => ["players", id] as const,
  },
  standings: {
    all: ["standings"] as const,
    byGroup: (group: string) => ["standings", group] as const,
  },
};
