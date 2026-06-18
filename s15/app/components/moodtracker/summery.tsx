import { useMemo } from "react";
import type { Mood, MoodDetailObj } from "~/types/mood";
import { moods as moodsDictionary } from "~/utils/dictionaries/moods";

export default function MoodSummery({ moods }: { moods: Mood[] }) {
  const latest = useMemo<MoodDetailObj | null>(() => {
    if (!moods.length) return null;

    return moodsDictionary[moods[0].type];
  }, [moods]);

  return (
    <div className="bg-gray-900 p-4 my-5 rounded">
      <h2 className="text-2xl mb-4 font-bold">Summery:</h2>
      <div>Total Moods: {moods.length}</div>
      <div>
        Last Mood:{" "}
        {latest ? (
          <>
            {latest.emoji} {latest.title}
          </>
        ) : (
          "-"
        )}
      </div>
    </div>
  );
}
