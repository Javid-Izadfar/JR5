import { post } from "@/services/fetch";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: null | Record<string, unknown>;
  token: null | string;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (name: string, email: string, password: string) => void;
  forgotPassword: (email: string) => void;
  resetPassword: (token: string, password: string) => void;
  updateProfile: (data: Record<string, unknown>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: async (_email: string, _password: string) => {
        const result = await post("auth/login", {
          method: "POST",
          body: JSON.stringify({
            // MOCK USER
            username: "mor_2314",
            password: "83r5^_",
          }),
        });

        set((state) => ({
          ...state,
          token: result.token,
        }));
      },
      logout: () => {
        set((state) => ({
          ...state,
          user: null,
          token: null,
        }));
      },
      register: (_name: string, _email: string, _password: string) => {},
      forgotPassword: (_email: string) => {},
      resetPassword: (_token: string, _password: string) => {},
      updateProfile: (_data: Record<string, unknown>) => {},
    }),
    {
      name: "auth-storage",
    },
  ),
);
