import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground">This is the dashboard page.</p>
      <Link
        to="/"
        className="text-primary underline underline-offset-4 hover:text-primary/80"
      >
        Back to Home
      </Link>
    </div>
  );
}
