import VortexBG from "@/ui/backgrounds/vortex-bg";

export default function CenteredDivPage({ children }: { children?: React.ReactNode }) {

  return (
    <>
      <VortexBG />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start border-2 border-white p-8 rounded-3xl bg-black/30 backdrop-blur-md w-full max-w-3xl">
          {children}
        </main>
      </div>
    </>
  );
}
