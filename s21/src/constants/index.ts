export const MatchStatus = {
  SCHEDULED: "scheduled",
  LIVE: "live",
  FINISHED: "finished",
  POSTPONED: "postponed",
  CANCELLED: "cancelled",
} as const;

export const MatchStage = {
  GROUP: "group",
  ROUND_OF_32: "round_of_32",
  ROUND_OF_16: "round_of_16",
  QUARTER_FINAL: "quarter_final",
  SEMI_FINAL: "semi_final",
  THIRD_PLACE: "third_place",
  FINAL: "final",
} as const;

export const PlayerPosition = {
  GOALKEEPER: "goalkeeper",
  DEFENDER: "defender",
  MIDFIELDER: "midfielder",
  FORWARD: "forward",
} as const;

export const MATCH_STAGE_LABELS: Record<string, string> = {
  group: "Group Stage",
  round_of_32: "Round of 32",
  round_of_16: "Round of 16",
  quarter_final: "Quarter Final",
  semi_final: "Semi Final",
  third_place: "Third Place",
  final: "Final",
};

export const POSITION_LABELS: Record<string, string> = {
  goalkeeper: "GK",
  defender: "DEF",
  midfielder: "MID",
  forward: "FWD",
};
