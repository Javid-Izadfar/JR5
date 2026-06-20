import { Child } from "./child";

export function Parent() {
  return (
    <div className="p-5 bg-blue-400">
      <div className="pb-4">Parent Component</div>
      <div className="flex gap-4">
        <Child />
        <Child />
      </div>
    </div>
  );
}
