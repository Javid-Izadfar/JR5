import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { MatchesPage } from "@/pages/MatchesPage";
import { MatchDetailPage } from "@/pages/MatchDetailPage";
import { TeamsPage } from "@/pages/TeamsPage";
import { TeamDetailPage } from "@/pages/TeamDetailPage";
import { PlayerDetailPage } from "@/pages/PlayerDetailPage";
import { StandingsPage } from "@/pages/StandingsPage";
import { MyWorldCupPage } from "@/pages/MyWorldCupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "matches", element: <MatchesPage /> },
      { path: "matches/:id", element: <MatchDetailPage /> },
      { path: "teams", element: <TeamsPage /> },
      { path: "teams/:id", element: <TeamDetailPage /> },
      { path: "players/:id", element: <PlayerDetailPage /> },
      { path: "standings", element: <StandingsPage /> },
      { path: "my-world-cup", element: <MyWorldCupPage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
