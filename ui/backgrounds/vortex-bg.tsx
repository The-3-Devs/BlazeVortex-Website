import Image from "next/image";
import flameImage from "@/public/blazevortex-bg-upscaled-circle.png";

export default function VortexBG() {
  return (
    <>
      <div className="fixed bottom-0 left-0 flex justify-end w-screen h-screen overflow-visible opacity-50 -z-2 pulsing-image">
        <div className="flex items-center justify-center">
          <Image
            src={flameImage}
            width={4000}
            height={4000}
            alt="Flame Background"
            className="object-cover! rotate-image mask-type-alpha mask-radial-at-center radial-opacity-mask"
          />
        </div>
      </div>
    </>
  );
}
