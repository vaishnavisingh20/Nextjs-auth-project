import { create } from "zustand";

interface AuthUser {
  uid: string;
  email: string;
  name: string;
}

interface AuthState {
  user: AuthUser | null;

  setUser: (user: AuthUser) => void;

  clearUser: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({
    user: null,

    setUser: (user) =>
      set({ user }),

    clearUser: () =>
      set({ user: null }),
  }));