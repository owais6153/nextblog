import { navigationRoutes } from "@/constants/navigation-routes";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Icons } from "../../Icons";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Drawer from "@/components/Drawer";
import SearchModal from "@/components/SearchModal";

const DesktopNav = ({ onOpenSearch }) => {
  return (
    <nav className="w-full bg-white h-[48px] border-b  ">
      <MaxWidthWrapper
        className={"flex items-center justify-between flex-1 h-full"}
      >
        <div>
          <Drawer />
        </div>

        <div className="sm:flex space-x-8 items-center hidden">
          {navigationRoutes.map((nav) => {
            return (
              <Link
                className="text-[14px] font-semibold text-[#0b0a0a] hover:text-[#584646] "
                key={uuidv4()}
                href={nav.href}
              >
                {nav?.title}
              </Link>
            );
          })}
        </div>

        <div className="block sm:hidden">
          <h2 className="tex-xl font-extrabold uppercase">GLOBAL NEWS</h2>
        </div>

        <div className="cursor-pointer">
          <Icons.search onOpenSearch={onOpenSearch} />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default DesktopNav;
