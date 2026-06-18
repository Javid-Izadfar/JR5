import dayjs from "dayjs";
import { useMemo } from "react";
import type { Id } from "~/types";
import type { Mood } from "~/types/mood";
import { moods as moodsDictionary } from "~/utils/dictionaries/moods";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

export default function MoodItem({
  mood,
  onDelete,
}: {
  mood: Mood;
  onDelete: (id: Id) => void;
}) {
  const moodDetail = useMemo(() => moodsDictionary[mood.type], [mood]);
  const createdAt = useMemo(
    () => dayjs(mood.created_at).calendar("jalali").locale("fa"),
    [mood],
  );

  return (
    <div className="flex justify-between gap-2 items-center border border-white/5 p-2 rounded">
      <span className="grow">
        {moodDetail.emoji} {moodDetail.title}
      </span>
      <span className="opacity-40">{createdAt.format("dddd - MMMM DD")}</span>
      <button
        onClick={() => onDelete(mood.id)}
        className="p-2 text-xs bg-blue-950 hover:bg-blue-900 rounded cursor-pointer "
      >
        🗑️
      </button>
    </div>
  );
}
