"use client";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MediaHandles from "@/components/MediaHandles";
import DesktopNav from "../Navbar/desktop-nav";
import SearchModal from "@/components/SearchModal";


import { useState } from "react";

const HeaderApp = () => {

const [isVisible, setIsVisible] = useState(false);

const fadeIn = () => {
  setIsVisible(true);
};

const fadeOut = () => {
  setIsVisible(false);
};
  return (
    <>
      <header className="w-full h-auto py-5 bg-black md:flex items-center hidden  ">
        <MaxWidthWrapper className={"flex items-center flex-1"}>
          <div className="">
            <MediaHandles />
          </div>
          <div className="ml-[27.5%]">
            <Icons.mainLogo />
          </div>
        </MaxWidthWrapper>
      </header>
      <div className="w-full sticky top-0 bg-black md:bg-white z-50 ">
        <DesktopNav onOpenSearch={fadeIn} />
      </div>
      <SearchModal isVisible={isVisible} onClose={fadeOut} />

    </>
  );
};

export default HeaderApp;
