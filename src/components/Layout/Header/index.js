import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MediaHandles from "@/components/MediaHandles";
import DesktopNav from "../Navbar/desktop-nav";

const Header = () => {
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
        <DesktopNav />
      </div>
    </>
  );
};

export default Header;
