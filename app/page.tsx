import {
  AddToServerButton,
  DocsButton,
  JoinPublicServerButton,
} from "@/ui/homepage/homepage-buttons";
import Link from "next/link";
import { ShieldCheckIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import blazevortexLogo from "@/public/blazevortex.png";
import VortexBG from "@/ui/backgrounds/vortex-bg"

export default function Home() {
  return (
    <>
      <VortexBG />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start border-2 border-white p-8 rounded-3xl bg-black/30 backdrop-blur-md w-full max-w-3xl">
          <div className="flex items-center justify-center gap-4">
            <Image
              src={blazevortexLogo}
              width={200}
              height={200}
              alt="BlazeVortex Logo"
              className="rounded-2xl w-[2rem] sm:w-[4rem] md:w-[6rem] lg:w-[8rem] h-auto"
            />
            <h1 className="text-3xl font-bold md:text-7xl sm:text-6xl lg:text-8xl">
              BlazeVortex
            </h1>
          </div>
          <ol className="text-lg text-center sm:text-left">
            <li className="mb-2">
              A Discord bot that <i>isn&#39;t</i> helpful.
            </li>
            <li className="tracking-[-.01em]">
              Maintained by{" "}
              <a
                className="underline text-[#3874ff]"
                href="https://github.com/The-3-Devs/"
              >
                T3D
              </a>{" "}
              (sometimes)
            </li>
          
          </ol>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <AddToServerButton />
            <DocsButton />
          </div>
          <JoinPublicServerButton />
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center border-2 border-white p-4 rounded-2xl bg-black/30 backdrop-blur-md">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/tos"
          >
            <DocumentTextIcon className="text-slate-300" width={20} />
            Terms Of Service
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/privacy-policy"
          >
            <ShieldCheckIcon className="text-slate-300" width={24} />
            Privacy Policy
          </Link>
        </footer>
      </div>
    </>
  );
}
