import { AddToServerButton, DocsButton } from "@/ui/homepage/homepage-buttons";
import Link from "next/link";
import { ShieldCheckIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-7xl">BlazeVortex</h1>
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
