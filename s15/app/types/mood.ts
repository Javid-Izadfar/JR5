import type { Id } from ".";

export type Emotion = "happy" | "sad" | "sleepy" | "neutral" | "bored";

export type Mood = {
  id: Id;
  type: Emotion;
  created_at: Date;
};

export type MoodDetailObj = {
  emoji: string;
  title: string;
  isActive: boolean;
};
export type MoodDetail = Record<Emotion, MoodDetailObj>;
