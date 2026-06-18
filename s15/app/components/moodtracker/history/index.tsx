import type { Mood } from "~/types/mood";
import MoodItem from "./item";
import type { Id } from "~/types";

export default function MoodHistory({
  moods,
  onDelete,
}: {
  moods: Mood[];
  onDelete: (id: Id) => void;
}) {
  return (
    <div className="bg-gray-900 p-4 my-5 rounded">
      <h2 className="text-2xl mb-4 font-bold">History:</h2>
      {moods.length ? (
        <ul className="flex flex-col gap-3">
          {moods.map((mood) => (
            <li key={mood.id}>
              <MoodItem mood={mood} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No moods recorded</p>
      )}
    </div>
  );
}
