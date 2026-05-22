"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  User,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/firebase/config";

import { useAuthStore } from "@/store/authStore";

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext =
  createContext<AuthContextType>({
    user: null,
    loading: true,
  });

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUserState] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  const setUser =
    useAuthStore(
      (state) => state.setUser
    );

  const clearUser =
    useAuthStore(
      (state) => state.clearUser
    );

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          if (currentUser) {
            setUser({
              uid:
                currentUser.uid,

              email:
                currentUser.email ||
                "",

              name:
                currentUser.displayName ||
                "User",
            });
          } else {
            clearUser();
          }

          setUserState(
            currentUser
          );

          setLoading(false);
        }
      );

    return unsubscribe;
  }, [setUser, clearUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);