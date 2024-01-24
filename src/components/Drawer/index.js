import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { navigationRoutes } from "@/constants/navigation-routes";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Icons } from "../Icons";

function Drawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Icons.bar />
      </SheetTrigger>
      <SheetContent className="drawerBtn" side={"left"}>
        <div className="flex flex-col w-full mt-14">
          {navigationRoutes.map((nav) => {
            return (
              <Link
                key={uuidv4()}
                href={nav.href}
                className="text-[20px] border-b py-3 font-semibold text-[#AAA] hover:text-black"
              >
                {nav.title}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Drawer;
