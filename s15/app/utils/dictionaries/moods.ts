import type { MoodDetail } from "~/types/mood";

export const moods: MoodDetail = {
  happy: {
    emoji: "😄",
    title: "شنگول",
    isActive: true,
  },
  sad: {
    emoji: "😢",
    title: "داغون",
    isActive: true,
  },
  sleepy: {
    emoji: "😴",
    title: "خوابالو",
    isActive: true,
  },
  neutral: {
    emoji: "😐",
    title: "مه",
    isActive: true,
  },
  bored: {
    emoji: "😐",
    title: "حوصله سر رفته",
    isActive: false,
  },
};
