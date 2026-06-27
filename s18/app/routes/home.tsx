import { AComponent } from "~/components/a";
import type { Route } from "./+types/home";
import { BComponent } from "~/components/b";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <AComponent />
      <BComponent />
    </div>
  );
}
