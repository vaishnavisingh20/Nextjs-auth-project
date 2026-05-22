import Link from "next/link";

export default function Home() {
 return (
  <div className="p-10">

   <h1 className="text-4xl">
    Next Auth Demo
   </h1>

   <div className="mt-5 flex gap-5">

    <Link href="/login">
      Login
    </Link>

    <Link href="/register">
      Register
    </Link>

   </div>

  </div>
 );
}