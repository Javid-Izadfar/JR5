import { moods } from "~/utils/dictionaries/moods";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import type { Mood } from "~/types/mood";

export default function MoodSelector({
  onSubmit,
}: {
  onSubmit: (newMood: Mood) => void;
}) {
  const { register, handleSubmit } = useForm();

  const options = Object.entries(moods)
    .filter(([_, value]) => value.isActive)
    .map(([key, value]) => ({
      type: key,
      title: value.title,
    }));

  const createNewMood = (data: any) => {
    onSubmit({
      id: nanoid(),
      type: data.newMood,
      created_at: new Date(),
    });
  };

  return (
    <div className="bg-gray-900 p-4 my-5 rounded">
      <form onSubmit={handleSubmit(createNewMood)}>
        <div className="flex gap-4">
          <select
            {...register("newMood")}
            className="bg-gray-600 block p-2 w-full rounded"
          >
            {options.map((emotion) => (
              <option key={emotion.type} value={emotion.type}>
                {emotion.title}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-900 px-4 py-2 rounded cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
