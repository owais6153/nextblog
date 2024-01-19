import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Home() {
  return (
    <main className="relative">

    <div className="w-full absolute -z-[1]">
        <Image width={1920} height={14687}  src="/images/themlayout.png" alt="Image" className="object-contain" />
    </div>

    <div className="w-full h-[180px] bg-slate-800 opacity-50">

    </div>

    </main>
  );
}
