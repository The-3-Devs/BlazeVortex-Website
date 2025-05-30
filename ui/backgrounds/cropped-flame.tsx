import Image from "next/image"
import flameImage from "@/public/blazevortex-bg.png";

export default function CroppedFlameBG() {
    return (<><div className="absolute bottom-0 left-0 flex justify-end w-full h-full -z-1 opacity-30"><Image src={flameImage} width={2000} height={2000} alt="Flame Background" className="w-full max-h-screen" /></div></>)
}