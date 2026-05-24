"use client";

import { useState } from "react";

import {
 createUserWithEmailAndPassword
} from "firebase/auth";

import { auth }
from "@/firebase/config";

import {
 useRouter
} from "next/navigation";

import {
 useAuthStore
} from "@/store/authStore";

export default function RegisterPage() {

 const router =
  useRouter();

 const setUser =
  useAuthStore(
   state => state.setUser
  );

 const [email,setEmail] =
  useState("");

 const [password,setPassword] =
  useState("");

 const [loading,setLoading] =
  useState(false);

 const [error,setError] =
  useState("");

 const handleSubmit = async (
  e: React.FormEvent
 ) => {

  e.preventDefault();

  try {

   setLoading(true);

   const result =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

   const firebaseUser =
    result.user;

   setUser({
      uid: firebaseUser.uid,

      email:
       firebaseUser.email || "",

      name:
       firebaseUser.displayName ||
       "User",
   });

   router.push(
    "/dashboard"
   );

  } catch (err:any) {

    setError(
      err.message
    );

  } finally {

    setLoading(false);

  }
 };

 return (

  <div className="p-10">

   <h1 className="text-3xl mb-5">
    Register
   </h1>

   <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-4 max-w-md"
   >

    <input
     type="email"
     placeholder="Email"
     value={email}
     onChange={(e)=>
      setEmail(e.target.value)}
     className="border p-2"
     required
    />

    <input
     type="password"
     placeholder="Password"
     value={password}
     onChange={(e)=>
      setPassword(e.target.value)}
     className="border p-2"
     required
    />

    <button
     type="submit"
     disabled={loading}
     className="bg-black text-white p-2"
    >

     {loading
      ? "Creating Account..."
      : "Register"}

    </button>

   </form>

   {error && (
    <p className="text-red-500 mt-4">
      {error}
    </p>
   )}

  </div>
 );
}