"use client";

import { useState } from "react";

import {
 createUserWithEmailAndPassword
} from "firebase/auth";

import { auth }
from "@/firebase/config";

export default function Register() {

 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [message,setMessage]=useState("");

 const handleSubmit = async (
  e: React.FormEvent
 ) => {

  e.preventDefault();

  try {

   await createUserWithEmailAndPassword(
    auth,
    email,
    password
   );

   setMessage(
    "Account created successfully"
   );

  } catch (error:any) {
   setMessage(error.message);
  }
 };

 return (
  <div className="p-10">

   <h1 className="text-3xl mb-5">
    Register
   </h1>

   <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-3 max-w-md"
   >

    <input
     type="email"
     placeholder="Email"
     value={email}
     onChange={(e)=>
      setEmail(e.target.value)}
     className="border p-2"
    />

    <input
     type="password"
     placeholder="Password"
     value={password}
     onChange={(e)=>
      setPassword(e.target.value)}
     className="border p-2"
    />

    <button
     className="bg-black text-white p-2"
    >
     Register
    </button>

   </form>

   <p>{message}</p>

  </div>
 );
}