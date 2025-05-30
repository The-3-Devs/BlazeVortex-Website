"use client";

import { RocketLaunchIcon, BookOpenIcon } from "@heroicons/react/24/solid";

export function AddToServerButton() {
  function AddToServer() {
    alert("Give us a minute, we're working on it!");
  }

  return (
    <button
      type="button"
      className="rounded-full border border-solid border-transparent transition-colors inline-flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      onClick={AddToServer}
    >
      <RocketLaunchIcon width={20} /> Add to your server
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
      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      onClick={viewDocs}
    >
      <BookOpenIcon width={20} className="m-2" /> Read our docs
    </button>
  );
}

