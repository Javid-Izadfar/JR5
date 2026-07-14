export interface Team {
  id: string;
  name: string;
  code: string;
  flag: string;
  confederation: string;
  coach: Coach;
  group: string;
  founded: number;
  fifaRanking: number;
}

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  number: number;
  position: PlayerPosition;
  teamId: string;
  photo: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  date: string;
  stadium: string;
  city: string;
  stage: MatchStage;
  referee: string;
  status: MatchStatus;
  homeScore: number;
  awayScore: number;
}

export interface MatchEvent {
  id: string;
  minute: number;
  playerId: string;
  teamId: string;
  type: MatchEventType;
  description: string;
}

export interface Standing {
  group: string;
  teamId: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface Stadium {
  id: string;
  name: string;
  city: string;
  capacity: number;
}

export interface Coach {
  id: string;
  fullName: string;
  nationality: string;
}

export type MatchStatus = "scheduled" | "live" | "finished" | "postponed" | "cancelled";

export type MatchStage =
  | "group"
  | "round_of_32"
  | "round_of_16"
  | "quarter_final"
  | "semi_final"
  | "third_place"
  | "final";

export type PlayerPosition =
  | "goalkeeper"
  | "defender"
  | "midfielder"
  | "forward";

export type MatchEventType = "goal" | "own_goal" | "penalty" | "yellow_card" | "red_card" | "substitution";
