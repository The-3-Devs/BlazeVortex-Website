"use client";

import Image from "next/image";
import Link from "next/link";
import blazevortexLogo from "@/public/blazevortex.png";

export default function Navbar() {
  return (
    <>
      <div className="absolute top-0 flex items-center justify-center w-full">
        <div className="flex items-center justify-center gap-2 p-2 px-4 m-2 border-2 border-white rounded-3xl bg-black/60 backdrop-blur-md">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              alt="BlazeVortex Logo"
              width={100}
              height={100}
              src={blazevortexLogo}
              className="rounded-2xl w-[2rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] h-auto"
            />
            <h3 className="pl-2 text-3xl font-bold border-l-2 border-l-gray-600">
              BlazeVortex
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}
