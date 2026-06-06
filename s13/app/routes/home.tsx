import type { Route } from "./+types/home";

import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <div>
        go to <Link to="/about">about page</Link> to learn more about me!
      </div>
    </div>
  );
}
