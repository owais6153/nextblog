import { cn } from "@/lib/utils";
import {} from "lucide-react";
import { Icons } from "../Icons";

const MediaHandles = () => {
  const styleSocialIcon = (bgClass) => {
    const commonClasses = cn(
      "shrink-0  bg-[rgba(255,255,255,.15)] rounded-full h-10 w-10 flex-all-center cursor-pointer ",
      bgClass
    );
    return commonClasses;
  };

  return (
    <div className="flex items-center gap-[10px]">
      <div className={styleSocialIcon("hover:bg-[#3b5997]")}>
        <Icons.facebook />
      </div>
      <div className={styleSocialIcon(" hover:bg-[#00aced]")}>
        <Icons.twitter />
      </div>
      <div
        className={styleSocialIcon(
          "hover:bg-[url(https://thescarletfaithful.com/wp-content/themes/zox-news/images/insta-bg.gif)]"
        )}
      >
        <Icons.instagram />
      </div>
      <div className={styleSocialIcon(" hover:bg-[#f00]")}>
        <Icons.youtube />
      </div>
    </div>
  );
};

export default MediaHandles;
