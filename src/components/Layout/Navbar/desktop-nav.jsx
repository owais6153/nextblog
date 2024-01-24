import { navigationRoutes } from "@/constants/navigation-routes";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Icons } from "../../Icons";
import MaxWidthWrapper from "../../MaxWidthWrapper";

const DesktopNav = () => {
  return (
    <nav className="w-full bg-white h-[48px] border-b  ">
      <MaxWidthWrapper
        className={"flex items-center justify-between flex-1 h-full"}
      >
        <div>
          <Icons.bar />
        </div>

        <div className="sm:flex space-x-8 items-center hidden">
          {navigationRoutes.map((nav) => {
            return (
              <Link
                className="text-[14px] font-semibold text-[#AAA] hover:text-black "
                key={uuidv4()}
                href={nav.href}
              >
                {nav?.title}
              </Link>
            );
          })}
        </div>

        <div>
          <Icons.search />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default DesktopNav;
