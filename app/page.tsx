import { AddToServerButton, DocsButton } from "@/ui/homepage/homepage-buttons";
import Link from "next/link";
import { ShieldCheckIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import blazevortexLogo from "@/public/blazevortex.png";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex items-center justify-center gap-4">
          <Image
            src={blazevortexLogo}
            width={200}
            height={200}
            alt="BlazeVortex Logo"
            className="rounded-2xl w-[2rem] sm:w-[4rem] md:w-[6rem] lg:w-[8rem] h-auto"
          />
          <h1 className="text-3xl font-bold md:text-7xl sm:text-6xl lg:text-8xl">BlazeVortex</h1>
        </div>
        <ol className="text-lg text-center sm:text-left">
          <li className="mb-2">
            A Discord bot that <i>isn&#39;t</i> helpful.
          </li>
          <li className="tracking-[-.01em]">
            Maintained by{" "}
            <a
              className="text-blue-500 underline"
              href="https://github.com/The-3-Devs"
            >
              T3D
            </a>{" "}
            <span className="text-gray-500">(sometimes)</span>
          </li>
        </ol>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <AddToServerButton />
          <DocsButton />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/tos"
        >
          <DocumentTextIcon className="text-slate-400" width={20} />
          Terms Of Service
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy-policy"
        >
          <ShieldCheckIcon className="text-slate-400" width={24} />
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
