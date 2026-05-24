"use client";

import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/firebase/config";

import { useAuthStore } from "@/store/authStore";

export default function AuthInitializer() {
  const setUser =
    useAuthStore(
      (state) => state.setUser
    );

  const setLoading =
    useAuthStore(
      (state) => state.setLoading
    );

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (firebaseUser) => {
          if (firebaseUser) {
            setUser({
              uid: firebaseUser.uid,

              email:
                firebaseUser.email || "",

              name:
                firebaseUser.displayName ||
                "User",
            });
          } else {
            setUser(null);
          }

          setLoading(false);
        }
      );

    return unsubscribe;
  }, [setUser, setLoading]);

  return null;
}