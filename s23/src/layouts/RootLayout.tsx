import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/stores/auth";

const PROTECTED_URLS = ["/Dashboard"];

export default function RootLayout() {
  const isLoggedin = !!useAuthStore((state) => state.token);
  const location = useLocation();

  if (!isLoggedin && PROTECTED_URLS.includes(location.pathname)) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  );
}
