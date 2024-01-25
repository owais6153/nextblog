import { Icons } from "@/components/Icons"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import MediaHandles from "@/components/MediaHandles"

const Footer = () => {
    return (
      <footer className="w-full min-h-[200px] bg-black mt-20">
      <MaxWidthWrapper className={"flex items-center flex-col gap-9 py-12 "}>
        <div>
          <Icons.mainLogo />
        </div>
        <div className="">
          <MediaHandles />
        </div>
      </MaxWidthWrapper>
      <p className="w-full bg-gray-950 py-4 text-white text-center text-sm">
        Copyright © 2023 The Scarlet Faithful. All Rights Reserved.
      </p>
    </footer>
    )
  }
  
  export default Footer