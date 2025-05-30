import Marquee from "react-fast-marquee";
import Image from "next/image";
import flameImage from "@/public/flame-icon.svg";
import clsx from "clsx";

const MarqueeRow = ({
  hoverPause,
  index,
}: {
  hoverPause?: boolean;
  index?: number;
}) => {
  return (
    <Marquee
      speed={800}
      autoFill={true}
      pauseOnHover={hoverPause ? true : false}
      className={clsx(
        (index ?? 3) % 2 === 0 && "justify-center",
        "flex-1 h-1/10 z-[0] flex items-center text-[10vh] font-bold text-white overflow-y-hidden"
      )}
    >
      <div className="mx-[100px]">
        <Image alt="flame image" src={flameImage} />
      </div>
    </Marquee>
  );
};

export default function MarqueeBg({ hoverPause }: { hoverPause?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden -z-1">
      <div className="absolute -inset-[20%] opacity-75">
        <div className="w-full h-full">
          <div className="flex flex-col h-full">
            {Array.from({ length: 10 }).map((_, index) => (
              <MarqueeRow index={index} key={index} hoverPause={hoverPause} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
