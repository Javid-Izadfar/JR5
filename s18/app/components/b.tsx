import { useCounterStore } from "~/stores/counter";

export function BComponent() {
  const count = useCounterStore((s) => s.count);
  const foo = useCounterStore((s) => s.foo);
  return (
    <div className="p-5 bg-green-900">
      Value from Store: {count} <br />
      Foo = {foo}
    </div>
  );
}
