"use client"

import VortexBG from "@/ui/backgrounds/vortex-bg";
import { PrimaryButton } from "@/ui/global/buttons";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function WipPage() {
  const router = useRouter();

  function returnHome() {
    router.push("/");
  }
  
  return (
    <>
      <VortexBG />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start border-2 border-white p-8 rounded-3xl bg-black/30 backdrop-blur-md w-full max-w-3xl">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              This page is a work in progress.
            </h1>
          </div>
          <ol className="text-lg text-center sm:text-left">
            <li className="mb-2">Check back here later.</li>
          </ol>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <PrimaryButton Icon={HomeIcon} text={"Return Home"} onClick={returnHome} />
          </div>
        </main>
      </div>
    </>
  );
}
