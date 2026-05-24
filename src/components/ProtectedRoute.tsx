"use client";

import {
 useEffect
} from "react";

import {
 useRouter
} from "next/navigation";

import {
 useAuthStore
} from "@/store/authStore";

export default function ProtectedRoute({
 children,
}: {
 children: React.ReactNode;
}) {

 const router =
  useRouter();

 const user =
  useAuthStore(
   state => state.user
  );

 const loading =
  useAuthStore(
   state => state.loading
  );

 useEffect(() => {

   if (
     !loading &&
     !user
   ) {

     router.push(
      "/login"
     );

   }

 }, [
   user,
   loading,
   router
 ]);

 if (loading)
   return (
    <p className="p-10">
      Loading...
    </p>
   );

 if (!user)
   return null;

 return <>{children}</>;
}