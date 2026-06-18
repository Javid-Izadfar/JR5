import MoodSelector from "./selector";
import MoodSummery from "./summery";
import MoodHistory from "./history";
import type { Mood } from "~/types/mood";
import { useState } from "react";
import type { Id } from "~/types";

export default function MoodTracker() {
  const [moods, setMoods] = useState<Mood[]>([]);

  const addNewMood = (newMood: Mood) => {
    setMoods((prev) => [newMood, ...prev]);
  };

  const removeMood = (id: Id) => {
    setMoods((prev) => prev.filter((moods) => moods.id !== id));
  };

  return (
    <div className="container p-6 mx-auto">
      <MoodSelector onSubmit={addNewMood} />
      <MoodSummery moods={moods} />
      <MoodHistory moods={moods} onDelete={removeMood} />
    </div>
  );
}
