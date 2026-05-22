"use client";

import { signOut } from "firebase/auth";

import { auth } from "@/firebase/config";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  const router = useRouter();

  const user =
    useAuthStore(
      (state) => state.user
    );

  const clearUser =
    useAuthStore(
      (state) => state.clearUser
    );

  const logout = async () => {
    await signOut(auth);

    clearUser();

    router.push("/login");
  };

  return (
    <ProtectedRoute>
      <div className="p-10">
        <h1 className="text-4xl mb-6">
          Dashboard
        </h1>

        <div className="space-y-3">
          <p>
            <strong>Name:</strong>{" "}
            {user?.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user?.email}
          </p>

          <p>
            <strong>UID:</strong>{" "}
            {user?.uid}
          </p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded mt-6"
        >
          Logout
        </button>
      </div>
    </ProtectedRoute>
  );
}