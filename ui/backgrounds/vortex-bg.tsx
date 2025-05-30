import Image from "next/image";
import flameImage from "@/public/blazevortex-bg-upscaled.png";

export default function VortexBG() {
  return (
    <>
      <div className="fixed bottom-0 left-0 flex justify-end w-screen h-screen opacity-50 -z-1">
        <Image
          src={flameImage}
          width={4000}
          height={4000}
          alt="Flame Background"
          className="object-cover w-full max-h-screen"
        />
      </div>
    </>
  );
}
