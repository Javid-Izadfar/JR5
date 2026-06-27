import { useCounterStore } from "~/stores/counter";

export function AComponent() {
  const increment = useCounterStore((s) => s.increment);
  const decrement = useCounterStore((s) => s.decrement);
  const reset = useCounterStore((s) => s.reset);
  return (
    <div className="p-5 bg-blue-900">
      <div className="flex gap-5">
        <button
          onClick={() => increment(10)}
          className="bg-blue-200 cursor-pointer text-black py-1 px-2 inline-block"
        >
          ++
        </button>
        <button
          onClick={() => decrement(10)}
          className="bg-blue-200 cursor-pointer text-black py-1 px-2 inline-block"
        >
          --
        </button>
        <button
          onClick={() => reset()}
          className="bg-blue-200 cursor-pointer text-black py-1 px-2 inline-block"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
