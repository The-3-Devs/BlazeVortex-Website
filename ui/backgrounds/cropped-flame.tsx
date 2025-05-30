import Image from "next/image"
import flameImage from "@/public/blazevortex-bg.png";

export default function CroppedFlameBG() {
    return (<><div className="absolute bottom-0 left-0 flex justify-end w-full h-full opacity-50 -z-1"><Image src={flameImage} width={4000} height={4000} alt="Flame Background" className="object-cover w-full max-h-screen" /></div></>)
}