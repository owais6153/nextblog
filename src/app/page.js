import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Icons } from "@/components/Icons";
import MediaHandles from "@/components/MediaHandles";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main className="relative">
      <div className="w-full absolute -z-[1]">
        <Image
          width={1920}
          height={14687}
          src="/images/themlayout.png"
          alt="Image"
          className="object-contain"
        />
      </div>

      {/* Header Start */}
      <header className="w-full h-[180px] bg-black flex items-center ">
        <MaxWidthWrapper className={'flex items-center flex-1'}>
          <div className="">
            <MediaHandles />
          </div>
          <div className="mx-auto">
            <Icons.mainLogo />
          </div>
        </MaxWidthWrapper>
      </header>
      {/* Header close */}

      {/* Nav Bar start */}
      <nav className="w-full bg-slate-400 h-[44px]"></nav>
      {/* Nav Bar close */}

      {/* Google Add space start */}
      <div className="w-full h-[280px] bg-black opacity-30"></div>
      {/* Google Add space close */}

      {/* Hero Section Layout start */}
      <div className="w-full h-[1280px] bg-green-600 opacity-60 flex flex-wrap ">
        {/* Trending section */}
        <section className="bg-red-600  flex-1 h-full shrink-0 "></section>

        {/* Live or main section */}
        <section className="bg-gray-800 flex-1 h-full shrink-0 "></section>

        {/* Latest section */}
        <section className="bg-black-500 flex-1 h-full shrink-0 "></section>
      </div>
      {/* Hero Section Layout close */}
    </main>
  );
}
