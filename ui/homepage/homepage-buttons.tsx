"use client";

import { RocketLaunchIcon, BookOpenIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export function AddToServerButton() {
  const router = useRouter();

  function AddToServer() {
    router.push("https://discord.com/oauth2/authorize?client_id=1334211480492572775&permissions=1698731708120145&scope=bot");
  }

  return (
    <button
      type="button"
      className="rounded-full border border-solid border-transparent transition-colors inline-flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      onClick={AddToServer}
    >
      <RocketLaunchIcon width={20} /> Add to your server
    </button>
  );
}

export function JoinPublicServerButton() {
  const router = useRouter();

  function AddToServer() {
    router.push("https://discord.gg/y7VPuQuD2f");
  }

  return (
    <button
      type="button"
      className="rounded-full border border-solid border-transparent transition-colors inline-flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      onClick={AddToServer}
    >
      <QuestionMarkCircleIcon width={24} /> Join Our Support Server For Help
    </button>
  );
}

export function DocsButton() {
  function viewDocs() {
    alert("Give us a minute, we're working on it!");
  }

  return (
    <button
      type="button"
      className="rounded-full border border-solid border-white transition-colors flex items-center justify-center bg-black/40 hover:bg-[#1a1a1a] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      onClick={viewDocs}
    >
      <BookOpenIcon width={20} className="m-2" /> Read our docs
    </button>
  );
}

