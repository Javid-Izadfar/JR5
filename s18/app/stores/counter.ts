import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_VALUES = {
  count: 125,
  foo: "bar",
};

type CounterStore = {
  count: number;
  foo: string;

  increment: (step: number) => void;
  decrement: (step: number) => void;

  reset: () => void;
};

export const useCounterStore = create<CounterStore>()(
  persist(
    (set) => ({
      ...INITIAL_VALUES,

      increment: (step) =>
        set((state) => ({
          count: state.count + step,
        })),

      decrement: (step) =>
        set((state) => ({
          count: state.count - step,
        })),

      reset: () => set(INITIAL_VALUES),
    }),
    {
      name: "counter",
    },
  ),
);
