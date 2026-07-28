import { Link } from "react-router-dom";
import LoginForm from "@/components/LoginForm";
import { Box } from "@/components/ui/Box";

export default function Home() {
  return (
    <Box
      flex
      flexDir="col"
      className="items-center justify-center min-h-screen gap-4 p-8"
    >
      <h1 className="text-4xl font-bold">Welcome to S23</h1>
      <p className="text-muted-foreground">
        React + React Router + Zustand + shadcn/ui
      </p>
      <LoginForm />
      <Link
        to="/about"
        className="text-primary underline underline-offset-4 hover:text-primary/80"
      >
        Go to About
      </Link>
    </Box>
  );
}
